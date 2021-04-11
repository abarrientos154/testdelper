<template>
  <div>
    <div class="text-h3 col-10 row justify-center q-my-sm text-primary text-weight-bolder">Examen 1</div>
    <q-card class="row justify-start bg-blue-2">
      <div class="column q-ma-md">
        <div class="text-h6 text-primary">Nueva Pregunta</div>
        <div class="row">
          <q-btn @click="newQ = true" class="text-subtitle1" padding="10px 5px" color="primary" icon="add" no-caps>Nueva</q-btn>
          <q-btn @click="newF = true" padding="10px 8px" class="text-subtitle1 q-ml-sm" color="primary" icon="upload_file" no-caps>Desde Excel</q-btn>
          <q-btn @click="$router.push('/questions')" padding="10px 8px" class="text-subtitle1 q-ml-sm" color="primary" icon="quiz" no-caps>Preguntas Existentes</q-btn>
        </div>
      </div>
    </q-card>
    <div>
      <q-dialog v-model="newQ">
        <quest @question="toList"/>
      </q-dialog>
    </div>
    <div>
      <q-dialog v-model="newF">
        <quest-upload @file="getFile"/>
      </q-dialog>
    </div>
    <div class="row justify-center">
      <div class="col col-xs-12 col-sm-8 col-md-7 col-lg-5 col-xl-4 q-mx-md q-my-sm no-wrap">
        <div class="column dimension no-wrap">
          <q-card class="q-px-xl q-pt-md q-pb-lg q-ma-lg" v-for="(qt, index) in questions" :key="index">
            <q-card class="bg-blue-2 q-pa-sm q-mb-md">
              <div class="text-h6 q-ml-xs q-mb-sm">{{index + 1}} - {{qt.title}}</div>
            </q-card>
            <div class="column q-pl-lg">
              <q-item class="text-subtitle1 q-mb-sm" clickable>A) {{qt.optionA}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>B) {{qt.optionB}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>C) {{qt.optionC}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>D) {{qt.optionD}}</q-item>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Quest from '../../components/Quest.vue'
import QuestUpload from '../../components/QuestUpload.vue'
export default {
  components: { Quest, QuestUpload },
  data () {
    return {
      questions: [],
      file: {},
      newQ: false,
      newF: false
    }
  },
  mounted () {
    console.log('prueba :>> ')
  },
  methods: {
    toList (quest) {
      if (quest) {
        this.questions.push(quest)
        this.newQ = false
      }
    },
    getFile (file) {
      if (file) {
        this.file = file
        console.log('this.file :>> ', this.file)
        this.newF = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dimension {
  min-width: 400px;
}
</style>
