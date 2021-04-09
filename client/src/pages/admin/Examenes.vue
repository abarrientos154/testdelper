<template>
  <div class="q-pa-md column items-center">
    <div class="text-primary text-h3 text-weight-bolder q-mb-lg">Examenes</div>
    <q-list class="column items-center" style="width: 100%">
      <q-card v-for="(item,index) in exsamenes" :key="index" v-ripple class="q-pa-sm q-mb-md bordes" style="width: 75%; min-width: 300px; max-width: 500px">
        <q-item>
          <q-item-section @click="$router.push('/exam/' + item.id)">
            <q-item>
              <q-item-section avatar>
                <q-icon name="grading" size="30px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-black text-weight-bolder text-h6">{{item.name}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense round class="q-mx-sm" color="primary" icon="edit" @click="editExam(item,index)"/>
            <q-btn flat dense round class="q-mx-sm" color="red" icon="delete" @click="eiminarExam(index)"/>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{item > exsamenes.length ? 'Crear Examen' : 'Editar Examen'}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input rounded dense outlined type="text" v-model="newDatos.name" label="Nuevo nombre" style="width: 300px">
            <template v-slot:prepend>
              <q-icon name="edit" color="primary"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup @click="decartarCamb()" no-caps/>
          <q-btn flat :label="item > exsamenes.length ? 'Crear' : 'Actualizar'" color="primary" v-close-popup @click="actualizarExam()" no-caps/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="top-right" :offset="[20, 20]">
      <q-btn round icon="add" color="primary" size="20px" @click="crearExam()"/>
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  data () {
    return {
      edit: false,
      newDatos: {},
      item: 0,
      exsamenes: [
        {
          id: 1,
          name: 'Examen 1'
        },
        {
          id: 2,
          name: 'Examen 2'
        },
        {
          id: 3,
          name: 'Examen 3'
        }
      ]
    }
  },
  methods: {
    actualizarExam () {
      if (this.exsamenes.length < this.item) {
        this.newDatos.id = this.item
        this.exsamenes.push(this.newDatos)
      } else {
        this.exsamenes[this.item].name = this.newDatos.name
      }
      this.newDatos = {}
    },
    decartarCamb () {
      this.newDatos = {}
    },
    editExam (itm, ind) {
      const newd = { ...itm }
      this.edit = true
      this.item = ind
      this.newDatos = newd
    },
    crearExam () {
      this.edit = true
      this.item = this.exsamenes.length + 1
    },
    eiminarExam (ind) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas elimirar este exsamenes?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.exsamenes.splice(ind, 1)
      }).onCancel(() => {
        // cancel
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
