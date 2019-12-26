<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Personel Ekle</v-btn>
      </template>
      <v-card>
     <personel>
       
     </personel>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Kapat</v-btn>
          <v-btn color="green" text @click="dialog = false">Kaydet</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import personelbox from '../components/personel.vue';

  export default {
    data: () => ({
      dialog: false,
    }),
    components:{
      personel:personelbox,
    }
  }
</script>