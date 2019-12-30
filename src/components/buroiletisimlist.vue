<template>
    <v-row>
        <v-col v-for="iletisim in iletisimler" v-bind:key="iletisim.id" cols="12" md="3" lg="3">                      
            <v-card color="dark-grey">
                <v-card-title class="headline">{{iletisim.tur}}</v-card-title>
                <v-card-subtitle> {{iletisim.deger}}</v-card-subtitle>                     
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
      data(){
      return{
      iletisimler:[
          {
            id:1,
            tur: 'E-posta',
            deger:'kaanylmz.yzlm@gmail.com',
          },
          {
            id:2,
            tur: 'GSM',
            deger:'05057816431',
          },
          {
            id:3,
            tur: 'Web Sitesi',
            deger:'kaan-yilmaz.com',
          },
             

        ],
        }
    }
}
</script>