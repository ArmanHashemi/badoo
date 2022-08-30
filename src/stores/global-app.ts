import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    theme_mode: LocalStorage.getItem('theme') || 'light'
  }),
  getters: {

  },
  actions: {

  }
})
