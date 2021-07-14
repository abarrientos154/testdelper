<template>
  <q-page class="q-pa-md">
    <div class="text-h6 asd" style="font-size:30px;">Listado de examenes</div>
    <div class="text-subtitle1">Informacion de general</div>
    <div class="text-caption text-grey">Ingresa la informacion general del examen</div>

    <div>
      <q-table class="q-mt-sm" :data="data" :columns="columns" row-key="_id" separator="none" flat bordered no-data-label="Sin datos" dense style="padding:0px !important;">
        <template v-slot:body="props">
        {{props.row.duplicatev}}
          <q-tr :props="props" :class="props.row.duplicate ? 'bg-red-1' : ''">
            <q-td key="tLicencia" :props="props" class="row items-center">
              {{ props.row.tLicencia }}
            </q-td>
            <q-td key="ciudad" :props="props">{{ props.row.ciudad }}</q-td>
            <q-td key="comunidadA" :props="props">{{ props.row.comunidadA }}</q-td>
            <q-td key="fechaE" :props="props">{{ props.row.fechaE }}</q-td>
            <q-td key="horaE" :props="props">{{ props.row.horaE }}</q-td>
            <q-td key="fechaA" :props="props">{{ props.row.fechaA }}</q-td>
            <q-td key="fechaC" :props="props">{{ props.row.fechaC }}</q-td>
            <q-td key="tasa" :props="props">{{ props.row.tasa }}</q-td>
            <q-td key="ubicacion" :props="props">{{ props.row.ubicacion }}</q-td>
            <q-td key="actions" :props="props">
              <div>
                <q-btn icon="delete" color="negative" dense size="sm" flat @click="confirmDelete(props.row._id)" />
                <q-btn icon="edit" color="primary" dense size="sm" flat @click="$router.push('/exams/form/' + props.row._id)" />
                <q-btn icon="content_copy" color="primary" dense size="sm" flat @click="confirmCopy(props.row._id)" >
                  <q-tooltip>
                    Duplicar Examen
                  </q-tooltip>
                </q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="primary" label="Nuevo Examen" push @click="$router.push('/exams/form')" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      columns: [
        { name: 'tLicencia', align: 'center', label: 'Titulo', field: 'tLicencia', sortable: true },
        { name: 'comunidadA', align: 'center', label: 'CCA', field: 'comunidadA', sortable: true },
        { name: 'ciudad', align: 'center', label: 'Localidad', field: 'ciudad', sortable: true },
        { name: 'fechaA', align: 'center', label: 'Fecha Apertura', field: 'fechaA', sortable: true },
        { name: 'fechaC', align: 'center', label: 'Fecha Cierre', field: 'fechaC', sortable: true },
        { name: 'fechaE', align: 'center', label: 'Fecha Examen', field: 'fechaE', sortable: true },
        { name: 'tasa', align: 'center', label: 'Tasa', field: 'tasa', sortable: true },
        { name: 'horaE', align: 'center', label: 'Hora Examen', field: 'horaE', sortable: true },
        { name: 'ubicacion', align: 'center', label: 'Ubicacion', field: 'ubicacion', sortable: true },
        { name: 'actions', label: 'Acciones', field: 'actions', align: 'center' }
      ]
    }
  },
  async mounted () {
    await this.changeDuplicate()
  },
  methods: {
    async changeDuplicate () {
      this.$q.loading.show()
      await this.$api.put('changeduplicados')
      await this.getData()
      this.$q.loading.hide()
    },
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get('examen')
      this.$q.loading.hide()
      this.data = res
    },
    async confirmDelete (id) {
      this.$q.dialog({
        title: '¡Confirmación!',
        message: '¿Desea eliminar el examen?',
        cancel: true,
        persistent: true,
        ok: 'Si',
        class: 'my-font-regular'
      }).onOk(() => {
        this.deleteItem(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    async deleteItem (id) {
      this.$q.loading.show()
      const res = await this.$api.delete('examen/' + id)
      this.$q.loading.hide()
      if (res) {
        this.getData()
      }
    },
    async confirmCopy (id) {
      this.$q.dialog({
        title: '¡Confirmación!',
        message: '¿Esta seguro que desea duplicar el examen?',
        cancel: true,
        persistent: true,
        ok: 'Si'
      }).onOk(() => {
        this.duplicateItem(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    async duplicateItem (id) {
      this.$q.loading.show()
      const res = await this.$api.post('duplicate_exam/' + id)
      this.$q.loading.hide()
      if (res) {
        this.$q.notify({
          message: 'Se ha duplicado el examen',
          color: 'positive'
        })
        await this.getData()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.es-duplicado {
  width:5px;
  height:5px;
  background-color: $negative;
  border-radius: 100%;
}
</style>
