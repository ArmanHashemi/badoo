import { useGlobalStore } from 'stores/global-app'
import { setCssVar, LocalStorage } from 'quasar'

const store = useGlobalStore()
function changeTheme () {
  if (LocalStorage.getItem('theme') === 'dark') {
    setCssVar('primary', '#6e3eff')
    setCssVar('secondary', '#000051')
    setCssVar('accent', '#212020')
    setCssVar('tertiary', '#E7E7E7')
    setCssVar('fourtiary', '#F7F7F7')
    store.theme_mode = 'light'
    LocalStorage.set('theme', 'light')
  } else {
    setCssVar('primary', '#6e3eff')
    setCssVar('secondary', '#F7F7F7')
    setCssVar('accent', '#E7E7E7')
    setCssVar('tertiary', '#7E7E7E')
    setCssVar('fourtiary', '#444444')
    store.theme_mode = 'dark'
    LocalStorage.set('theme', 'dark')
  }
}
function loadTheme () {
  if (LocalStorage.getItem('theme') === 'dark') {
    setCssVar('primary', '#6e3eff')
    setCssVar('secondary', '#F7F7F7')
    setCssVar('accent', '#E7E7E7')
    setCssVar('tertiary', '#7E7E7E')
    setCssVar('fourtiary', '#444444')
  } else {
    setCssVar('primary', '#6e3eff')
    setCssVar('secondary', '#000051')
    setCssVar('accent', '#212020')
    setCssVar('tertiary', '#E7E7E7')
    setCssVar('fourtiary', '#F7F7F7')
  }
}

export { changeTheme, loadTheme }
