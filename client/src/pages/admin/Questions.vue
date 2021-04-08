<template>
  <div>
    <q-card class="row justify-center bg-blue-2">
      <div class="column q-ma-md">
        <div class="text-h3 col-10 row justify-center q-my-sm text-primary text-weight-bolder">Preguntas</div>
      </div>
    </q-card>
    <div class="row justify-center">
      <div class="col col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-6 q-mx-md q-my-sm">
        <div class="column dimension">
          <q-list bordered class="rounded-borders q-ma-md q-pa-md">
            <div class="text-h6 text-primary">Asignaciones:</div>
            <q-expansion-item
              v-for="(item, index) in asig"
              :key="index"
              expand-separator
              icon="menu_book"
              :label="item.name"
            >
              <q-card>
                <q-card-section>
                  <q-list bordered class="rounded-borders q-ma-md q-pa-md">
                    <div class="text-h6 text-primary">Temas:</div>
                    <q-expansion-item
                      v-for="(item2, index) in item.themes"
                      :key="index"
                      expand-separator
                      icon="source"
                      :label="item2.name"
                    >
                      <q-card>
                        <q-card-section>
                          <q-list bordered class="rounded-borders q-ma-md q-pa-md">
                            <div class="text-h6 text-primary">Preguntas:</div>
                            <q-expansion-item
                              v-for="(item3, index) in item2.questions"
                              :key="index"
                              expand-separator
                              icon="quiz"
                              :label="item3.name"
                            >
                              <q-card>
                                <q-card-section>
                                  <div class="text-h6 text-primary">Respuestas</div>
                                  <q-item v-for="(item4, index) in item3.answer" :key="index" class="text-subtitle1 q-mb-sm" clickable>{{item4}}</q-item>
                                </q-card-section>
                              </q-card>
                            </q-expansion-item>
                          </q-list>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      asig: [
        {
          id: 1,
          name: 'Nomenclatura náutica',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'Amarre y fondeo',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Seguridad en la mar',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: 'Legislación',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 5,
          name: 'Balizamiento',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 6,
          name: 'Reglamento',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 7,
          name: 'Maniobras en la mar',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 8,
          name: 'Emergencias en la mar',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 9,
          name: 'Metodología',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 10,
          name: 'Navegación',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 11,
          name: 'Carta náutica',
          themes: [
            {
              name: 'theme1',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme2',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme3',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            },
            {
              name: 'theme4',
              questions: [
                {
                  name: 'question1',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {

  },
  mounted () {
    console.log('this.asig :>> ', this.asig)
  }
}
</script>

<style scoped lang="scss">
.dimension {
  min-width: 300px;
}
</style>
