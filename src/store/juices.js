// stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useJuiceStore = defineStore("juiceStore",{
    id: "juiceStore",
    state: () => ({
        juices: []
    }),
    getters: {
        getJuices(state) {
            return state.juices
        }
    },
    actions: {
        async fetchJuices() {
            try {
                const data = await axios.get('http://192.168.1.206:5000/juices/test/tits')
                this.juices = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})