<template>
  <div class="column q-pa-md">
    <div class="text-h4 text-center q-mb-sm">Crear usuario</div>
    <div class="column items-center">
      <div class="text-h6">Informacion de idetificacion</div>
      <div class="text-subtitle2 text-caption text-grey">Informacion de idetificacion</div>
    </div>

    <div class="column q-mt-sm items-center">
      <div class="column items-center">
        <q-avatar size="150px">
          <div class="absolute-center" style="z-index:1">
            <q-file borderless v-model="perfil" class="button-camera" @input="createObjUrl()" @blur="$v.perfil.$touch()" >
              <q-icon name="camera_alt" class="absolute-center" size="30px" color="primary" />
            </q-file>
          </div>
          <q-img :src="imgPerfil ? imgPerfil : 'noimg.png'" />
        </q-avatar>
        <div class="q-mt-sm" :class="$v.perfil.$error ? 'text-red' : 'text-grey-9'" >Sube tu foto de perfil</div>
        <div class="text-grey-9 text-caption">400 x 400</div>
      </div>
    </div>

    <div class="column items-center q-mt-lg">
      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Nombre completo</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.full_name" placeholder="Nombre y dos apellidos"
            error-message="Ingrese un nombre completo válido" :error="$v.form.full_name.$error" @blur="$v.form.full_name.$touch()" />
        </div>
      </div>
      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Numero de verificacion</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="text" v-model="form.num_verification" placeholder="J57374G475"
            error-message="Ingrese un numero de verificacion valido" :error="$v.form.num_verification.$error" @blur="$v.form.num_verification.$touch()"
          />
        </div>
      </div>

      <div class="full-width q-pa-sm" style="margin-top:0px !important;padding-top: 0px !important;max-width:350px;min-width:350px">
        <div class="text-subtitle2"> Documento PDF </div>
        <div class="text-caption" :class="$v.document.$error ? 'text-red' : 'text-grey-9'"> Sube tu documento de identificacion por ambos lados </div>
        <q-scroll-area style="height: 60px; width: 100%;" class="q-mt-sm">
          <div class="row no-wrap">
            <div class="style-document row items-center" v-for="(n, index) in document" :key="index">
              <q-icon name="close" style="cursor: pointer" clickable v-ripple @click="deleteDoc(index)" />
              <div class="q-ml-xs"> {{n.name}} </div>
            </div>
            <q-btn color="black" label="Subir archivo" no-caps push :disable="document.length > 1">
              <q-file multiple append borderless v-model="document" class="invisible-button" @input="createDocument()" @blur="$v.document.$touch()" max-files="2" :disable="document.length > 1">
              </q-file>
            </q-btn>
          </div>
        </q-scroll-area>
      </div>

      <div class="full-width q-pa-sm column" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="text-h6">Informacion demografica</div>
          <div class="text-caption">Ingresa la informacion oficial de contacto</div>
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Comunidad autonoma</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.comunidadA" placeholder="Andaluza"
            error-message="Ingrese una comunidad válida" :error="$v.form.comunidadA.$error" @blur="$v.form.comunidadA.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Ciudad</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.ciudad" placeholder="Andaluza"
            error-message="Ingrese una ciudad válida" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Direccion</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.direccion" placeholder="Mi direccion #12345"
            error-message="Ingrese una direccion válida" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Codigo postal</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.codpostal" placeholder="132000"
            error-message="Ingrese un codigo postal válido" :error="$v.form.codpostal.$error" @blur="$v.form.codpostal.$touch()" />
        </div>
      </div>

      <div class="full-width q-pa-sm column" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="text-h6">Informacion de contacto</div>
          <div class="text-caption">Ingresa la informacion oficial de contacto</div>
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Correo electronico</div>
          </div>
          <q-input dense outlined class="q-mb-sm" type="email" v-model="form.email" placeholder="example@example.com"
            error-message="Ingrese un correo válido" :error="$v.form.email.$error" @blur="$v.form.email.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Telefono o celular</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.telefono" placeholder="4567894531"
            error-message="Ingrese un telefono válido" :error="$v.form.telefono.$error" @blur="$v.form.telefono.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Ingrese su contraseña</div>
          </div>
          <q-input dense outlined class="q-mb-sm" :type="isPwd ? 'text' : 'password'" v-model="password" label="Contraseña" error-message="Ingrese una contraseña válida, mínimo 6 caracteres" :error="$v.password.$error" @blur="$v.password.$touch()">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="primary"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Repita su contraseña</div>
          </div>
          <q-input dense outlined class="q-mb-sm" :type="isPwd ? 'text' : 'password'" v-model="repeatPassword" label="Repita contraseña" error-message="Las contraseñas deben ser iguales" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="primary"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="full-width q-pa-sm column" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="text-h6">Cursos</div>
          <div class="text-caption">Ingresa el curso que realizara</div>
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Tipo de licencia</div>
          </div>
          <q-select dense outlined class="q-mb-sm" v-model="form.tLicencia" label="Capitan" :options="tlicenciaData" emit-value
            map-options
            error-message="Ingrese un tipo de licencia válido" :error="$v.form.tLicencia.$error" @blur="$v.form.tLicencia.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">¿Donde realizara el examen?</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model="form.ciudadExamen" placeholder="Cadiz"
            error-message="Ingrese una ciudad de examen válido" :error="$v.form.ciudadExamen.$error" @blur="$v.form.ciudadExamen.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Examenes disponibles</div>
          </div>
          <q-select dense outlined class="q-mb-sm" v-model="form.examenD" label="Examen 01" :options="examenDData" emit-value
            map-options
            error-message="Ingrese un examen disponible válido" :error="$v.form.examenD.$error" @blur="$v.form.examenD.$touch()" />
        </div>
      </div>

      <div class="full-width q-pa-sm column" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="text-h6">Costos asociados</div>
          <div class="text-caption">Ingresa los costos asociados</div>
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Gestion</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model.number="form.gestion" placeholder="€30" type="number"
            error-message="Ingrese una gestion válida" :error="$v.form.gestion.$error" @blur="$v.form.gestion.$touch()" />
        </div>
      </div>

      <div class="q-px-sm" style="max-width:350px;min-width:350px">
        <div class="column">
          <div class="column">
            <div class="no-mp">Tasa</div>
          </div>
          <q-input dense outlined class="q-mb-sm" v-model.number="form.tasa" placeholder="€50" type="number"
            error-message="Ingrese una tasa válida" :error="$v.form.tasa.$error" @blur="$v.form.tasa.$touch()" />
        </div>
      </div>
    </div>

    <div class="text-subtitle1 row justify-center"><div class="text-bold"> Costo total del PVP </div> <div class="q-ml-sm text-black"> €{{total}} </div></div>
    <div class="full-width q-pa-sm row justify-center q-mt-sm">
      <q-btn @click="save()" label="Crear usuario" no-caps style="height:60px;width:30%;min-width:170px" color="black" />
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      edit: false,
      form: {},
      imgPerfil: null,
      perfil: null,
      document: [],
      total: 120,
      password: '',
      repeatPassword: '',
      isPwd: false,
      tlicenciaData: [
        { label: 'LN - Licencia de Navegación', value: 'LN' }, { label: 'PNB - Patrón de Navegación Básico, del tema 1 al 6', value: 'PNB' },
        { label: 'PER - Patrón de Embarcaciones de Recreo del tema 1 al 11', value: 'PER' }, { label: 'PER Reducido, del tema 7 al 11', value: 'PERR' },
        { label: 'PY - Patrón de Yate', value: 'PY' }, { label: 'CY - Capitán de Yate', value: 'CY' }
      ],
      examenDData: [
        { label: 'Listado de exámenes creado por usuario ADMIN ()', value: '1' }
      ]
    }
  },
  validations: {
    form: {
      full_name: { required, maxLength: maxLength(20), minLength: minLength(2) },
      num_verification: { required, maxLength: maxLength(20), minLength: minLength(2) },
      comunidadA: { required },
      ciudad: { required },
      direccion: { required },
      codpostal: { required },
      email: { required },
      telefono: { required },
      tLicencia: { required },
      ciudadExamen: { required },
      examenD: { required },
      gestion: { required },
      tasa: { required }
    },
    repeatPassword: { sameAsPassword: sameAs('password') },
    password: { required, maxLength: maxLength(256), minLength: minLength(6) },
    perfil: { required },
    document: { required, minLength: minLength(2) }
  },
  mounted () {
    if (this.$route.params.id) {
      this.edit = true
    }
  },
  methods: {
    async save () {
      this.$v.$touch()
      console.log(this.$v.form.$error, this.$v.password.$error, this.$v.repeatPassword.$error)
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error && !this.$v.document.$error && !this.$v.perfil.$error) {
        this.form.password = this.password
        var formData = new FormData()
        for (const j in this.document) {
          formData.append('file_' + j, this.document[j])
        }
        this.form.numberDoc = this.document.length
        formData.append('perfil', this.perfil)
        formData.append('dat', JSON.stringify(this.form))
        this.$q.loading.show()
        await this.$api.post('register_user', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          this.$q.loading.hide()
          if (res) {
            this.$q.notify({
              message: 'Se registro el correctamente el usuario',
              color: 'positive'
            })
            this.$router.go(-1)
          }
        })
      } else {
        this.$q.notify({
          message: 'Debe ingresar todos los datos correspondientes',
          color: 'negative'
        })
      }
    },
    deleteDoc (ind) {
      this.document.splice(ind, 1)
    },
    createDocument () {
      console.log(this.document, 'document')
    },
    createObjUrl () {
      if (this.perfil) { this.imgPerfil = URL.createObjectURL(this.perfil) }
    }
  }
}
</script>

<style scoped lang="scss">
.button-camera {
  text-decoration: none;
  font-weight: 0;
  font-size: 0px;
  padding: 5px;
  color: #0016b0;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #7e7e7e;
  height:60px;
  width:60px;
  cursor:pointer;
}

.no-mp {
  padding: 0px !important;
  margin: 0px !important;
}

.invisible-button {
  font-size: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
}

.style-document {
  width: auto;
  height: 40px;
  background: $grey-3;
  border-radius: 7px;
  padding: 10px;
  color: $grey-6;
  margin-right: 5px;
  min-width: 120px;
}
</style>
