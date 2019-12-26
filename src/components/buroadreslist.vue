<template>
   <v-row>
    <v-col v-for="adres in adresler" v-bind:key="adres.id" cols="12" md="4" lg="4">      
      <v-card color="dark-color">
          <v-card-title class="headline">{{adres.adresTuru}}</v-card-title>
            <v-card-subtitle> {{adres.tamAdres}}</v-card-subtitle>
            <v-card-subtitle> Mersis Adresi: {{adres.mernisAdresi}}</v-card-subtitle>
            <v-card-subtitle> Posta Kodu: {{adres.postaKodu}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn text>Varsayılan Yap</v-btn>
                </v-card-actions>                        
      </v-card>
    </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
      return{
      adresler:[
          {
            id:1,
            tamAdres: '113/16 sokak no 167 erzene mah',
            adresTuru:'Yurt içi ikamet adresi',
            postaKodu:'35014',
            adresDetay:'detay',
            il:'İzmir',
            ilçe:'Bornova',
            mersisAdresi:true,
          },
          {
            id:2,
            tamAdres: '12. mustafa kemal sokak no 15 kızılay mah',
            adresTuru:'Yurt içi ikamet adresi',
            postaKodu:'32014',
            adresDetay:'detaylı',
            il:'Ankara',
            ilçe:'Kızılay',
            mersisAdresi:true,
          },      

        ],
        }
    }
}
</script>