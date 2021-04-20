<template>
  <div>
    <q-card class="column q-pa-md">
      <div v-if="edit" class="text-h6">Editar Pregunta</div>
      <div v-else class="text-h6">Crear Nueva Pregunta</div>
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
      <q-btn icon="add_circle" color="primary" @click="edit ?update() : save()" :label="edit ? 'Actualizar' : 'Guardar'"/>
    </q-card>
  </div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'Quest',
  props: ['id', 'course_id', 'test_id', 'exam_id'],
  data () {
    return {
      quest: {},
      edit: false
    }
  },
  validations: {
    quest: {
      title: { required, minLength: minLength(12), maxLength: maxLength(150) },
      optionA: { required, minLength: minLength(1), maxLength: maxLength(100) },
      optionB: { required, minLength: minLength(1), maxLength: maxLength(100) },
      optionC: { required, minLength: minLength(1), maxLength: maxLength(100) },
      optionD: { required, minLength: minLength(1), maxLength: maxLength(100) }
    }
  },
  mounted () {
    this.getQuestById()
  },
  methods: {
    getQuestById () {
      if (this.id !== '') {
        console.log('this.id :>> ', this.id)
        this.edit = true
        this.$api.get('questById/' + this.id).then(res => {
          if (res) {
            console.log('res :>> ', res)
            this.quest = res
          }
        })
      }
    },
    async save () {
      this.$v.$touch()
      if (!this.$v.quest.$error) {
        this.quest.asignatura_id = this.course_id
        this.quest.tema_id = this.test_id
        this.quest.examen_id = this.exam_id
        await this.$api.post('newQuest', this.quest).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Pregunta Creada Correctamente',
              color: 'positive'
            })
            this.$emit('question', false)
          }
        })
      }
    },
    async update () {
      this.$v.$touch()
      if (!this.$v.quest.$error) {
        await this.$api.put('updateQuest/' + this.id, this.quest).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Pregunta Editada Correctamente',
              color: 'positive'
            })
            this.$emit('question', false)
          }
        })
      }
    }
  }
}
</script>
