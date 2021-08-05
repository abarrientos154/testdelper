<template>
  <q-page class="q-pa-md">
    <div class="text-h6">Pagos</div>
    <q-table :data="data" :columns="columns" row-key="_id" separator="horizontal" flat bordered no-data-label="Sin datos">
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <q-btn color="positive" round icon="task_alt" size="sm" class="q-ml-sm" flat dense @click="confirmarAprobacion(props.row._id)" >
            <q-tooltip>
              Aprobar Pago
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
      status: this.$route.params.status,
      columns: [
        { name: 'Action', label: 'Aprobar', field: 'Action', sortable: false, align: 'center' },
        { name: 'name', align: 'left', label: 'Titulo', field: 'name', sortable: true },
        { name: 'lastName', align: 'left', label: 'CCA', field: 'lastName', sortable: true },
        { name: 'country', align: 'center', label: 'Localidad', field: 'country', sortable: true },
        { name: 'address', align: 'center', label: 'Fecha Apertura', field: 'address', sortable: true },
        { name: 'phone', align: 'center', label: 'Fecha Cierre', field: 'phone', sortable: true },
        { name: 'cp', align: 'center', label: 'Fecha Examen', field: 'cp', sortable: true },
        { name: 'nieNif', align: 'center', label: 'nieNif', field: 'nieNif', sortable: true },
        { name: 'total', align: 'center', label: 'Hora Examen', field: 'total', sortable: true }
      ]
    }
  },
  mounted () {
    this.getData()
    this.verifyColumns()
  },
  watch: {
    $route (to, from) {
      console.log('cambio ruta')
      this.verifyColumns()
      this.getData()
    }
  },
  methods: {
    verifyColumns () {
      if (this.$route.params.status === '1') {
        this.columns.splice(0, 0, { name: 'Action', label: 'Aprobar', field: 'Action', sortable: false, align: 'center' })
      } else {
        this.columns.splice(0, 1)
      }
    },
    async confirmarAprobacion (id) {
      this.$q.dialog({
        title: '¡Confirmación!',
        message: '¿Desea aprobar el pago?',
        cancel: true,
        persistent: true,
        ok: 'Aprobar'
      }).onOk(() => {
        this.aprobarPago(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    async aprobarPago (id) {
      this.$q.loading.show()
      const res = await this.$api.put('payment/' + id)
      this.$q.loading.hide()
      if (res) {
        this.getData()
      }
    },
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get('payment?status=' + this.$route.params.status)
      this.$q.loading.hide()
      this.data = res
    }
  }
}
</script>

<style>

</style>
