<template>
  <q-page class="q-pa-md" v-if="!finish">
    <div class="text-h6">Compra Examen</div>
     <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated class="q-mt-md">
      <q-step :name="1" title="Informacion" icon="info" :done="step > 1" :header-nav="false" >
        <div class="text-h4 text-center q-pb-md"> Plan seleccionado </div>
        <div class="column items-center justify-center">
          <q-card class="plan-style">
            <div class="text-uppercase text-center text-primary text-h4 text-bold"> {{itm.name}} </div>
            <div class="text-center text-h4 text-bold"> {{ itm.price }}€ </div>
            <div class="text-grey-6 text-center q-pb-md"> (Acceso durante 1 año)</div>
            <q-separator color="primary" inset />
            <br>
            <div class="column items-center">
              <div v-for="label in itm.items" :key="label">
                <div class="text-grey-6 text-subtitle2"> {{label}}  </div>
                <br>
              </div>
            </div>
          </q-card>
        </div>
      </q-step>

      <q-step :name="2" title="Registro" icon="info" :done="step > 2" :header-nav="false" >
        <div class="column q-gutter-y-md">
          <q-input v-model="user.name" outlined dense label="Nombre" autofocus :error="$v.user.name.$error" @blur="$v.user.name.$touch()" />
          <q-input v-model="user.lastName" outlined dense label="Apellido" :error="$v.user.lastName.$error" @blur="$v.user.lastName.$touch()" />
          <q-input v-model="user.nieNif" outlined dense label="NIF/NIE" />
          <q-input v-model="user.phone" outlined dense label="Telefono" type="number" />
          <q-input v-model="user.email" outlined dense label="Email" type="email" :error="$v.user.email.$error" @blur="$v.user.email.$touch()" />
          <q-input v-model="user.country" outlined dense label="Pais" :error="$v.user.country.$error" @blur="$v.user.country.$touch()" />
          <q-input v-model="user.cp" outlined dense label="C.P." />
          <q-input v-model="user.address" outlined dense label="Direccion" />
          <q-input v-model="user.comments" outlined dense label="Comentarios" />
        </div>
      </q-step>

      <q-step :name="3" title="Metodo de Pago" icon="info" :done="step > 3" :header-nav="false" >
        <center>
          <q-list bordered style="border-radius:6px">

            <q-expansion-item group="somegroup" icon="account_balance" label="Transferencia Bancaria" header-class="text-primary">
              <q-card>
                <q-card-section>
                  <div class="text-primary text-center text-h6"> Transferencia Bancaria </div>
                  <div class="text-center" style="font-size:20px"> Total </div>
                  <div class="text-subtitle2 text-center text-bold q-mt-sm text-primary" style="font-size:35px"> ${{total}} </div>

                  <div class="column items-center justify-start q-mt-md full-width" style="padding-left:100px">
                    <div class="row">
                      <div style="width:150px" class="text-center"> Banco: </div>
                      <div style="width:270px"> Cajamar </div>
                    </div>

                    <div class="row">
                      <div style="width:150px" class="text-center"> Cuenta:</div>
                      <div style="width:270px"> ES87 3058 0371 0627 2000 6217 </div>
                    </div>

                    <div class="row">
                      <div style="width:150px" class="text-center"> Titular: </div>
                      <div style="width:270px"> Carthago Vela </div>
                    </div>

                    <div class="row">
                      <div style="width:150px" class="text-center"> Concepto: </div>
                      <div style="width:270px"> Un número de pedido que usted decidad </div>
                    </div>

                    <p class="text-center q-mt-md"> Realice una transferencia en nuestro banco y envienos el justificante de pago (pdf) por: </p>

                  </div>
                  <div class="row justify-center">
                    <div class="text-bold" style="width:100px">Email:</div>
                    <div style="width:100px"> santiago@cursodelper.es </div>
                  </div>
                  <div class="row justify-center">
                    <div class="text-bold" style="width:100px">Whatsapp:</div>
                    <div style="width:100px"> XXXXXXXXX </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item v-model="expandedPaypal" group="somegroup" icon="payment" label="Paypal" header-class="text-primary">
              <q-card>
                <q-card-section>
                  <div class="text-center" style="font-size:20px"> Total pagar: </div>
                  <div class="text-subtitle2 text-center text-bold q-mt-sm text-primary" style="font-size:35px"> ${{total}} </div>
                  <div class="row justify-center">
                    <pay-pal class="q-mt-lg" style="width:400px" :total="total" :descripcion="itm.name" @pagoProcesado="pagoProcesado" />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </center>
      </q-step>
      <q-step :name="4" title="Finalizar" icon="done" :header-nav="false" >
        <p v-if="!finishPaypal"> Al presionar <strong>finalizar</strong> sus datos estaran siendo procesados por un administrador. </p>
        <p v-else> Su <strong>PAGO</strong> fue <strong>PROCESADO EXITOSAMENTE</strong> </p>
      </q-step>
      <template v-slot:navigation>
        <div class="row justify-end q-pa-sm">
          <q-stepper-navigation>
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous(), expandedPaypal = false" label="Atras" icon="arrow_back" class="q-mr-sm" />
            <q-btn v-if="!expandedPaypal" @click="nextStep()" color="primary" :label="step === 4 ? 'Finalizar' : 'Continuar'" push />
          </q-stepper-navigation>
        </div>
      </template>
    </q-stepper>
  </q-page>
  <q-page v-else class="q-pa-xl">
    <div class="full-width column items-center shadow-2 rounded-borders">
      <q-img src="check.png" style="width:300px;height:300px" />
      <p style="font-size:20px">Su pago esta siendo procesado por los administradores.</p>
    </div>
  </q-page>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'
import PayPal from '../../../../components/Paypal.vue'
export default {
  components: {
    PayPal
  },
  data () {
    return {
      step: 1,
      form: {},
      id: this.$route.params.id,
      total: 0,
      user: {},
      finish: false,
      finishPaypal: false,
      expandedPaypal: false,
      cursos: [
        {
          id: '1',
          name: 'Per Basic',
          price: 39,
          items: [
            '26 Exámenes PER', 'Exámenes por materias', 'Test con tus errores(importante)',
            '96 Exámenes PER de Madrid - Andalucía - Asturias - C.Valenciana - Murcia - País Vasco', 'Curso completo con 104 problemas (ver ejemplo)',
            'Profesor online / telefónico', 'Control de tus test'
          ]
        },
        {
          id: '2',
          name: 'Per Pro',
          price: 49,
          items: [
            '26 Exámenes PER', 'Exámenes por materias', 'Test con tus errores (importante)', '96 Exámenes PER de Madrid - Andalucía - Asturias - C.Valenciana - Murcia - País Vasco',
            'Curso completo con 104 problemas (ver ejemplo)', 'Profesor online / telefónico', 'Control de tus test', '4 Cartas + transportador náutico'
          ]
        }
      ]
    }
  },
  validations () {
    return {
      user: {
        name: { required },
        lastName: { required },
        email: { required, email },
        country: { required }
      }
    }
  },
  computed: {
    itm () {
      return this.cursos.find(v => v.id === this.id)
    }
  },
  mounted () {
    this.getGestionCost()
  },
  methods: {
    async pagoProcesado () {
      this.user.total = this.total
      this.user.curso = true
      await this.$api.post('payment_paypal', this.user).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.finishPaypal = true
          this.expandedPaypal = true
          this.$refs.stepper.next()
        }
      })
    },
    async nextStep () {
      if (this.step === 2) {
        this.$v.user.$touch()
        if (!this.$v.user.$error) {
          this.$refs.stepper.next()
        }
      } else if (this.step === 4) {
        if (this.finishPaypal) {
          this.$router.push('/buy_cursos')
        } else {
          this.$q.loading.show()
          this.user.curso = true
          this.user.total = this.total
          await this.$api.post('payment', this.user).then(res => {
            this.$q.loading.hide()
            if (res) {
              this.finish = true
            }
          })
        }
      } else {
        this.$refs.stepper.next()
      }
    },
    async getGestionCost () {
      this.$q.loading.show()
      const form = await this.$api.get('gestion_cost')
      this.$q.loading.hide()
      console.log(form, 'gestion cost')
      if (form) {
        console.log(form, this.itm, 'itm')
        this.total = form.value + parseInt(this.itm.price)
        console.log(this.total, 'total')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.plan-style {
  padding: 15px;
  width: 45%;
  border-top: 10px solid $primary;
  height: 600px;
  background-color: $grey-3;
}
</style>
