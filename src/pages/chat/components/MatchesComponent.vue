<template>
<div class="px-4 flex">
  <div class="w-full text-accent text-xl text-bold">{{ t('matches') }}</div>
  <div class="w-full mt-4">
    <swiper
      :slides-per-view="9"
      :space-between="5"
    >
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center items-center w-20">
          <div class="w-full flex items-center justify-center">
            <img :src="badooImage" class="w-20 h-20 rounded-full border">
          </div>
          <div class="w-full text-center text-accent">arman</div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</div>
</template>

<script lang="ts" setup>
import { badooImage } from 'src/constants/images'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const { t } = useI18n({})
</script>

<style scoped>

</style>
