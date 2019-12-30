<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">İletişim Bilgisi Ekle</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">İletişim Bilgileri</span>
        </v-card-title>
     <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <select id="primary" class="form-control" v-model="seciliTur">
                    <option v-for="(tur,index) in turler" :key="`tur-${index}`">{{tur}}</option>
                </select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-if="seciliTur=='Telefon'" v-model="iletisim.deger" label="Telefon No" required></v-text-field>
                <v-text-field v-if="seciliTur=='Faks'" v-model="iletisim.deger" label="Faks No" required></v-text-field>
                <v-text-field v-if="seciliTur=='E-posta'" v-model="iletisim.deger" label="E-posta" required></v-text-field>
                <v-text-field v-if="seciliTur=='Sosyal Medya'" v-model="iletisim.deger" label="Sosyal Medya" required></v-text-field>
                <v-text-field v-if="seciliTur=='Web Sitesi'" v-model="iletisim.deger" label="Web Sitesi" required></v-text-field> 
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
         <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false; Kaydet()">Save</v-btn>
        </v-card-actions>
    </v-card>
        </v-dialog>
</template>
<script>
export default {
     data () {
      return {
            seciliTur:'',
            turler:['Telefon','Faks','E-posta','Sosyal Medya','Web Sitesi'],
            dialog: false,
            iletisim:{                            
                id:5,
                tur: this.seciliTur,
                deger:'',
           },               
        }    
    }, 
    methods:{
        Kaydet(){
            this.$emit("iletisimNesne",this.iletisim);
        }

    }
}
</script>