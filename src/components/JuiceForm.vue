<template>

  <form>
    <h1 v-if="getCurrentSelectedJuice == null" style="text-align:center;">Add Juices</h1>
    <h1 v-if="getCurrentSelectedJuice !=null" style="text-align:center;">Edit Juice</h1>
    <h3 style="text-align:center; padding-top:15px;">1) Brand Name</h3>
    <v-text-field v-if="getCurrentSelectedJuice"  :label="getCurrentSelectedJuice.brand" @input="updateBrand" style="color: white; width:100%; background-color: grey"></v-text-field>
    <vue3-simple-typeahead 
    v-if="getCurrentSelectedJuice==null"
    @input="updateBrand"
    style="background-color: grey; "
    id="brand_entry"
    placeholder="Enter a brand..."
    :items="getBrands"
    :minInputLength="1"
    :itemProjection="itemProjectionFunction"
    @selectItem="selectItemEventHandler"
	@onInput="onInputEventHandler"
	@onFocus="onFocusEventHandler"
	@onBlur="onBlurEventHandler"
    >
    </vue3-simple-typeahead>
    <h3 style="text-align:center; padding-top: 15px;">2) Flavor Name</h3>
    <v-text-field v-if="getCurrentSelectedJuice==null" :label="flavor" :value="flavor" @input="updateFlavor" style="color: black; width: 100%; background-color: grey"></v-text-field>
    <v-text-field v-if="getCurrentSelectedJuice"  :label="getCurrentSelectedJuice.flavor" @input="updateFlavor" style="color: white; width: 100%; background-color: grey"></v-text-field>
    <h3 style="padding-top:15px; text-align:center;">3) Store Locations</h3>
        <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          md="4"
        >

          <v-checkbox
          v-if="getCurrentSelectedJuice==null"
            v-model="selectYork"
            label="York"
            color="red"
            value="York"
            hide-details
          ></v-checkbox>
          <v-checkbox
          v-if="getCurrentSelectedJuice!=null"
            v-model="getCurrentSelectedJuice.YORK"
            label="York"
            color="red"
            value="TRUE"
            hide-details
          ></v-checkbox>
            <v-checkbox
            v-if="getCurrentSelectedJuice==null"
            v-model="selectLemoyne"
            label="Lemoyne"
            color="red"
            value="York"
            hide-details
          ></v-checkbox>
          <v-checkbox
          v-if="getCurrentSelectedJuice!=null"
            v-model="getCurrentSelectedJuice.LEMOYNE"
            label="Lemoyne"
            color="red"
            value="TRUE"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          md="4"
        >
            <v-checkbox
            v-if="getCurrentSelectedJuice==null"
            v-model="selectGettysburg"
            label="Gettysburg"
            color="red"
            value="York"
            hide-details
          ></v-checkbox>
          <v-checkbox
          v-if="getCurrentSelectedJuice!=null"
            v-model="getCurrentSelectedJuice.GETTYSBURG"
            label="Gettysburg"
            color="red"
            value="TRUE"
            hide-details
          ></v-checkbox>
            <v-checkbox
            v-if="getCurrentSelectedJuice==null"
            v-model="selectGettysburg"
            label="Frederick"
            color="red"
            value="York"
            hide-details
          ></v-checkbox>
          <v-checkbox
          v-if="getCurrentSelectedJuice!=null"
            v-model="getCurrentSelectedJuice.FREDERICK"
            label="Frederick"
            color="red"
            value="TRUE"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>  
    <v-btn
    v-if="getCurrentSelectedJuice==null"
  color="grey"
  elevation="2"
  style="width: 100%; margin-top: 15px; "
>Add Juice</v-btn>      
    <v-btn
    v-if="getCurrentSelectedJuice!=null"
  color="grey"
  @click="goBack()"
  elevation="2"
  style="width: 32%; margin-top: 15px; margin-right:1.3%"
>Go Back</v-btn>
    <v-btn
    v-if="getCurrentSelectedJuice!=null"
  elevation="2"
  color="error"
  style="width: 32%; margin-top: 15px; margin-right:1.333%"
>Delete Juice</v-btn>
    <v-btn
    v-if="getCurrentSelectedJuice!=null"
  color="success"
  elevation="2"
  style="width: 33.333%; margin-top: 15px; "
>Update Juice</v-btn>
  </form>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'juice-form',
  components: {
  },
  props: {
    getBrands: Array,
  },
  data() {
    return {
      selectYork : 'York',
      selectLemoyne: false,
      selectGettysburg: false,
      selectFrederick: false,
      selectedBrand: '',
      selectedFlavor: '',
      setFlavor: '',
      setBrand: '',
      brandInfo: '',
      flavorInfo: ''
    }
  },
  methods: {
    updateBrand (e) {
      this.brandInfo = e.target.value;
      console.log(this.brandInfo)
    },
    updateFlavor (e) {
      this.flavorInfo = e.target.value;
    },
    goBack() {
      this.$store.commit('SET_CURRENT_ID', null)
    }
  },
  computed: {
    ...mapGetters(['getJuiceByIndex']),
      ...mapState({
    brand: state => state.brandInput,
    flavor: state => state.flavorInput,
  }),
      removeKey: function() {
          var brands = [];
          Object.entries(this.brands).forEach(([key, value]) => {
              console.log(key)
              brands.push(value.brand)
          });
          return brands;
      },
      getCurrentSelectedJuice: function() {
        var juice = this.getJuiceByIndex
        if(juice){
          console.log(juice)
          return juice
        }
        return null
      }
  }
}
</script>

<style scoped lang="scss">
.simple-typeahead > input[data-v-04d98098]{
  width: 100%;
}
.simple-typeahead {
  width: 100%;
}
#brand_entry {
  width: 200px;
}
div#brand_entry_wrapper.simple-typeahead {
  width: 100%;
}
input#brand_entry.simple-typeahead-input{
  background-color: red;
  width: 100%;
}
</style>
