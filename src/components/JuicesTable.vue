<template>
    <div>
        <vue-good-table
        class="colorMe"
        :columns="columns"
        :rows="juices"
        theme="nocturnal"
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
export default {
  name: 'employee-table',
  components: {
      VueGoodTable
  },
  props: {
    juices: Array,
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
      formatFn: function(value){
          if(value=='TRUE'){
              return 'yes'
          }
          else if(value=='FALSE'){
              return 'no'
          }
      },
  }
}
</script>

<style scoped lang="scss">
.colorMe {
    color: #F7F7FF;
}
</style>
