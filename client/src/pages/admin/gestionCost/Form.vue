<template>
  <div class="q-pa-xl">
    <div class="text-h6 asd" style="font-size:30px;">Coste de gestion</div>
    <div class="text-subtitle1 text-grey-6">ingrese el coste general de la gestion</div>
    <div class="column full-width">
      <div class="full-width">
        <q-input outlined class="q-mb-sm" type="number" v-model.number="form.gestion_cost" label="costo"
          :error="$v.form.gestion_cost.$error" @blur="$v.form.gestion_cost.$touch()"
        />
      </div>
      <div class="row justify-center">
        <q-btn label="Actualizar" color="primary" push style="width:70%;height:50px" @click="save()" v-close-popup />
      </div>
    </div>

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        gestion_cost: 0
      },
      route: 'gestion_cost'
    }
  },
  validations: {
    form: {
      gestion_cost: { required }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get(this.route)
      this.$q.loading.hide()
      this.form.gestion_cost = res.value
    },
    async save () {
      this.$v.$touch()
      if (!this.$v.form.$error) {
        this.$q.loading.show()
        await this.$api.put(this.route, this.form).then(res => {
          this.$q.loading.hide()
          if (res) {
            this.$q.notify({
              message: 'Gestion de coste actualizada',
              color: 'positive'
            })
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
