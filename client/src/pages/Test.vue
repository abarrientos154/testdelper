<template>
  <div>
    <div class="text-h3 col-10 row justify-center text-primary">Nomenclatura 1</div>
    <q-card class="row justify-start bg-blue-2 no-wrap">
      <div class="column q-ma-md">
        <div class="text-h6 text-primary">Nueva Pregunta</div>
        <div class="row">
          <q-btn @click="newQ = true" class="text-subtitle1" padding="10px 5px" color="primary" icon="add" no-caps>Nueva</q-btn>
          <q-btn padding="10px 8px" class="text-subtitle1 q-ml-sm" color="primary" icon="upload_file" no-caps>Desde Excel</q-btn>
        </div>
      </div>
    </q-card>
    <div>
      <q-dialog v-model="newQ">
        <quest @question="toList"/>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import Quest from '../components/Quest.vue'
export default {
  components: { Quest },
  data () {
    return {
      questions: [],
      newQ: false
    }
  },
  methods: {
    toList (quest) {
      this.questions.push(quest)
    }
  }
}
</script>
