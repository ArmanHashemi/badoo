<template>
<div class="bg-white shadow-xl  flex items-center justify-between">
  <div class="flex items-center justify-center p-1 relative-position"
       :class="`w-1/${tabs.length}`"  v-for="tab in tabs" :key="tab.id"
       v-ripple
        @click="selectedTab = tab.id">
    <q-icon size="sm" :name="tab.icon" :class="(selectedTab===tab.id)? 'text-black':'text-gray-500'"/>
    <div class="text-gray-500 text-xs  w-full text-center" :class="(selectedTab===tab.id)?'text-gray-500':'text-black'">{{t(tab.title)}}</div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ITab } from 'src/constants/models/ITab'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n({})

defineProps({
  tabs: {
    type: Array as ()=> ITab[],
    required: true
  }
})

const selectedTab = ref(1)

</script>

<style scoped>

</style>
