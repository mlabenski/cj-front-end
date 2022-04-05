<template>
    <div>
        <vue-good-table
        class="colorMe"
        :columns="columns"
        :rows="getJuices"
        theme="nocturnal"
        v-on:row-click="onCellClick"
        :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 13
        }"
        />
    </div>
</template>

<script>

import { VueGoodTable } from 'vue-good-table-next';
import { mapMutations } from 'vuex'
export default {
  name: 'employee-table',
  components: {
      VueGoodTable
  },
  props: {
    getJuices: Array,
  },
  data() {
    return {
      columns: [
          {
              label: 'Brand',
              field: 'brand'
          },
          {
              label: 'Flavor',
              field: 'flavor'
          },
          {
              label: 'York',
              field: 'YORK',
              formatFn: this.formatFn,
          },
          {
              label: 'Lem',
              field: 'LEMOYNE',
              formatFn: this.formatFn,
          },
          {
              label: 'Gett',
              field: 'GETTYSBURG',
              formatFn: this.formatFn,
          },
          {
              label: 'Fred',
              field: 'FREDERICK',
              formatFn: this.formatFn,
          }                    
      ]
    }
  },
  methods: {
      ...mapMutations(['SET_CURRENT_ID']),
      formatFn: function(value){
          if(value=='TRUE'){
              return 'yes'
          }
          else if(value=='FALSE'){
              return 'no'
          }
      },
  onCellClick(params) {
      this.SET_CURRENT_ID(params.row.juiceID)

  }


  }
}
</script>

<style scoped lang="scss">
.colorMe {
    color: #F7F7FF;
}
</style>
