<template>
  <div class="q-pa-md column items-center">
    <div class="text-primary text-h3 text-weight-bolder">Bienvenido!</div>
    <div class="text-black text-h6 q-mb-lg">Asignaturas</div>
    <q-list>
      <q-card v-for="(item,index) in asig" :key="index" v-ripple class="q-pa-sm q-mb-md bordes">
        <q-item>
          <q-item-section @click="$router.push('/test/' + asig[index].id)">
            <q-item>
              <q-item-section avatar>
                <q-icon name="menu_book" size="30px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-black text-weight-bolder text-h6">{{item.name}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense round class="q-mx-sm" color="primary" icon="edit" @click="editAsig(index)"/>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar Asignatura</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input rounded dense outlined type="text" v-model="newName" label="Nuevo nombre" style="width: 300px">
            <template v-slot:prepend>
              <q-icon name="edit" color="primary"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup no-caps/>
          <q-btn flat label="Actualizar" color="primary" v-close-popup @click="actualizarAsig(newName)" no-caps/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      edit: false,
      newName: '',
      item: 0,
      asig: [
        {
          id: 1,
          name: 'Nomenclatura náutica'
        },
        {
          id: 2,
          name: 'Amarre y fondeo'
        },
        {
          id: 3,
          name: 'Seguridad en la mar'
        },
        {
          id: 4,
          name: 'Legislación'
        },
        {
          id: 5,
          name: 'Balizamiento'
        },
        {
          id: 6,
          name: 'Reglamento'
        },
        {
          id: 7,
          name: 'Maniobras en la mar'
        },
        {
          id: 8,
          name: 'Emergencias en la mar'
        },
        {
          id: 9,
          name: 'Metodología'
        },
        {
          id: 10,
          name: 'Navegación'
        },
        {
          id: 11,
          name: 'Carta náutica'
        }
      ]
    }
  },
  methods: {
    actualizarAsig () {
      this.asig[this.item].name = this.newName
      this.newName = ''
    },
    editAsig (ind) {
      this.edit = true
      this.item = ind
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
