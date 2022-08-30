<template>
<q-page class="overflow-hidden">
  <encounters-toolbar/>
  <div class="relative-position">
    <stack-swipe  @onSwipe="onSwipe" v-for="card in stack" :key="card.id" ref="refs">
      <div class="flex items-center justify-center card"  :style="{background: card.color}" >
        <div class="w-full space-x-4 flex items-center justify-center">
          <q-icon class="border border-black rounded-full p-2" size="xl" name="fa fa-close" @click="leftAction(card.id - 1)"/>
          <q-icon class="border border-black rounded-full p-2" size="xl" name="fa fa-heart" @click="rightAction(card.id - 1)"/>
        </div>
      </div>
    </stack-swipe>
  </div>
</q-page>
</template>

<script lang="ts" setup>
import EncountersToolbar from 'pages/encounters/components/EncountersToolbar.vue'
import StackSwipe from 'pages/encounters/components/StackSwipe.vue'
import { onMounted, ref } from 'vue'
 interface card {
  id: number,
   color: string
 }
const stack = ref<card[]>([])
const refs = ref([])

function leftAction (dynamicRef: number) {
  // @ts-ignore
  refs.value.at(dynamicRef)!.leftSwipeAction()
  console.log(dynamicRef)
}
function rightAction (dynamicRef: number) {
  // @ts-ignore
  refs.value.at(dynamicRef)!.rightSwipeAction()
  console.log(dynamicRef)
}
function getRandomColor () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
function onSwipe (interaction: any) {
  console.log(interaction)
  if (interaction === 'swipe-right' || interaction === 'swipe-left') {
    setTimeout(() => {
      stack.value.unshift({
        id: Math.random(),
        color: getRandomColor()
      })
      stack.value.pop()
    }, 100)
  }
}
onMounted(() => {
  for (let i = 1; i < 10; i++) {
    stack.value.push({
      id: i,
      color: getRandomColor()
    })
  }
})

</script>

<style scoped lang="scss">
.card {
  margin: 10px;
  position: absolute;
  border-radius: 8px;
  width: 100%;
  width: -moz-available;          /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
  width: stretch;
  height: 500px;
}

</style>
