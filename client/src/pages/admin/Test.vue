<template>
  <div>
    <div class="text-h3 col-10 row justify-center q-my-sm text-primary">Nomenclatura 1</div>
    <q-card class="row justify-start bg-blue-2">
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
    <div class="row justify-center">
      <div class="col col-xs-12 col-sm-8 col-md-7 col-lg-5 col-xl-4 q-mx-md q-my-sm no-wrap">
        <div class="column dimension no-wrap">
          <q-card class="q-px-xl q-pt-md q-pb-lg q-ma-lg" v-for="(qt, index) in questions" :key="index">
            <q-card class="bg-blue-2 q-pa-sm q-mb-md">
              <div class="text-h6 q-ml-xs q-mb-sm">{{index + 1}} - {{qt.title}}</div>
            </q-card>
            <div class="column q-pl-lg">
              <div class="text-subtitle1 q-mb-sm">A) {{qt.optionA}}</div>
              <div class="text-subtitle1 q-mb-sm">B) {{qt.optionB}}</div>
              <div class="text-subtitle1 q-mb-sm">C) {{qt.optionC}}</div>
              <div class="text-subtitle1 q-mb-sm">D) {{qt.optionD}}</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Quest from '../../components/Quest.vue'
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
      if (quest) {
        this.questions.push(quest)
        this.newQ = false
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
