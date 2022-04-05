<template>
  <v-app>
    <v-main>
      <v-container fluid id="app">
        <v-row>
          <v-col lg="8" sm="12">
            <juices-table-vue v-if="getJuices" :getJuices="getJuices"></juices-table-vue>
          </v-col>
          <v-col lg="4" sm="12">
            <juice-form-vue v-if="getBrands" :getBrands="getBrands" style="background-color: white"></juice-form-vue>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import JuicesTableVue from './components/JuicesTable.vue';
import JuiceFormVue from './components/JuiceForm.vue';
import {mapGetters, mapActions} from 'vuex'


export default ({
  name: 'App',
  components: {
    JuicesTableVue,
    JuiceFormVue
  },
  data: () => ({
    juices : [],
    brands: []
  }),
  created() {
    this.fetchJuices();
    this.juices = this.getJuices;
    this.brands = this.getBrands;
    console.log(this.brands)
  },

  methods: {
    ...mapActions(['fetchJuices']),
    async getJuicesOld() {
      try {
        const response = await fetch(
          "http://localhost:5000/juices/test/tits"
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
          "http://localhost:5000/brands/distinct"
        );
        const data = await response.json();
        console.log(data);
        this.brands = data;
      } catch(error) {
        console.log(error);
      }
    }
    },
    computed: {
      ...mapGetters(['getJuices', 'getBrands']),
      getJuices() {
        console.log(this.$store.getters.getJuices);
        return this.$store.getters.getJuices;
      }
    }
});
</script>

<style scoped>
#app {
  background-color: #7C898B
}
</style>