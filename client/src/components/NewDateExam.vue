<template>
  <div>
    <q-card class="column q-pa-md">
      <div v-if="edit" class="text-h6 q-mb-sm q-ml-sm">Editar Fecha Examen</div>
      <div v-else class="text-h6 q-mb-sm q-ml-sm">Crear Fecha Examen</div>
      <div class="row q-mb-sm q-ml-sm">
        <div class="column">
          <div class="text-subtitle-1">CCAA:</div>
          <q-select style="min-width: 220px" class="q-mr-md" outlined v-model="dateExam.ccaa" label="Escoga una Comunidad" dense :options="communities" :error="$v.dateExam.ccaa.$error" error-message="Este campo es requerido"  @blur="$v.dateExam.ccaa.$touch()" map-options emit-value option-value="_id" options-selected-class="text-primary" option-label="name" @input="getPlace(dateExam.ccaa)" clearable></q-select>
        </div>
        <div class="column">
          <div class="text-subtitle-1">Lugar:</div>
          <q-select style="min-width: 220px" class="q-mr-md" outlined v-model="dateExam.place" label="Escoja un Lugar" dense :options="places" :loading="loading" :error="$v.dateExam.place.$error" error-message="Este campo es requerido"  @blur="$v.dateExam.place.$touch()" map-options emit-value option-value="_id" options-selected-class="text-primary" option-label="name" clearable>
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Sin Resultados
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <div class="row q-mb-sm q-ml-sm">
        <div class="column">
          <div class="text-subtitle-1">Fecha:</div>
          <q-input style="min-width: 220px" type="date" class="q-mr-md" outlined v-model="dateExam.date" hint="Escoja una Fecha" hide-hint dense :error="$v.dateExam.date.$error" error-message="Este campo es requerido"  @blur="$v.dateExam.date.$touch()"/>
        </div>
        <div class="column">
          <div class="text-subtitle-1">Fecha de Finalización:</div>
          <q-input style="min-width: 220px" type="date" outlined v-model="dateExam.expireDate" hint="Escoja una Fecha" hide-hint dense :error="$v.dateExam.expireDate.$error" error-message="Este campo es requerido"  @blur="$v.dateExam.expireDate.$touch()"/>
        </div>
      </div>
      <div class="column q-mr-md q-ml-sm">
        <div class="text-subtitle-1">PVP€:</div>
        <q-input outlined v-model.number="dateExam.pvp" type="number" min="0" prefix="€" label="Escoja un Precio" dense :error="$v.dateExam.pvp.$error" error-message="Este campo es requerido"  @blur="$v.dateExam.pvp.$touch()" :rules="[val => val > 0]"/>
      </div>
      <q-btn class="q-ml-sm q-mr-md q-mt-sm" icon="add_circle" color="primary" @click="edit ?update() : save()" :label="edit ? 'Actualizar' : 'Guardar'"/>
    </q-card>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'Quest',
  props: ['id', 'index', 'test_id'],
  data () {
    return {
      places: null,
      communities: null,
      dateExam: {},
      answers: {},
      edit: false,
      loading: false
    }
  },
  validations: {
    dateExam: {
      ccaa: { required },
      place: { required },
      expireDate: { required },
      date: { required },
      pvp: { required }
    }
  },
  mounted () {
    this.getCommunities()
  },
  methods: {
    async getCommunities () {
      await this.$api.get('communities').then(res => {
        if (res) {
          this.communities = res
        }
      })
    },
    async getPlace (id) {
      await this.$api.get('placesByCommunityId/' + id).then(res => {
        if (res) {
          this.places = res
        }
      })
    },
    async getQuestById () {
      if (this.id !== '') {
        this.$q.loading.show({
          message: 'Cargando Datos...'
        })
        console.log('this.id :>> ', this.id)
        this.edit = true
        await this.$api.get('questById/' + this.id).then(res => {
          if (res) {
            this.$q.loading.hide()
            console.log('res :>> ', res)
            this.quest = res
            this.answers.optionA = this.quest.answers[0].titleAnswer
            this.answers.optionB = this.quest.answers[1].titleAnswer
            this.answers.optionC = this.quest.answers[2].titleAnswer
            this.answers.optionD = this.quest.answers[3].titleAnswer
          }
        })
      }
    },
    async save () {
      this.$q.loading.show({
        message: 'Creando Datos...'
      })
      this.$v.$touch()
      if (!this.$v.quest.$error && !this.$v.answers.$error) {
        this.quest.test_id = this.test_id
        this.quest.question_number = this.index
        await this.$api.post('newQuest', {
          quest: this.quest,
          answers: this.answers
        }).then(res => {
          if (res) {
            this.$q.loading.hide()
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
      this.$q.loading.show({
        message: 'Actualizando Datos...'
      })
      this.$v.$touch()
      if (!this.$v.quest.$error && !this.$v.answers.$error) {
        this.quest.question_number = this.index
        await this.$api.put('updateQuest/' + this.id, {
          quest: this.quest,
          answers: this.answers
        }).then(res => {
          if (res) {
            this.$q.loading.hide()
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
