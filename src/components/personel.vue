<template>
  <div>
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Yeni Personel Bilgileri
          <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
        <personelEkran></personelEkran>
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
            <adresEkran></adresEkran>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          İletişim Bilgileri
          <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <iletisimEkran></iletisimEkran>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Hesap Numaraları
          <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <hesapBilgileriEkran></hesapBilgileriEkran>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Kimlik Bilgileri
          <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
           <kimlikBilgileriEkran></kimlikBilgileriEkran>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import personelscreen from '../components/personelcomp/personelscreen.vue';
import adresscreen from '../components/personelcomp/adresscreen.vue';
import iletisimscreen from '../components/personelcomp/iletisimscreen.vue';
import hesapbilgileriscreen from '../components/personelcomp/hesapbilgileriscreen.vue';
import kimlikbilgileriscreen from '../components/personelcomp/kimlikbilgileriscreen.vue';
export default {
    components:{
        personelEkran:personelscreen,
        adresEkran:adresscreen,
        iletisimEkran:iletisimscreen,
        hesapBilgileriEkran:hesapbilgileriscreen,
        kimlikBilgileriEkran:kimlikbilgileriscreen,
    }
    
}
</script>