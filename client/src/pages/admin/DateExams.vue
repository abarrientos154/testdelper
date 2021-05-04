<template>
  <div>
    <div class="text-h3 col-10 row justify-center q-my-sm text-primary text-weight-bolder">Fecha Examen</div>
    <q-card class="row justify-start bg-blue-2">
      <div class="column q-ma-md">
        <div class="text-h6 text-primary">Programar Nueva Fecha</div>
        <div class="row">
          <q-btn @click="newDE = true" class="text-subtitle1" padding="10px 5px" color="primary" icon="add" no-caps>Nueva</q-btn>
        </div>
      </div>
    </q-card>
    <q-dialog v-model="newDE">
      <new-date-exam/>
    </q-dialog>
    <div class="row justify-center">
      <listable/>
    </div>
  </div>
</template>
<script>
import Listable from '../../components/Listable.vue'
import NewDateExam from '../../components/NewDateExam.vue'
export default {
  components: { Listable, NewDateExam },
  data () {
    return {
      test: {},
      dateExams: null,
      questId: '',
      indexQ: null,
      newDE: false
    }
  },
  mounted () {
  },
  methods: {
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
.dimensionC {
  min-width: 270px;
}
</style>
