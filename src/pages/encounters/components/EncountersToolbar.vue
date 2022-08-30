<template>
  <div class="bg-fourtiary flex items-center justify-between p-2">
    <div class="flex-1 flex items-center justify-start">
    </div>
    <img :src="badooImage" class="w-8 h-8">
    <div class="flex-1 flex items-center justify-end">
      <q-icon size="sm" color="accent" class="mx-4" name="fa fa-filter"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { badooImage } from 'src/constants/images'
</script>

<style scoped>

</style>
