<template>
  <q-page class="q-pa-lg">
    <div class="text-h5">Cursos Online</div>
    <div class="text-caption q-pl-sm">Comprar cursos online</div>

    <div class="text-uppercase text-center text-h6 text-primary text-bold"> Nuestros cursos PER </div>
    <div class="row q-gutter-x-md items-center justify-center q-pt-md">
      <q-card v-for="itm in cursos" :key="itm.name" class="plan-style">
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
        <div class="column items-center justify-center full-width" style="position:absolute;bottom:20px;">
          <q-btn label="Comprar" rounded style="width:300px" color="primary" push @click="$router.push('/buy_cursos/form/' + itm.id)" />
        </div>
      </q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      cursos: [
        {
          id: 1,
          name: 'Per Basic',
          price: 39,
          items: [
            '26 Exámenes PER', 'Exámenes por materias', 'Test con tus errores(importante)',
            '96 Exámenes PER de Madrid - Andalucía - Asturias - C.Valenciana - Murcia - País Vasco', 'Curso completo con 104 problemas (ver ejemplo)',
            'Profesor online / telefónico', 'Control de tus test'
          ]
        },
        {
          id: 2,
          name: 'Per Pro',
          price: 49,
          items: [
            '26 Exámenes PER', 'Exámenes por materias', 'Test con tus errores (importante)', '96 Exámenes PER de Madrid - Andalucía - Asturias - C.Valenciana - Murcia - País Vasco',
            'Curso completo con 104 problemas (ver ejemplo)', 'Profesor online / telefónico', 'Control de tus test', '4 Cartas + transportador náutico'
          ]
        }
      ]
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
