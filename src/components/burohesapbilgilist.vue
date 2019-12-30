<template>
     <v-row>
         <v-col v-for="hesap in hesaplar" v-bind:key="hesap.id" cols="12" md="3" lg="3">                   
            <v-card color="dark-grey">
               <v-card-title class="headline">{{hesap.ad}}</v-card-title>
                  <v-card-subtitle> {{hesap.tur}}</v-card-subtitle>                     
            </v-card>
         </v-col>         
      </v-row>
</template>
<script>
export default {
    data(){
      return{
      hesaplar:[
          {
            id:1,
            ad: 'Kaan TL',
            tur:'Vadesiz TL Hesabı',
            iban:'',
            bankaAdi:'',
            subeAdi:'',
            hesapNo:'',
          },
         {
            id:1,
            ad: 'Kaan Dolar',
            tur:'Vadesiz Dolar Hesabı',
            iban:'',
            bankaAdi:'',
            subeAdi:'',
            hesapNo:'',
          },            
        ],
        }
    }
}
</script>