<template>
  <div class="q-pa-md column items-center">
    <div class="text-primary text-h3 text-weight-bolder">Bienvenido!</div>
    <div class="text-black text-h6 q-mb-lg">Asignaturas</div>
    <q-list class="column items-center" style="width: 100%">
      <q-card v-for="(item,index) in asig" :key="index" v-ripple class="q-pa-sm q-mb-md bordes" style="width: 75%; min-width: 300px; max-width: 500px">
        <q-item>
          <q-item-section @click="$router.push('/temas/' + asig[index].id)">
            <q-item>
              <q-item-section avatar>
                <q-icon name="menu_book" size="30px"/>
              </q-item-section>
              <q-item-section class="colum">
                <q-item-label class="text-black text-weight-bolder text-h6">{{item.name}}</q-item-label>
                <div>
                  <q-chip text-color="white" :label="item.status ? 'Paga' : 'Gratuita'" :color="item.status ? 'green-14' : 'primary'" />
                </div>
              </q-item-section>
            </q-item>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense round class="q-mx-sm" color="primary" icon="edit" @click="editAsig(item,index)"/>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar Asignatura</div>
        </q-card-section>
        <q-card-section class="q-pt-none row">
          <div class="col">
            <q-input rounded dense outlined type="text" v-model="newDatos.name" label="Nuevo nombre" style="width: 300px" :error="$v.newDatos.name.$error" error-message="Este campo es requerido"  @blur="$v.newDatos.name.$touch()">
              <template v-slot:prepend>
                <q-icon name="edit" color="primary"/>
              </template>
            </q-input>
            <q-chip text-color="white" :label="newDatos.status ? 'Paga' : 'Gratuita'" :color="newDatos.status ? 'green-14' : 'primary'" />
          </div>
          <div class="col-2">
            <q-toggle
                @input="newDatos.status != newDatos.status"
                v-model="newDatos.status"
                checked-icon="attach_money"
                unchecked-icon="star"
                :color="newDatos.status ? 'green-14' : 'primary'"
                keep-color
                />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup @click="decartarCamb()" no-caps/>
          <q-btn flat label="Actualizar" color="primary" v-close-popup @click="actualizarAsig()" no-caps/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      edit: false,
      newDatos: {},
      item: 0,
      asig: [
        {
          id: 1,
          name: 'Nomenclatura náutica',
          status: false
        },
        {
          id: 2,
          name: 'Amarre y fondeo',
          status: false
        },
        {
          id: 3,
          name: 'Seguridad en la mar',
          status: false
        },
        {
          id: 4,
          name: 'Legislación',
          status: false
        },
        {
          id: 5,
          name: 'Balizamiento',
          status: false
        },
        {
          id: 6,
          name: 'Reglamento',
          status: false
        },
        {
          id: 7,
          name: 'Maniobras en la mar',
          status: false
        },
        {
          id: 8,
          name: 'Emergencias en la mar',
          status: false
        },
        {
          id: 9,
          name: 'Metodología',
          status: false
        },
        {
          id: 10,
          name: 'Navegación',
          status: false
        },
        {
          id: 11,
          name: 'Carta náutica',
          status: false
        }
      ]
    }
  },
  validations: {
    newDatos: {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) }
    }
  },
  methods: {
    actualizarAsig () {
      this.$v.$touch()
      if (!this.$v.newDatos.$error) {
        this.asig[this.item].name = this.newDatos.name
        this.asig[this.item].status = this.newDatos.status
        this.newDatos = {}
      }
    },
    decartarCamb () {
      this.newDatos = {}
    },
    editAsig (itm, ind) {
      const newd = { ...itm }
      this.edit = true
      this.item = ind
      this.newDatos = newd
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
