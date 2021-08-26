<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-white" style="height:80px">
        <q-toolbar>
          <img src="logocolomer.png" style="height:70px">
          <div class="row full-width q-gutter-x-md justify-end items-center q-mr-xl" style="height:80px">
            <div :class="item.label === 'Acceso' ? 'text-secondary': 'text-grey'"
              @click="item.label === 'Cerrar Sesión' ? cerrarSesion() : item.label === 'Datos Masivos' ? uploadData() : rutas(item)"
              v-for="(item, index) in menu" :key="index" class="cursor-pointer animate-border" style="font-size:20px"
              :style="item.ruta === $route.path ? 'border-bottom:1px solid #1976D2' : ''">
                {{item.label}}
            </div>
          </div>
          <div v-if="rol == 2" class="text-black">{{ultimaConeccion == {} ? user.ultima_coneccion.fecha : ultimaConeccion.fecha}}</div>
        </q-toolbar>
      </q-header>

      <!-- <q-drawer v-model="DrawerOpen" bordered>
        <q-list>
          <q-item-label header class="column items-center">
            <img src="logocolomer.png">
          </q-item-label>
          <template v-for="(item, index) in menu">
            <q-item v-if="!item.children" :key="index" clickable v-ripple @click="item.label === 'Cerrar Sesión' ? cerrarSesion() : item.label === 'Datos Masivos' ? uploadData() : rutas(item)">
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                  {{ item.label }}
              </q-item-section>
            </q-item>
            <q-expansion-item v-else expand-separator :icon="item.icon" :label="item.label" :key="index" >
              <q-item class="q-ml-md" v-for="(child, ind) in item.children" :key="ind" clickable v-ripple @click="rutas(child)">
                <q-item-section avatar>
                  <q-icon :name="child.icon" />
                </q-item-section>
                <q-item-section>
                  {{ child.label }}
                </q-item-section>
              </q-item>
            </q-expansion-item>
            <q-separator :key="'sep' + index" />
          </template>
        </q-list>
      </q-drawer>
      -->

      <q-dialog v-model="up">
        <big-data @file="getFile"></big-data>
      </q-dialog>

      <q-dialog v-model="gestion">
        <q-card style="width:400px; height:300px; border-radius:15px">
          <q-btn icon="close" color="negative" style="position:absolute;top:5px;right:5px" flat v-close-popup round />
          <gestion-cost />
        </q-card>
      </q-dialog>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import BigData from '../components/BigData.vue'
import GestionCost from '../pages/admin/gestionCost/Form.vue'
import { mapMutations } from 'vuex'
export default {
  components: { BigData, GestionCost },
  name: 'MainLayout',
  data () {
    return {
      gestion: false,
      up: false,
      hoy: new Date(),
      fecha: '',
      hora: '',
      rol: null,
      user: {},
      ultimaConeccion: {},
      DrawerOpen: true,
      menu: [],
      menuAdmin: [
        {
          icon: 'person',
          label: 'Usuarios',
          ruta: '/users'
        },
        {
          icon: 'pending_actions',
          label: 'Pendientes',
          ruta: '/payment/1'
        },
        {
          icon: 'account_balance_wallet',
          label: 'Pagados',
          ruta: '/payment/2'
        },
        {
          icon: 'upload',
          label: 'Datos Masivos',
          ruta: ''
        },
        {
          icon: 'article',
          label: 'Examenes',
          ruta: '/exams'
        },
        {
          icon: 'fact_check',
          label: 'Gestion de coste',
          ruta: '/gestion'
        },
        {
          icon: 'logout',
          label: 'Cerrar Sesión',
          ruta: ''
        }
      ],
      menuUser: [
        {
          icon: 'home',
          label: 'Examenes',
          ruta: '/buy_exams'
        },
        {
          icon: 'list',
          label: 'Cursos Online',
          ruta: '/buy_cursos'
        },
        /* {
          icon: 'menu_book',
          label: 'Asignaturas',
          ruta: '/courses'
        }, */
        /* {
          icon: 'event',
          label: 'Fecha Examen',
          ruta: '/date_exams_users'
        },
        {
          icon: 'add_shopping_cart',
          label: 'Comprar',
          ruta: '',
          children: [
            {
              icon: 'list',
              label: 'Examenes',
              ruta: '/buy_exams'
            },
            {
              icon: 'list',
              label: 'Cursos Online',
              ruta: '/buy_cursos'
            }
          ]
        }, /* ,
        {
          icon: 'logout',
          label: 'Cerrar Sesión',
          ruta: ''
        } */
        {
          icon: 'login',
          label: 'Acceso',
          ruta: '/login'
        }
      ]
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapMutations('generals', ['logout']),
    cerrarSesion () {
      this.logout()
      this.$router.push('/login')
    },
    uploadData () {
      this.up = true
    },
    getFile (f) {
      if (f === false) {
        this.up = false
      }
    },
    async getUser () {
      const v = JSON.parse(this.$q.localStorage.getItem('SESSION_INFO'))
      if (v) {
        this.rol = v.roles[0]
        // this.ultimaConeccion = v.ultima_coneccion
        this.user = v
        console.log(this.rol, 'rol')
        if (this.rol === 1) {
          this.menu = this.menuAdmin
        } else {
          if (this.rol === 2) {
            this.menu = this.menuUser
          } else {
            console.log(this.rol)
          }
        }
        // this.fecha = this.hoy.getDate() + '/' + (this.hoy.getMonth() + 1) + '/' + this.hoy.getFullYear()
        // this.hora = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds()
        // this.user.ultima_coneccion = { fecha: this.fecha, hora: this.hora }
        console.log(v)
      } else {
        this.menu = this.menuUser
      }
    },
    rutas (itm) {
      console.log(itm, 'res')
      if (itm.ruta === '/gestion') {
        this.gestion = true
      } else {
        this.$router.push(itm.ruta)
      }
    }
  }
}
</script>
