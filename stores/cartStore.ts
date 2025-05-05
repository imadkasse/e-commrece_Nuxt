import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    total :0 as number 
  }),

  actions:{
    editTotal(newTotal:number){
        this.total = newTotal
    }
  }
}) 