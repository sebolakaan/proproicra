<template>
<div>
     <v-content>
      <v-row>
      <v-col
        cols="12"
        md="8"
        style="padding-left:25px" 
      >
        <v-card>
    <v-card-title>
      Büro Listesi
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
         style="padding-right:25px" 
      >
         <v-card class="pa-2" outlined tile> 
          <p  class="cols=12; md=4;">İşlemler</p>
          <hr>
        </v-card>
       <v-card class="pa-2" outlined tile> 
               <router-link to="/buroEkle/10"><v-btn class="ma-2" tile color="green" dark>Büro Ekle</v-btn></router-link>
        </v-card>
      </v-col>
       </v-row>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        </v-row>
      </v-container>
    </v-content> 
</div> 
</template>
<script>
    export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Adı',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'İl', value: 'il' },
          { text: 'Vergi Dairesi', value: 'vd' },
          { text: 'Kurum', value: 'kurum' },
          { text: 'Çalışan Sayısı', value: 'calisan' },

        ],
        desserts: [
          {
            name: 'Zirve Ankara Hukuk Bürosu',
            il: 'Ankara',
            vd: '9.Vergi Dairesi',
            kurum: 'Evet',
            calisan: 9,
          },
          {
            name: 'Zirve İzmir Hukuk Bürosu',
            il: 'İzmir',
            vd: '37.Vergi Dairesi',
            kurum: 'Evet',
            calisan: 8,
          },
          {
            name: 'Zirve İstanbul Hukuk Bürosu',
            il: 'İstanbul',
            vd: '10.Vergi Dairesi',
            kurum: 'Evet',
            calisan: 20,
          },
        ],
      }
    },
        components:{
    }
  }
</script>
<style scoped>
 .router-link{
	text-decoration: none;
}
</style>