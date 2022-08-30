<template>
<div class="bg-fourtiary shadow-xl  flex items-center justify-between">
  <div class=" flex items-center justify-center p-1 relative-position"
       :class="`w-1/${tabs.length}`"  v-for="tab in tabs" :key="tab.id"
       v-ripple
        @click="onTabClick(tab.title)">
    <q-icon size="sm"  :name="tab.icon" :class="(router.currentRoute.value.name === tab.title)? 'text-primary':'text-accent'"/>
    <div class="text-xs  w-full text-center" :class="(router.currentRoute.value.name===tab.title)?'text-primary':'text-accent'">{{t(tab.title)}}</div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ITab, TabTitle } from 'src/constants/models/ITab'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({})
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps({
  tabs: {
    type: Array as ()=> ITab[],
    required: true
  }
})

const emit = defineEmits<{(e: string, tabTitle: string): void }>()
function onTabClick (tabTitle: TabTitle) {
  emit('onSelect', tabTitle)
}

</script>

<style scoped>

</style>
