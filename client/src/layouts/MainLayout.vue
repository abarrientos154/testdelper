<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-white">
        <q-toolbar>
          <q-btn flat dense round color="primary" icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>

          <q-toolbar-title class="row">
            <img v-if="leftDrawerOpen == false" src="logocolomer.png" style="width: 50px; height: 40px">
            <div class="text-weight-bolder text-primary column justify-center q-pl-sm">Colomer</div>
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
        <q-list>
          <q-item-label header class="column items-center">
            <img src="logocolomer.png">
            <div class="text-primary text-h4 q-mb-lg">2007 - 2021</div>
          </q-item-label>
          <template v-for="(item, index) in menuAdmin">
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
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
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
      ]
    }
  },
  methods: {
    cerrarSesion () {
      this.$router.push('/login')
    },
    rutas (itm) {
      this.$router.push(itm.ruta)
    }
  }
}
</script>
