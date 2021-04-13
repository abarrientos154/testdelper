<template>
  <div class="q-pa-md column items-center">
    <div class="text-primary text-h3 text-weight-bolder q-mb-lg">Temas</div>
    <q-list class="column items-center" style="width: 100%" v-if="temas.length > 0">
      <q-card v-for="(item,index) in temas" :key="index" v-ripple class="q-pa-sm q-mb-md bordes" style="width: 75%; min-width: 300px; max-width: 500px">
        <q-item>
          <q-item-section @click="$router.push('/exam/' + item._id)">
            <q-item>
              <q-item-section avatar>
                <q-icon name="source" size="30px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-black text-weight-bolder text-h6">{{item.name}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense round class="q-mx-sm" color="primary" icon="edit" @click="editTem(item)"/>
            <q-btn flat dense round class="q-mx-sm" color="red" icon="delete" @click="eiminarTem(item._id)"/>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin Temas...</div>
    </q-card>
    <q-dialog v-model="nuevo" @hide="decartarCamb()">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{edit ? 'Editar Tema' : 'Crear Tema'}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input rounded dense outlined type="text" v-model="form.name" label="Nuevo nombre" :error="$v.form.name.$error" error-message="Este campo es requerido"  @blur="$v.form.name.$touch()">
            <template v-slot:prepend>
              <q-icon name="edit" color="primary"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup @click="decartarCamb()" no-caps/>
          <q-btn flat :label="edit ? 'Actualizar' :  'Crear'" color="primary" v-close-popup @click="edit ? actualizarTem() : crearTem()" no-caps/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="top-right" :offset="[20, 20]">
      <q-btn round icon="add" color="primary" size="20px" @click="editTem()"/>
    </q-page-sticky>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      edit: false,
      nuevo: false,
      form: {},
      item: 0,
      temas: []
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) }
    }
  },
  mounted () {
    this.getTem(this.$route.params.id)
    this.form.asignatura_id = this.$route.params.id
  },
  methods: {
    actualizarTem () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$q.loading.show({
          message: 'Actualizando Tema, Por Favor Espere...'
        })
        this.$api.put('tema/' + this.form._id, this.form).then((res) => {
          if (res) {
            this.$q.loading.hide()
            this.$q.notify({
              color: 'positive',
              message: 'Tema Actualizado Correctamente'
            })
            this.getTem(this.$route.params.id)
          }
        })
      }
    },
    decartarCamb () {
      this.form = {}
      this.edit = false
    },
    editTem (itm) {
      if (itm) {
        var datos = { ...itm }
        this.form = datos
        this.nuevo = true
        this.edit = true
      } else {
        this.nuevo = true
      }
    },
    crearTem () {
      this.$v.$touch()
      this.form.asignatura_id = this.$route.params.id
      if (!this.$v.form.$error) {
        this.$q.loading.show({
          message: 'Subiendo Tema, Por Favor Espere...'
        })
        this.$api.post('tema', this.form).then((res) => {
          if (res) {
            this.$q.loading.hide()
            this.$q.notify({
              color: 'positive',
              message: 'Tema Creado Correctamente'
            })
            this.getTem(this.$route.params.id)
          }
        })
      }
    },
    eiminarTem (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar este tema?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('tema/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Eliminado Correctamente'
            })
            this.getTem(this.$route.params.id)
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    getTem (id) {
      this.$api.get('tema_by_asignatura/' + id).then(res => {
        if (res) {
          this.temas = res
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-left: 6px solid $primary;
  background-color: rgba(202, 202, 202, 0.474);
  border-radius: 12px;
}
</style>
