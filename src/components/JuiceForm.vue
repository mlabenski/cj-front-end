<template>
  <form>
    <h1 style="text-align:center;">Add Juices</h1>
    <h3 style="text-align:center;">1) Brand Name</h3>
    <vue3-simple-typeahead style="background-color: grey"
    id="brand_entry"
    placeholder="Enter a brand..."
    :items="removeKey"
    :minInputLength="1"
    :itemProjection="itemProjectionFunction"
    @selectItem="selectItemEventHandler"
	@onInput="onInputEventHandler"
	@onFocus="onFocusEventHandler"
	@onBlur="onBlurEventHandler"
    ></vue3-simple-typeahead>

    <label for="review">Flavor:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Stores:</label>
    <select id="store" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">  
  </form>
</template>

<script>
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' 
export default {
  name: 'juice-form',
  components: {
  },
  props: {
    brands: Array,
  },
  data() {
    return {
    }
  },
  methods: {

  },
  computed: {
      removeKey: function() {
          var brands = [];
          Object.entries(this.brands).forEach(([key, value]) => {
              console.log(key)
              brands.push(value.brand)
          });
          return brands;
      }
  }
}
</script>

<style scoped lang="scss">
</style>
