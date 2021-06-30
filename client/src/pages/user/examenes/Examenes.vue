<template>
  <q-page class="q-pa-md">
    <div class="text-h6 asd" style="font-size:30px;">Listado de examenes</div>
    <div class="text-subtitle1">Informacion de general</div>
    <div class="text-caption text-grey">Ingresa la informacion general del examen</div>

    <div>
      <q-table class="q-mt-sm" :data="data" :columns="columns" row-key="name" separator="none" flat bordered no-data-label="Sin datos" >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div class="row justify-center">
              <q-btn icon="delete" color="negative" dense size="md" flat @click="confirmDelete(props.row._id)" />
              <q-btn icon="edit" color="primary" dense size="md" flat @click="$router.push('/exams/form/' + props.row._id)" />
            </div>
          </q-td>
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
        { name: 'codigo', align: 'center', label: 'Codigo', field: 'codigo', sortable: true },
        { name: 'name', align: 'center', label: 'Nombre de examen', field: 'name', sortable: true },
        { name: 'licencia', align: 'center', label: 'Licencia', field: 'licencia', sortable: true },
        { name: 'fechaT', align: 'center', label: 'Fecha de termino', field: 'fechaT', sortable: true },
        { name: 'actions', label: 'Acciones', field: 'actions', align: 'center' }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
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
    }
  }
}
</script>

<style>
.asd {
  font-weight: 400 !important;
}
</style>
