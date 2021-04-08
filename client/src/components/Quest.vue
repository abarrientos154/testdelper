<template>
  <div>
    <q-card class="column q-pa-md">
      <div class="text-h6">Crear Nueva Pregunta</div>
      <div class="q-my-sm">
        <q-input outlined v-model="quest.title" label="Introduzca la pregunta:" dense :error="$v.quest.title.$error" error-message="Este campo es requerido"  @blur="$v.quest.title.$touch()"/>
      </div>
      <div class="text-subtitle-1">Opciones:</div>
      <div class="row q-mb-sm">
        <q-input class="q-mr-md" outlined v-model="quest.optionA" label="Opción A:" dense :error="$v.quest.optionA.$error" error-message="Este campo es requerido"  @blur="$v.quest.optionA.$touch()"/>
        <q-input outlined v-model="quest.optionB" label="Opción B:" dense :error="$v.quest.optionB.$error" error-message="Este campo es requerido"  @blur="$v.quest.optionB.$touch()"/>
      </div>
      <div class="row q-mb-sm">
        <q-input class="q-mr-md" outlined v-model="quest.optionC" label="Opción C:" dense :error="$v.quest.optionC.$error" error-message="Este campo es requerido"  @blur="$v.quest.optionC.$touch()"/>
        <q-input outlined v-model="quest.optionD" label="Opción D:" dense :error="$v.quest.optionD.$error" error-message="Este campo es requerido"  @blur="$v.quest.optionD.$touch()"/>
      </div>
      <q-btn icon="add_circle" color="primary" @click="save()" label="Guardar"/>
    </q-card>
  </div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'Quest',
  data () {
    return {
      quest: {}
    }
  },
  validations: {
    quest: {
      title: { required, minLength: minLength(12), maxLength: maxLength(70) },
      optionA: { required, minLength: minLength(3), maxLength: maxLength(30) },
      optionB: { required, minLength: minLength(3), maxLength: maxLength(30) },
      optionC: { required, minLength: minLength(3), maxLength: maxLength(30) },
      optionD: { required, minLength: minLength(3), maxLength: maxLength(30) }
    }
  },
  methods: {
    save () {
      this.$v.$touch()
      if (!this.$v.quest.$error) {
        this.$emit('question', this.quest)
      }
    }
  }
}
</script>
