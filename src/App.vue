<template>
  <div id="app" class="small-container">
    <h1>Juices</h1>

<juices-table-vue :juices="juices"></juices-table-vue>
  </div>
  <div class="other-container">
    <h1>Add Juices</h1>
  </div>
</template>

<script>
import JuicesTableVue from './components/JuicesTable.vue';
export default {
  name: 'App',
  components: {
    JuicesTableVue
  },
  data() {
    return {
      juices: []
    };
  },

  mounted() {
    this.getJuices();
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
    }
  }

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 30px;
  background-color: #7C898B;
}
button {
  background: #009435;
  border: 1px solid #009435;
}

button:hover,
button:active,
button:focus {
  background: #32a95d;
  border: 1px solid #32a95d;
}

.small-container {
  max-width: 680px;
}
.other-container {
  max-width: 100px;
}
</style>
