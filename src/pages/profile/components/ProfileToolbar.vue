<template>
  <div class="bg-fourtiary flex items-center justify-between p-2">
    <div class="flex-1 flex items-center justify-start">
      <q-icon size="sm" color="accent" class="mx-4" name="fa fa-gear"/>
    </div>
    <img :src="badooImage" class="w-8 h-8">
    <div class="flex-1 flex items-center justify-end">
      <q-icon @click="changeTheme" size="sm"
              color="accent"
              :name="(store.theme_mode==='dark')? 'light_mode':'dark_mode'"/>
      <q-icon size="sm" class="mx-4" name="fa fa-user-pen" color="accent"/>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { badooImage } from 'src/constants/images'
import { useGlobalStore } from 'stores/global-app'
import { changeTheme } from 'boot/config'

const store = useGlobalStore()
</script>

<style scoped>

</style>
