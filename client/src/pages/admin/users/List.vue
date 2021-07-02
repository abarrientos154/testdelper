<template>
  <q-page class="q-pa-md">
    <div class="text-h6 asd" style="font-size:30px;">Listado de Usuarios</div>
    <!--
    <div class="text-subtitle1">Informacion de general</div>
    <div class="text-caption text-grey">Ingresa la informacion general del examen</div>
    -->

    <div>
      <q-table class="q-mt-sm" :data="data" :columns="columns" row-key="name" separator="none" flat bordered no-data-label="Sin datos" >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div class="row justify-center full-width">
              <q-btn icon="delete" color="negative" dense size="sm" flat @click="confirmDelete(props.row._id)" />
              <q-btn icon="edit" color="primary" dense size="sm" flat @click="$router.push('/users/form/' + props.row._id)" />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="primary" label="Nuevo Usuario" push @click="$router.push('/users/form')" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      columns: [
        { name: 'full_name', align: 'center', label: 'Nombre completo', field: 'full_name', sortable: true },
        { name: 'telefono', align: 'center', label: 'Telefono', field: 'telefono', sortable: true },
        { name: 'num_verification', align: 'center', label: 'Num Verficacion', field: 'num_verification', sortable: true },
        { name: 'comunidadA', align: 'center', label: 'Comunidad Autonoma', field: 'comunidadA', sortable: true },
        { name: 'ciudad', align: 'center', label: 'Ciudad', field: 'ciudad', sortable: true },
        { name: 'direccion', align: 'center', label: 'Direccion', field: 'direccion', sortable: true },
        { name: 'codpostal', align: 'center', label: 'Codigo Postal', field: 'codpostal', sortable: true },
        { name: 'email', align: 'center', label: 'Correo', field: 'email', sortable: true },
        { name: 'tLicencia', align: 'center', label: 'Tipo de Licencia', field: 'tLicencia', sortable: true },
        { name: 'ciudadExamen', align: 'center', label: 'Ciudad Examen', field: 'ciudadExamen', sortable: true },
        { name: 'examenD', align: 'center', label: 'Examenes Disponibles', field: 'examenD', sortable: true },
        { name: 'gestion', align: 'center', label: 'Gestion', field: 'gestion', sortable: true },
        { name: 'tasa', align: 'center', label: 'Tasa', field: 'tasa', sortable: true },
        { name: 'numberDoc', align: 'center', label: 'Numero Documento', field: 'numberDoc', sortable: true },
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
      const res = await this.$api.get('users')
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
      const res = await this.$api.delete('users/' + id)
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
