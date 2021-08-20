<template>
  <q-page class="q-pa-md">
    <div class="text-h6">Lista de Examenes</div>
    <div class="column q-pa-sm borders-og">
      <div>Filtrar Titulos</div>
      <q-select class="q-pa-sm q-px-lg" :options="optionsFilter" emit-value map-options v-model="filterTitle" outlined dense />
    </div>
    <q-table :data="filterData" :columns="columns" row-key="_id" separator="horizontal" flat bordered no-data-label="Sin datos">
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
      optionsFilter: [
        { label: 'Todos', value: 'all' },
        { label: 'LN - Licencia de Navegación', value: 'LN' }, { label: 'PNB - Patrón de Navegación Básico, del tema 1 al 6', value: 'PNB' },
        { label: 'PER - Patrón de Embarcaciones de Recreo del tema 1 al 11', value: 'PER' }, { label: 'PERR Reducido, del tema 7 al 11', value: 'PERR' },
        { label: 'PY - Patrón de Yate', value: 'PY' }, { label: 'CY - Capitán de Yate', value: 'CY' }
      ],
      filterTitle: 'all',
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
  computed: {
    filterData () {
      if (this.filterTitle === 'all') {
        return this.data
      } else {
        return this.data.filter(v => v.tLicencia === this.filterTitle)
      }
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

<style lang="scss">
.borders-og {
  border-left: 1px solid $grey-4;
  border-right: 1px solid $grey-4;
  border-top: 1px solid $grey-4;
  border-radius: 5px;
}
</style>
