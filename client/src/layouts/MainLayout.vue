<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-white">
        <q-toolbar>
          <!-- <q-btn flat dense round color="primary" icon="menu" aria-label="Menu" @click="clickmenu()"/> -->

          <q-toolbar-title class="row justify-center">
            <!-- <img v-if="DrawerOpen == false" src="logocolomer.png" style="width: 50px; height: 40px"> -->
            <div class="text-weight-bolder text-primary column justify-center q-pl-sm">Colomer</div>
          </q-toolbar-title>

          <div class="text-black">{{ultimaConeccion == {} ? user.ultima_coneccion.fecha : ultimaConeccion.fecha}}</div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="DrawerOpen" bordered>
        <q-list>
          <q-item-label header class="column items-center">
            <img src="logocolomer.png">
            <div class="text-primary text-h4 q-mb-lg">2007 - 2021</div>
          </q-item-label>
          <template v-for="(item, index) in menu">
            <q-item :key="index" clickable v-ripple @click="item.label === 'Cerrar Sesión' ? cerrarSesion() : rutas(item)">
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                  {{ item.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" />
          </template>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
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
          icon: 'menu_book',
          label: 'Asignaturas',
          ruta: '/inicio_administrador'
        },
        {
          icon: 'article',
          label: 'Examenes',
          ruta: '/examenes'
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
          label: 'Inicio',
          ruta: '/inicio'
        },
        {
          icon: 'logout',
          label: 'Cerrar Sesión',
          ruta: ''
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
      this.$q.loading.show({
        message: 'Cerrando Sesión...'
      })
      this.$api.put('updateUser/' + this.user._id, this.user).then((res) => {
        if (res) {
          this.$q.loading.hide()
          this.logout()
          this.$router.push('/login')
        }
      })
    },
    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.ultimaConeccion = v.ultima_coneccion
          this.user = v
          if (this.rol === 1) {
            this.menu = this.menuAdmin
          } else {
            if (this.rol === 2) {
              this.menu = this.menuUser
            } else {
              console.log(this.rol)
            }
          }
          this.fecha = this.hoy.getDate() + '/' + (this.hoy.getMonth() + 1) + '/' + this.hoy.getFullYear()
          this.hora = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds()
          this.user.ultima_coneccion = { fecha: this.fecha, hora: this.hora }
          console.log(v)
        }
      })
    },
    rutas (itm) {
      this.$router.push(itm.ruta)
    }
  }
}
</script>
