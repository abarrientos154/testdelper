<template>
  <q-page class="q-pa-md">
    <div class="text-h6 text-center" style="font-size:25px"> Crear Examen </div>
    <div class="text-subtitle1 text-center"> Informacion de general </div>
    <div class="text-caption text-grey text-center"> Ingresa la informacion general del examen </div>

    <div class="column q-mt-lg items-center">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Titulo</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.name" placeholder="Seleccionar comunidad"
            error-message="Ingrese un Titulo válido" :error="$v.form.name.$error" @blur="$v.form.name.$touch()" />
        </div>
      </div>

      <div class="full-width q-pa-sm column form-style">
        <div class="column">
          <div class="text-h6">Informacion demografica</div>
          <div class="text-caption">Ingresa la informacion donde se hara el examen</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Comunidad autonoma</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.comunidadA" placeholder="Seleccionar comunidad"
            error-message="Ingrese una comunidad autonoma válida" :error="$v.form.comunidadA.$error" @blur="$v.form.comunidadA.$touch()" />
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Ciudad donde se realizara</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.ciudad" placeholder="Cadiz"
            error-message="Ingrese una ciudad válida" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()" />
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Ubicacion</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.ubicacion" placeholder="Cadiz"
            error-message="Ingrese una ubicacion válida" :error="$v.form.ubicacion.$error" @blur="$v.form.ubicacion.$touch()" />
        </div>
      </div>

      <div class="full-width q-pa-sm column form-style">
        <div class="column">
          <div class="text-h6">Fechas</div>
          <div class="text-caption">Ingresa las fechas del examen</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Hora del examen</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.horaE" placeholder="10:00 hrs."
            error-message="Ingrese una hora del examen válida" :error="$v.form.horaE.$error" @blur="$v.form.horaE.$touch()" />
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de apertura</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.fechaA" placeholder="10/08/2021"
            error-message="Ingrese una fecha de apertura válida" :error="$v.form.fechaA.$error" @blur="$v.form.fechaA.$touch()" />
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de cierre</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.fechaC" placeholder="20/09/2021"
            error-message="Ingrese una Fecha de cierre válida" :error="$v.form.fechaC.$error" @blur="$v.form.fechaC.$touch()" />
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de examen</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.fechaE" placeholder="20/09/2021"
            error-message="Ingrese una Fecha de examen válida" :error="$v.form.fechaE.$error" @blur="$v.form.fechaE.$touch()" />
        </div>
      </div>

      <div class="full-width q-pa-sm column form-style">
        <div class="column">
          <div class="text-h6">Costos del examen</div>
          <div class="text-caption">Ingresa las fechas del examen</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Tasa</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.tasa" placeholder="€23"
            error-message="Ingrese una tasa válida" :error="$v.form.tasa.$error" @blur="$v.form.tasa.$touch()" />
        </div>
      </div>
    </div>
    <div class="full-width q-pa-sm row justify-center q-mt-sm">
      <q-btn @click="save()" :label="$route.params.id ? 'Actualizar Examen' : 'Crear examen'" no-caps style="height:60px;width:50%;min-width:170px" color="black" />
    </div>
  </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {}
    }
  },
  validations: {
    form: {
      name: { required },
      comunidadA: { required },
      ciudad: { required },
      ubicacion: { required },
      horaE: { required },
      fechaA: { required },
      fechaC: { required },
      fechaE: { required },
      tasa: { required }
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.getExamen()
    }
  },
  methods: {
    async getExamen () {
      const res = await this.$api.get('ExamById/' + this.$route.params.id)
      if (res) {
        this.form = res
      }
    },
    async save () {
      this.$v.$touch()
      if (!this.$v.form.$error) {
        if (this.$route.params.id) {
          await this.$api.put('examen/' + this.$route.params.id, this.form).then(res => {
            if (res) {
              this.$q.notify({
                message: 'Guardado exitosamente',
                color: 'positive'
              })
              this.$router.go(-1)
            }
          })
        } else {
          await this.$api.post('examen', this.form).then(res => {
            if (res) {
              this.$q.notify({
                message: 'Guardado exitosamente',
                color: 'positive'
              })
              this.$router.go(-1)
            }
          })
        }
      }
    }
  }
}
</script>

<style>

</style>
