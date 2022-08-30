<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-fourtiary">
      <bottom-navigation :tabs="tabs" @onSelect="onSelectedTab"/>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import BottomNavigation from 'components/BottomNavigation.vue'
import { tabs } from 'src/constants/fakeDataGenerator'
import { useRouter } from 'vue-router'
import { TabTitle } from 'src/constants/models/ITab'
import { useGlobalStore } from 'stores/global-app'
import { setCssVar, useQuasar } from 'quasar'
import { onMounted } from 'vue'
import { loadTheme } from 'boot/config'

const router = useRouter()
function onSelectedTab (tabTitle: TabTitle) {
  router.push({ name: tabTitle })
}

onMounted(() => {
  loadTheme()
})
</script>

<style scoped lang="scss">
body {
  background: var(--q-tertiary);
}
</style>
