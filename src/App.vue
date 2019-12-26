<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content><router-link to="/burolar">
            <v-list-item-title >Büro Bilgileri</v-list-item-title>
          </router-link></v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content><router-link to="/buroEkle">
            <v-list-item-title>Vekalet</v-list-item-title>
          </router-link></v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lisans</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>


<appfooter></appfooter>

  </v-app>
</template>
<script>
import footer from './components/footer.vue';
export default {
  name: 'App',
  
  props: {
      source: String,
  },
  data: () => ({
      drawer: null,
  }),
  created () {
      this.$vuetify.theme.dark = true
  },
  components: {
   appfooter:  footer,
  }
};
</script>