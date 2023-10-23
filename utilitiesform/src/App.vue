<template>
  <v-app class="colorStyle">
    <v-main class="pa-10">
        <UtilitiesScheduling/>
    </v-main>
  </v-app>
</template>

<script>
import UtilitiesScheduling from './components/UtilitiesScheduling';

export default {
  name: 'App',

  components: {
    UtilitiesScheduling,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  .colorStyle{
    background-color: rgb(229, 227, 227) !important;
  }
</style>
