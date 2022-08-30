<template>
<q-page>
  <profile-toolbar />
  <div class="bg-fourtiary flex p-4 pt-8 text-accent">
    <img :src="badooImage" class="w-32 h-32 rounded-full border">
    <div class="flex-1 flex items-center content-center p-4">
      <div class="p-2 w-full text-xl text-bold">arman</div>
      <div class="px-2 py-1 w-full rounded-2xl bg-tertiary">ready for relationship</div>
    </div>
  </div>
</q-page>
</template>

<script lang="ts" setup>
import ProfileToolbar from 'pages/profile/components/ProfileToolbar.vue'
import { badooImage } from 'src/constants/images'

</script>

<style scoped lang="scss">
.border {
  border: 4px solid var(--q-primary);
}
</style>
