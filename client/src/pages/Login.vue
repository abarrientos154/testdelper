<template>
  <div class="absolute-center column items-center">
    <img src="logocolomer.png">
    <div class="text-primary text-h4 q-mb-lg">2007 - 2021</div>
    <q-input rounded dense outlined class="q-mb-lg" type="email" v-model="form.email" label="User/Email" style="width: 300px">
      <template v-slot:prepend>
        <q-icon name="person" color="primary"/>
      </template>
    </q-input>
    <q-input rounded dense outlined class="q-mb-lg" :type="isPwd ? 'password' : 'text'" v-model="form.password" label="Contraseña" style="width: 300px">
      <template v-slot:prepend>
        <q-icon name="https" color="primary"/>
      </template>
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
      </template>
    </q-input>
    <div class="row">
      <div class="text-black text-h9">Has olvidado tu contraseña?</div>
      <div class="text-primary q-ml-sm text-bold text-h9">Recuperar.</div>
    </div>
    <div class="q-mt-md row justify-center">
      <q-btn rounded color="primary" text-color="white" label="Iniciar Sesión" :loading="loading" @click="loguear()" no-caps>
        <template v-slot:loading>
          <q-spinner-hourglass class="on-center" />
          Iniciando...
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      isPwd: true,
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
    }
  },
  methods: {
    loguear () {
      this.$router.push('/inicio_administrador')
    }
  }
}
</script>
