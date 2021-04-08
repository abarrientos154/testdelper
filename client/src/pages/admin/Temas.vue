<template>
  <div class="q-pa-md column items-center">
    <div class="text-primary text-h3 text-weight-bolder q-mb-lg">Temas</div>
    <q-list class="column items-center" style="width: 100%">
      <q-card v-for="(item,index) in temas" :key="index" v-ripple class="q-pa-sm q-mb-md bordes" style="width: 75%; min-width: 300px; max-width: 500px">
        <q-item>
          <q-item-section @click="$router.push('/test/' + item.id)">
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
            <q-btn flat dense round class="q-mx-sm" color="primary" icon="edit" @click="editTem(item,index)"/>
            <q-btn flat dense round class="q-mx-sm" color="red" icon="delete" @click="EliminarTem(index)"/>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{item > temas.length ? 'Añadir Tema' : 'Editar Tema'}}</div>
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
          <q-btn flat :label="item > temas.length ? 'Crear' : 'Actualizar'" color="primary" v-close-popup @click="actualizarTem()" no-caps/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="top-right" :offset="[20, 20]">
      <q-btn round icon="add" color="primary" size="20px" @click="crearTem()"/>
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
      temas: [
        {
          id: 1,
          name: 'Tema 1'
        },
        {
          id: 2,
          name: 'Tema 2'
        },
        {
          id: 3,
          name: 'Tema 3'
        }
      ]
    }
  },
  methods: {
    actualizarTem () {
      if (this.temas.length < this.item) {
        this.newDatos.id = this.item
        this.temas.push(this.newDatos)
      } else {
        this.temas[this.item].name = this.newDatos.name
      }
      this.newDatos = {}
    },
    decartarCamb () {
      this.newDatos = {}
    },
    editTem (itm, ind) {
      const newd = { ...itm }
      this.edit = true
      this.item = ind
      this.newDatos = newd
    },
    crearTem () {
      this.edit = true
      this.item = this.temas.length + 1
    },
    EliminarTem (ind) {
      this.temas.splice(ind, 1)
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
