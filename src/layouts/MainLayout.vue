<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <bottom-navigation :tabs="tabs"/>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import BottomNavigation from 'components/BottomNavigation.vue'
import { tabs } from 'src/constants/fakeDataGenerator'
</script>
