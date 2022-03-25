<template>
  <v-app>
    <v-main>
      <v-container fluid id="app">
        <v-row>
          <v-col lg="8" sm="12">
            <juices-table-vue :juices="juices"></juices-table-vue>
          </v-col>
          <v-col lg="4" sm="12">
            <juice-form-vue v-if="brands" :brands="brands" style="background-color: white"></juice-form-vue>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import JuicesTableVue from './components/JuicesTable.vue';
import JuiceFormVue from './components/JuiceForm.vue';
export default {
  name: 'App',

  components: {
    JuicesTableVue,
    JuiceFormVue
  },

  data: () => ({
    juices: [],
    brands: []
  }),
  mounted() {
    this.getJuices();
    setTimeout(this.getUniqueBrands, 150)
  },

  methods: {
    async getJuices() {
      try {
        const response = await fetch(
          "http://192.168.1.206:5000/juices/test/tits"
        );
        const data = await response.json();
        this.juices = data;
      } catch(error) {
        console.log(error);
      }
    },
    async getUniqueBrands() {
      try {
        const response = await fetch(
          "http://192.168.1.206:5000/brands/distinct"
        );
        const data = await response.json();
        console.log(data);
        this.brands = data;
      } catch(error) {
        console.log(error);
      }
    }
    }
}
</script>

<style scoped>
#app {
  background-color: #7C898B
}
</style>