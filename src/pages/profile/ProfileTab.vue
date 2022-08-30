<template>
<q-page>
  <profile-toolbar />
  <div class="bg-white flex p-4 pt-8">
    <img :src="badooImage" class="w-32 h-32 rounded-full border">
    <div class="flex-1 flex items-center content-center p-4">
      <div class="p-2 w-full text-xl text-bold">arman</div>
      <div class="px-2 py-1 w-full rounded-2xl bg-gray-300">ready for relationship</div>
    </div>
  </div>
</q-page>
</template>

<script lang="ts" setup>
import ProfileToolbar from 'pages/profile/components/ProfileToolbar.vue'
import { badooImage } from 'src/constants/images'

</script>

<style scoped>
.border {
  border: 4px solid #6355f3;
}
</style>
