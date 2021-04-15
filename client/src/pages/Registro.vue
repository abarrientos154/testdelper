<template>
  <div class="absolute-center column items-center">
    <img src="logocolomer.png" class="q-mt-lg">
    <div class="text-primary text-h4 q-mb-sm">2007 - 2021</div>
    <div class="text-primary text-h6 q-mb-lg text-weight-bolder">Registro</div>
    <q-input rounded dense outlined class="q-mb-sm" type="text" v-model="form.name" label="Nombre" style="width: 300px" error-message="Ingrese un nombre válido" :error="$v.form.name.$error" @blur="$v.form.name.$touch()">
      <template v-slot:prepend>
        <q-icon name="person" color="primary"/>
      </template>
    </q-input>
    <q-input rounded dense outlined class="q-mb-sm" type="email" v-model="form.email" label="Email" style="width: 300px" :error="$v.form.email.$error" error-message="Ingrese un email válido"  @blur="$v.form.email.$touch()">
      <template v-slot:prepend>
        <q-icon name="email" color="primary"/>
      </template>
    </q-input>
    <q-input rounded dense outlined class="q-mb-sm" :type="isPwd ? 'text' : 'password'" v-model="password" label="Contraseña" style="width: 300px" error-message="Ingrese una contraseña válida, mínimo 6 caracteres" :error="$v.password.$error" @blur="$v.password.$touch()">
      <template v-slot:prepend>
        <q-icon name="https" color="primary"/>
      </template>
    </q-input>
    <q-input rounded dense outlined class="q-mb-sm" :type="isPwd ? 'text' : 'password'" v-model="repeatPassword" label="Confirmación de contraseña" style="width: 300px" error-message="Las contraseñas deben ser iguales" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
      <template v-slot:prepend>
        <q-icon name="https" color="primary"/>
      </template>
    </q-input>
    <div class="column justify-center full-width">
      <q-checkbox v-model="isPwd" size="xs" label="Mostrar contraseña." />
      <q-checkbox v-model="terminos" size="xs" label="Acepta Terminos y condiciones de uso?" />
      <div class="text-negative text-h7" v-if="!terminos && aparecer"> Debe Aceptar los terminos </div>
    </div>
    <div class="column items-center justify-center q-my-md">
      <q-btn class="q-mb-sm" rounded color="primary" text-color="white" label="Registrar" :loading="loading" @click="registrarse()" no-caps>
        <template v-slot:loading>
          <q-spinner-hourglass class="on-center" />
          Registrando...
        </template>
      </q-btn>
      <div class="text-primary q-ml-sm text-bold text-h9" @click="$router.push('/login')">Yatengo cuenta!</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, maxLength, email, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      isPwd: false,
      loading: false,
      terminos: false,
      aparecer: false,
      repeatPassword: '',
      password: '',
      rol: 2,
      form: {}
    }
  },
  validations: {
    form: {
      name: { required, maxLength: maxLength(20), minLength: minLength(2) },
      email: { required, email },
      roles: { required }
    },
    repeatPassword: { sameAsPassword: sameAs('password') },
    password: { required, maxLength: maxLength(256), minLength: minLength(6) }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    async registrarse () {
      this.$v.$touch()
      this.form.roles = this.rol
      console.log(this.$v.form.$error, this.$v.password.$error, this.$v.repeatPassword.$error, this.terminos)
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error && this.terminos) {
        this.form.password = this.password
        console.log(this.form, 'form')
        await this.$api.post('register', this.form).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Ya formas parte de Colomer, Bienvenido',
              color: 'positive'
            })
            this.loguear()
          }
        })
      } else {
        this.$q.notify({
          message: 'Debe ingresar todos los datos correspondientes',
          color: 'negative'
        })
        this.aparecer = true
      }
    },
    loguear () {
      this.$api.post('login', this.form).then(res => {
        if (res) {
          const usuario = res.SESSION_INFO.roles.find(value => value === 2)
          if (usuario) {
            this.login(res)
            this.$router.push('/inicio')
          }
        } else {
          console.log('error de ususario')
          // this.loading = false
        }
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style>
</style>
