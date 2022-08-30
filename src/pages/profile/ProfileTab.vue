<template>
  <q-page class="flex flex-col">
    <div class="">
      <profile-toolbar/>
      <div class="bg-fourtiary flex px-4 pt-8 text-accent">
        <img :src="badooImage" class="w-32 h-32 rounded-full border">
        <div class="flex-1 flex items-center content-center p-4">
          <div class="p-2 w-full text-xl text-bold">arman</div>
          <div class="px-2 py-1 w-full rounded-2xl bg-tertiary">ready for relationship</div>
        </div>
        <div class="w-full mt-2">
          <q-tabs
            v-model="tab"
            dense
            class="text-accent"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="plans" :label="t('plans')"/>
            <q-tab name="safety" :label="t('safety')"/>
          </q-tabs>
        </div>
      </div>
    </div>
<!--  todo make scrollable  -->
    <q-scroll-area class="flex-1">
      <q-tab-panels v-model="tab" animated class=" bg-tertiary">
        <q-tab-panel name="plans">
          <plans-tab/>
        </q-tab-panel>

        <q-tab-panel name="safety">
          <safety-tab/>
        </q-tab-panel>
      </q-tab-panels>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts" setup>
import ProfileToolbar from 'pages/profile/components/ProfileToolbar.vue'
import { badooImage } from 'src/constants/images'
import { ref } from 'vue'
import PlansTab from 'pages/profile/components/PlansTab.vue'
import SafetyTab from 'pages/profile/components/SafetyTab.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({})

const tab = ref('plans')
</script>

<style scoped lang="scss">
.border {
  border: 4px solid var(--q-primary);
}
</style>
