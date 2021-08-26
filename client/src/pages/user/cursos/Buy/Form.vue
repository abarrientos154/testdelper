<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 text-uppercase text-primary text-center text-bold" style="font-size:30px">Cursos del per Online</div>
    <hr style="width:50px;background-color:#1976D2;height:2px;border-radius:10px">

    <div class="row justify-center q-mt-xl" style="width:100%">
      <div class="column" style="width:350px;min-width:350px;max-width:350px">
        <div class="curso-per-style column items-center justify-center">
          <div style="color:#26a6e3;font-size:30px" class="text-bold text-uppercase">curso per online</div>
          <hr style="background-color:#26a6e3;width: 90%;height:2px">
        </div>
        <div class="column q-mt-xl">
          <q-checkbox v-model="checks" v-for="check in checksInf" :label="check" :key="check" disable />
        </div>
      </div>
      <div style="width:45%">
        <div class="column">
          <p class="text-bold">PER, Patrón de Embarcaciones de Recreo</p>
          <p>
            Es un título deportivo que te permite gobernar para uso personal, embarcaciones de 15 metros de eslora y hasta 12 millas de la costa.
            <br><br>
            Realizando unas prácticas especiales de 24 horas, se amplian las atribuciones hasta 20 metros de eslora y te permite navegar hasta a Baleares.
            <br><br>
            Nuestro curso está diseñado para prepararte para el EXAMEN téorico del PER, en él tienes explicaciones perfectamente claras de todos los temas. Solo necesitas un ordenador con conexión a internet y podrás ver el curso las 24 horas del días desde donde quieras.
            <br><br>
            Para obtener el PER, debes aprobar un examen teórico tipo test, cada comunidad autónoma es la encargada de realizarlo y realizar unas prácticas, que puedes realizar antes o después del teorico en una escuela homologada.
            <br><br>
            Con nuestras explicaciones de los temas y realizando nuestros test, estarás suficientemente preparado para aprobar el examen del PER.
          </p>
          <div class="q-gutter-y-md">
            <q-expansion-item expand-separator label="¿QUE MATERIAL DIDACTICO NECESITO?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Además de 1 cuaderno para tomar anotaciones, para realizar los problemas de la carta necesitarás:
                  Transportador náutico
                  Cartas del estrecho
                  Compás
                  Escuadra y cartabón
                  Calculadora sencilla
                  Nosotros te podemos enviar a casa 1 transportador náutico y 4 cartas náuticas, este material suele ser difícil de encontrar.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿SI NECESITO AYUDA PUEDO LLAMAROS POR TELÉFONO?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Por supuesto, una de las claves del curso, está en tener contacto directo con el profesor, ya sea por teléfono, e-mail, WhatsApp... A la mínima duda que tengas, no es que puedas llamar, es que te "exigimos" que lo hagas, una vez que empiezas el curso con nosotros, nuestro único objetivo es que apruebes.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿DÓNDE, CUANDO Y CÓMO ME APUNTO AL EXAMEN?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Elige el sitio que más te interese, por proximidad o por fecha, si pulsas arriba en FECHA EXAMEN, verás un calendario con todos los exámenes y fechas que hay. Al seleccionar un examen, nosotros nos encargamos de todo el papeleo, tasas, inscripción, comprobar las listas...
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿DONDE Y CUANDO REALIZO LAS PRACTICAS?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Puedes realizar las prácticas en cualquier escuela homologada, por supuesto también las puedes realizar con nosotros. Las puedes hacer antes o después del examen, si las haces antes, tienes 2 años para aprobar el examen teórico. Las prácticas no son examinables.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿COMO TRAMITO LA DOCUMENTACION PARA OBTENER LA TARJETA?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Una vez aprobado y realizadas las prácticas, debes entregar la documentación que te pida cada comunidad autónoma, lo puedes hacer por correo postal. No obstante, la escuela donde realices las prácticas, ya sea con nosotros o con otra, te darán explicaciones de los pasos a seguir.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿DEBO SUPERAR UN RECONOCIMIENTO MEDICO?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Si, en el mismo lugar donde superas el del coche, no te lo saques hasta que no tengas los certificados de prácticas en la mano, justo antes de solicitar la tarjeta de patrón, el certificado médico caduca.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator label="¿ES FACIL O DIFICIL SACARSE EL PER?" class="bg-grey-2 text-primary text-bold shadow-1" >
              <q-card class="bg-grey-1">
                <q-card-section>
                  Tiene la misma dificultad que sacarse el carné de conducir de coche, en un ritmo normal de trabajo, 3 tardes a la semana, 3 horas cada vez, en un plazo de 2 meses, tienes tiempo de sobra.
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </div>
        </div>
      </div>
    </div>

    <div class="text-uppercase text-center text-h6 text-primary text-bold q-mt-xl" style="font-size:30px"> Nuestros cursos PER </div>
    <hr style="width:50px;background-color:#1976D2;height:2px;border-radius:10px">
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
      checks: true,
      checksInf: ['Con profesor para las dudas', 'Curso 100% online', 'Acceso a exámenes de Madrid - Andalucía - C.Valenciana - Murcia - País Vasco',
        '104 problemas de la carta naútica resueltos por animación', 'Test separados por materias', 'Gráfica y panel de control de tus test', 'Ranking de puntuación'
      ],
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

.curso-per-style {
  width: 90%;
  height: 200px;
  background-color: #34486d;
  border-top: 10px solid #26a6e3;
}
</style>
