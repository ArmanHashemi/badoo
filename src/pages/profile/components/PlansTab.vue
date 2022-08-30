<template>
<div class="flex">
  <div class="w-full flex justify-between">
    <div class="w-full p-2 sm:w-1/2 md:w-2/5">
      <div class="bg-fourtiary rounded-2xl flex px-8 p-2 items-center justify-center relative-position" v-ripple>
        <q-icon name="fa fa-gauge" size="md" color="accent"/>
        <div class="flex-1 flex">
          <div class="w-full text-center text-secondary">{{t('activity')}}</div>
          <div class="w-full text-center text-accent text-xl">{{t('low')}}</div>
        </div>
      </div>

    </div>
    <div class="w-full p-2 sm:w-1/2 md:w-2/5">
      <div class="bg-fourtiary rounded-2xl flex px-8 p-2 items-center justify-center relative-position" v-ripple>
        <q-icon name="fa fa-square-plus" size="md" color="accent" class=""/>
        <div class="flex-1 flex">
          <div class="w-full text-center text-secondary">{{t('credit')}}</div>
          <div class="w-full text-center text-accent text-xl">{{t('add')}}</div>
        </div>
      </div>

    </div>
  </div>
  <div class="w-full mt-4">
    <swiper
      :slides-per-view="1.2"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class=" flex  bg-gradient-to-tr from-purple-800 via-violet-900 to-purple-800 justify-center rounded-2xl p-4 pb-8">
          <div class="mt-2 w-full text-amber-200 text-center text-2xl text-bold">{{t('premium.title')}}</div>
          <div class="mt-2 w-full text-amber-200 text-center">{{t('premium.description')}}</div>
          <q-chip :label="t('premium.price')" clickable color="amber-2" class="mt-8"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class=" flex  bg-gradient-to-tr from-purple-800 via-violet-900 to-purple-800 justify-center rounded-2xl p-4 pb-8">
          <div class="mt-2 w-full text-amber-200 text-center text-2xl text-bold">{{t('premium.title')}}</div>
          <div class="mt-2 w-full text-amber-200 text-center">{{t('premium.description')}}</div>
          <q-chip :label="t('premium.price')" clickable color="amber-2" class="mt-8"/>
        </div>
      </swiper-slide>

    </swiper>
  </div>

</div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { useI18n } from 'vue-i18n'
const { t } = useI18n({})

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped>

</style>
