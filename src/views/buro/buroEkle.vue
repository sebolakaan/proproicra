<template>
<div>
     <v-content>
      <v-row>
      <v-col
        cols="12"
        md="8"
        style="padding-left:25px" 
      >

        <v-card class="pa-2" outlined tile>
          <p>Değiştirilen Büro Id : {{id}} </p>
           <v-card class="pa-2" outlined tile>
             <v-col cols="12" md="6">
            <p>Büro Bilgileri</p>
            </v-col>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="buroAd" :rules="nameRules" :counter="15" label="Büro Adı" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field   v-model="sicilNo" :rules="nameRules" :counter="11" label="Sicil No" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="vergiDairesi" :rules="nameRules" label="Vergi Dairesi" required ></v-text-field>
                  </v-col>                  
                  <v-col cols="12" md="4">
                    <v-text-field v-model="vergiNo" :rules="nameRules" label="Vergi No" required ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
        </v-card>
            <br/>
            <v-card class="pa-2" outlined tile> 
              <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Personeller
          <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
           <addpersonel></addpersonel>
           <v-card-title>
                              Personel Listesi
                              <v-spacer></v-spacer>
                              <v-text-field  v-model="search" label="Search" single-line hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="headers" :items="personeller" :search="search"></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
         Adresler
          <template v-slot:actions>
            <v-icon color="teal">mdi-check</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
           <addburoadres></addburoadres>
           <addburoadreslist></addburoadreslist>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          İletişim
          <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          
          <addburoiletisim></addburoiletisim>
           <addburoiletisimlist></addburoiletisimlist>
        </v-expansion-panel-content>
      </v-expansion-panel>

    <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Hesap Bilgileri
          <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <addburohesapbilgileri></addburohesapbilgileri>
          <addburohesapbilgilist></addburohesapbilgilist>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
            </v-card> 
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
               <router-link to="/buroEkle/10"> <v-btn class="ma-2" tile color="green" dark>Büro Ekle</v-btn></router-link>
               <router-link to="/buroEkle"> <v-btn class="ma-2" tile color="red" dark>Büro Sil</v-btn></router-link>
               <router-link to="/burolar"> <v-btn class="ma-2" tile color="orange" dark>Listele</v-btn></router-link>
        </v-card>
      </v-col>
       </v-row>
    </v-content>
</div>
</template>
<script>
import personelEkle from '../../components/personelEkle.vue';
import buroadres  from '../../components/burocomps/buroadres.vue';
import buroiletisim  from '../../components/burocomps/buroiletisim.vue';
import burohesapbilgileri  from '../../components/burocomps/burohesapbilgileri.vue';
import buroiletisimlist  from '../../components/buroiletisimlist.vue';
import buroadreslist  from '../../components/buroadreslist.vue';
import burohesapbilgilist  from '../../components/burohesapbilgilist.vue';
export default {
     data () {
      return {
        id: this.$route.params.id,    
        search: '',
        headers: [
          {
            text: 'Adı Soyadı',
            align: 'left',
            sortable: false,
            value: 'adi',
          },
          { text: 'Personel Türü', value: 'tur' },
          { text: 'Baro Sicil No', value: 'bsNo' },
          { text: 'Maaş', value: 'maas' },
        ],
        personeller: [
          {
            adi: 'Kaan Dikici',
            tur: 'Avukat',
            bsNo: '1654894900',
            maas: '4800',
          },
          {
            adi: 'Emre Küçükyılmaz',
            tur: 'Satış-Pazarlama',
            bsNo: '1165121500',
            maas: '3500',
          },
          {
            adi: 'Caner Çalışkan',
            tur: 'Katip',
            bsNo: '1515188400',
            maas: '2450',
          },
        ],
      valid: false,
      buroAd: '',
      sicilNo: '',
      il: '',
      vergiNo: '',
      vergiDairesi: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
     }
    },
    components:{
      addpersonel:personelEkle,
      addburoadres:buroadres,
      addburoiletisim:buroiletisim,
      addburohesapbilgileri:burohesapbilgileri,
      addburoiletisimlist:buroiletisimlist,
      addburoadreslist:buroadreslist,
      addburohesapbilgilist:burohesapbilgilist,
    }
}
</script>