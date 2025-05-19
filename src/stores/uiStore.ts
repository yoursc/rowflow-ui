import {defineStore} from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isDarkMode: false,
    sidebarCollapsed: false,
  }),
  actions: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light')
    }
  }
})
