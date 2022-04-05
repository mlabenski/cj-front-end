//import the createStore object from Vuex
import { createStore } from 'vuex'

// Import axios to make HTTP requests
import axios from "axios"
export default createStore({
    state() {
        return {
            juices : [],
            currentID: null,
            brandInput: null,
            flavorInput: null
        }
    },
    getters: {
        getJuices: (state) => state.juices,

        getBrands(state) {
            var brandNames = []
            state.juices.forEach(function(juiceObject) {
                brandNames.push(juiceObject.brand)
            })
            //remove duplicate brand names
            return brandNames.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
        },
        getJuiceByIndex(state) {
            if(state.currentID){
                let oneJuice = state.juices.find(o => o.juiceID === state.currentID)
                console.log(oneJuice)
                return oneJuice
            }
            console.log('nothing to return because no juice is selected')
            return null
        }
    },
    actions: {
        async fetchJuices({ commit }) {
            try {
                console.log('do  ueven get here')
                const data = await axios.get('data.json')
                console.log(data.data);
                commit('SET_JUICES', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_BRAND_INPUT(state, brand) {
            state.brandInput = brand
        },
        SET_FLAVOR_INPUT(state, flavor) {
            state.flavorInput = flavor
        },
        SET_JUICES(state, juices) {
            state.juices = juices
        },
        SET_CURRENT_ID(state, id) {
            state.currentID = id
        }
    }
})
/** we have just created a boiler plate for our vuex store module**/