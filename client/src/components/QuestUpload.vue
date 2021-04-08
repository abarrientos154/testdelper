<template>
  <div>
    <q-card class="column q-pa-md">
      <div class="text-h6">Cargar desde una hoja de cálculo </div>
      <div class="q-my-sm">
        <q-file
          outlined
          v-model="file"
          label="Introduzca un archivo"
          filled
          hint="(.xls, .xlsx, .xltx, .ods, .ots, .csv)"
          accept=".xls, .xlsx, .xltx, .ods, .ots, .csv/*"
          dense
          :error="$v.file.$error"
          error-message="Este campo es requerido"
          @blur="$v.file.$touch()"
          max-files="1"/>
      </div>
      <q-btn icon="file_upload" color="primary" @click="upload()" label="Cargar"/>
    </q-card>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'QuestUpload',
  data () {
    return {
      file: null
    }
  },
  validations: {
    file: { required }
  },
  methods: {
    upload () {
      this.$v.$touch()
      if (!this.$v.file.$error) {
        this.$emit('file', this.file)
      }
    }
  }
}
</script>
