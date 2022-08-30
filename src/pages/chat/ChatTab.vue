<template>
<q-page>
  <chat-toolbar />
  <div class="flex bg-fourtiary">
    <div class="w-full">
      <matches-component />
    </div>
    <div class="w-full mt-4">
      <q-tabs
        v-model="tab"
        dense
        class="text-accent"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="messages" :label="t('messages')"/>
        <q-tab name="activity" :label="t('activities')"/>
      </q-tabs>
    </div>
  </div>
  <q-tab-panels v-model="tab" animated class=" bg-tertiary">
    <q-tab-panel name="messages">
      <messages-tab />
    </q-tab-panel>

    <q-tab-panel name="activity">
      <activity-tab />
    </q-tab-panel>
  </q-tab-panels>
</q-page>
</template>

<script lang="ts" setup>
import ChatToolbar from 'pages/chat/components/ChatToolbar.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import MessagesTab from 'pages/chat/components/MessagesTab.vue'
import ActivityTab from 'pages/chat/components/ActivityTab.vue'
import MatchesComponent from 'pages/chat/components/MatchesComponent.vue'

const { t } = useI18n({})

const tab = ref('messages')
</script>

<style scoped>

</style>
