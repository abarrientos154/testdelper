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
          <q-select dense outlined class="q-mb-sm" type="text" v-model="form.tLicencia" label="Seleccionar Titulo" :options="tlicenciaData" emit-value
            map-options
            error-message="Ingrese un Titulo válido" :error="$v.form.tLicencia.$error" @blur="$v.form.tLicencia.$touch()" />
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
          <q-select v-model="comunidadA" use-input input-debounce="0" placeholder="Seleccionar comunidad" :options="optionsCAF" @filter="filterCA" @input="filterCiudad()"
            error-message="Seleccione una comunidad autonoma válida" :error="$v.form.comunidadA.$error" @blur="$v.form.comunidadA.$touch()" outlined dense class="q-mb-sm"
            option-value="id" option-label="nombre" map-options emit-value
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Sin resultados
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Ciudad donde se realizara</div>
          </div>
          <q-select v-model="city" use-input input-debounce="0" placeholder="Seleccionar Ciudad" :options="optionsCityF" @filter="filterCity" @input="form.ciudad = city"
            error-message="Seleccione una ciudad válida" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()" outlined dense class="q-mb-sm"
            option-value="_id" option-label="nombre" map-options emit-value
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Sin resultados
                </q-item-section>
              </q-item>
            </template>
          </q-select>
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
          <q-input mask="time" :rules="['time']" dense outlined class="q-mb-sm" type="text" v-model="form.horaE" placeholder="10:00 hrs."
            error-message="Ingrese una hora del examen válida" :error="$v.form.horaE.$error" @blur="$v.form.horaE.$touch()"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="form.horaE">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de apertura</div>
          </div>
          <q-input v-model="form.fechaA" mask="date" :rules="['date']" dense outlined class="q-mb-sm" placeholder="10/08/2021"
            error-message="Ingrese una fecha de apertura válida" :error="$v.form.fechaA.$error" @blur="$v.form.fechaA.$touch()">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.fechaA">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de cierre</div>
          </div>
          <q-input v-model="form.fechaC" mask="date" :rules="['date']" dense outlined class="q-mb-sm" placeholder="10/08/2021"
            error-message="Ingrese una fecha de apertura válida" :error="$v.form.fechaC.$error" @blur="$v.form.fechaC.$touch()">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.fechaC">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-px-sm form-style">
        <div class="column">
          <div class="column">
            <div class="no-mp">Fecha de examen</div>
          </div>
          <q-input v-model="form.fechaE" mask="date" :rules="['date']" dense outlined class="q-mb-sm" placeholder="10/08/2021"
            error-message="Ingrese una fecha de apertura válida" :error="$v.form.fechaE.$error" @blur="$v.form.fechaE.$touch()">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.fechaE">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
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
      comunidadA: null,
      city: null,
      optionsCA: [],
      optionsCAF: [],
      optionsCity: [],
      optionsCityF: [],
      form: {},
      tlicenciaData: [
        { label: 'LN - Licencia de Navegación', value: 'LN' }, { label: 'PNB - Patrón de Navegación Básico, del tema 1 al 6', value: 'PNB' },
        { label: 'PER - Patrón de Embarcaciones de Recreo del tema 1 al 11', value: 'PER' }, { label: 'PER Reducido, del tema 7 al 11', value: 'PERR' },
        { label: 'PY - Patrón de Yate', value: 'PY' }, { label: 'CY - Capitán de Yate', value: 'CY' }
      ]
    }
  },
  validations: {
    form: {
      tLicencia: { required },
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
    this.getProvinces()
    if (this.$route.params.id) {
      this.getExamen()
    }
  },
  methods: {
    async filterCiudad () {
      this.form.comunidadA = this.comunidadA
      this.city = null
      this.form.ciudad = null
      this.$q.loading.show()
      const res = await this.$api.get('cities/' + this.comunidadA)
      this.optionsCity = res
      this.optionsCityF = res
      this.$q.loading.hide()
    },
    filterCity (val, update) {
      if (val === '') {
        update(() => {
          this.optionsCityF = this.optionsCity

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsCityF = this.optionsCity.filter(v => v.nombre.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterCA (val, update) {
      if (val === '') {
        update(() => {
          this.optionsCAF = this.optionsCA

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsCAF = this.optionsCA.filter(v => v.nombre.toLowerCase().indexOf(needle) > -1)
      })
    },
    async getProvinces () {
      this.$q.loading.show()
      const resPro = await this.$api.get('provinces')
      this.optionsCA = resPro
      this.optionsCAF = resPro
      this.$q.loading.hide()
    },
    async getExamen () {
      const res = await this.$api.get('ExamById/' + this.$route.params.id)
      if (res) {
        this.form = res
        this.comunidadA = res.comunidadA
        this.city = res.ciudad
        this.$q.loading.show()
        const resCity = await this.$api.get('cities/' + this.comunidadA)
        this.optionsCity = resCity
        this.optionsCityF = resCity
        this.$q.loading.hide()
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
