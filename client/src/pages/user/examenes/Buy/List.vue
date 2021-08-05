<template>
  <q-page class="q-pa-md">
    <div class="text-h6">Lista de Examenes</div>
    <q-table :data="data" :columns="columns" row-key="_id" separator="horizontal" flat bordered no-data-label="Sin datos">
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <q-btn color="primary" icon="credit_card" size="sm" class="q-ml-sm" flat dense :to="'buy_exams/form/' + props.row._id" >
            <q-tooltip>
              Comprar Examen
            </q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      columns: [
        { name: 'Action', label: 'Comprar', field: 'Action', sortable: false, align: 'center' },
        { name: 'tLicencia', align: 'left', label: 'Titulo', field: 'tLicencia', sortable: true },
        { name: 'comunidadA', align: 'left', label: 'CCA', field: 'comunidadA', sortable: true },
        { name: 'ciudad', align: 'center', label: 'Localidad', field: 'ciudad', sortable: true },
        { name: 'fechaA', align: 'center', label: 'Fecha Apertura', field: 'fechaA', sortable: true },
        { name: 'fechaC', align: 'center', label: 'Fecha Cierre', field: 'fechaC', sortable: true },
        { name: 'fechaE', align: 'center', label: 'Fecha Examen', field: 'fechaE', sortable: true },
        { name: 'tasa', align: 'center', label: 'Tasa', field: 'tasa', sortable: true },
        { name: 'horaE', align: 'center', label: 'Hora Examen', field: 'horaE', sortable: true },
        { name: 'ubicacion', align: 'center', label: 'Ubicacion', field: 'ubicacion', sortable: true }
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
    }
  }
}
</script>

<style>

</style>
