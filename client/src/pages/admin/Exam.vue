<template>
  <div>
    <div class="text-h3 col-10 row justify-center q-my-sm text-primary text-weight-bolder">{{exam.name}}</div>
    <q-card class="row justify-start bg-blue-2">
      <div class="column q-ma-md">
        <div class="text-h6 text-primary">Nueva Pregunta</div>
        <div class="row col col-xs-3">
          <q-btn @click="newQ = true" class="dimensionE q-mb-xs text-subtitle1" padding="10px 5px" color="primary" icon="add" no-caps>Nueva</q-btn>
          <q-btn @click="newF = true" padding="10px 8px" class="dimensionE q-mb-xs text-subtitle1 q-ml-sm" color="primary" icon="upload_file" no-caps>Desde Excel</q-btn>
          <q-btn @click="$router.push('/questions')" padding="10px 8px" class="dimensionE q-mb-xs text-subtitle1 q-ml-sm" color="primary" icon="quiz" no-caps>Preguntas Existentes</q-btn>
        </div>
      </div>
    </q-card>
    <div>
      <q-dialog v-model="newQ" @hide="reload">
        <quest @question="newQuest" :id="questId" :exam_id="exam._id"/>
      </q-dialog>
    </div>
    <div>
      <q-dialog v-model="newF">
        <quest-upload @file="getFile" :exam_id="exam._id"/>
      </q-dialog>
    </div>
    <div class="row justify-center">
      <div class="col col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-6 q-mx-md q-my-sm">
        <div class="column dimension no-wrap" v-if="questions.length > 0">
          <q-card class="dimensionC q-px-xl q-pt-md q-pb-lg q-ma-lg" v-for="(qt, index) in questions" :key="index">
            <q-card class="row justify-between bg-blue-2 q-pa-sm q-mb-md">
              <div class="text-h6 q-ml-xs q-mb-sm">{{index + 1}} - {{qt.title}}</div>
              <div>
                <q-btn round flat size="md" text-color="primary" icon="edit" @click="getIdForEdit(qt._id)"  />
                <q-btn round flat size="md" text-color="primary" icon="delete" @click="destroyQuest(qt._id)" />
              </div>
            </q-card>
            <div class="column q-pl-lg">
              <q-item class="text-subtitle1 q-mb-sm" clickable>A) {{qt.optionA}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>B) {{qt.optionB}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>C) {{qt.optionC}}</q-item>
              <q-item class="text-subtitle1 q-mb-sm" clickable>D) {{qt.optionD}}</q-item>
            </div>
          </q-card>
        </div>
        <q-card v-else class="shadow-2 q-ma-md q-pa-md">
          <div class="text-center text-subtitle1">Actualmente sin Preguntas...</div>
        </q-card>
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
      exam: {},
      questions: [],
      questId: '',
      file: {},
      newQ: false,
      newF: false
    }
  },
  mounted () {
    this.getExamById()
    this.getQuestionsByExam()
  },
  methods: {
    getExamById () {
      this.$api.get('ExamById/' + this.$route.params.id).then(res => {
        if (res) {
          this.exam = res
          console.log('this.exam >> ', res)
        }
      })
    },
    getQuestionsByExam () {
      this.$api.get('getQuestionsbyExam/' + this.$route.params.id).then(res => {
        if (res) {
          console.log('res :>> ', res)
          this.questions = res
        }
      })
    },
    newQuest (quest) {
      if (quest === false) {
        this.newQ = false
        this.getQuestionsByExam()
      }
    },
    async getFile (f) {
      if (f === false) {
        this.newF = false
        this.getQuestionsByExam()
      }
    },
    getIdForEdit (id) {
      this.questId = id
      this.newQ = true
    },
    destroyQuest (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar esta Pregunta?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('destroyQuest/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Pregunta Eliminada Correctamente'
            })
            this.getQuestionsByExam()
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    reload () {
      this.questId = ''
    }
  }
}
</script>

<style scoped lang="scss">
.dimension {
  min-width: 280px;
}
.dimensionE {
  min-width: 80px;
}
.dimensionC {
  min-width: 270px;
}
</style>
