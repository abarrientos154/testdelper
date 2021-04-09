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
                            <div class="text-subtitle1 q-ml-sm" v-for="(item3, index) in item2.questions" :key="index">{{item3.name}}
                              <q-checkbox v-model="item3.isActive" @input="questSelected(item3)"/>
                              <q-item class="text-subtitle1">A) {{item3.answer[0]}}</q-item>
                              <q-item class="text-subtitle1">B) {{item3.answer[1]}}</q-item>
                              <q-item class="text-subtitle1">C) {{item3.answer[2]}}</q-item>
                              <q-item class="text-subtitle1">D) {{item3.answer[3]}}</q-item>
                            </div>
                          </q-list>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
          <div class="row justify-center q-mb-md">
            <q-btn icon="add_circle" color="primary" @click="save()" label="Guardar"/>
          </div>
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
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
                  ],
                  isActive: false
                },
                {
                  name: 'question2',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question3',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                },
                {
                  name: 'question4',
                  answer: [
                    'primera respuesta',
                    'segunda respuesta',
                    'tercera respuesta',
                    'cuarta respuesta'
                  ],
                  isActive: false
                }
              ]
            }
          ]
        }
      ],
      send: []
    }
  },
  methods: {
    questSelected (quest, ind) {
      if (quest.isActive === true) {
        this.send.push(quest)
      }
      console.log('quest, ind :>> ', quest, this.send)
    },
    save () {
      for (var i in this.send) {
        if (this.send[i].isActive === false) {
          this.send.splice(i, 1)
        }
      }
      console.log('this.send :>> ', this.send)
    }
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
