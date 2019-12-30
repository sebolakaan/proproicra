<template>
  <v-row justify="center">
        <iletisimmodal></iletisimmodal>
  </v-row>
</template>
<script>
import buroiletisimmodal from '../../components/burocomps/buroeklemodal/buroiletisimmodal.vue';
  export default {
    data: () => ({
      dialog: false,
    }),
    components:{
      iletisimmodal : buroiletisimmodal,
    },
  }
</script>