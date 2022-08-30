<template>
  <div
    ref="interactElement"
    :style="{
      transform: transformString,
      transition: transitionString,
      touchAction: 'none',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import interact from 'interactjs'
import { computed, onMounted, reactive, ref } from 'vue'

const INTERACT_ON_START = 'start'
const INTERACT_ON_MOVE = 'move'
const INTERACT_ON_END = 'end'

const SWIPE_LEFT = 'swipe-left'
const SWIPE_RIGHT = 'swipe-right'
const SWIPE_TOP = 'swipe-top'
const SWIPE_BOTTOM = 'swipe-bottom'

const props = defineProps({
  transition: {
    type: String,
    default: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.4, 1.2)',
    required: false
  },
  maxRotation: {
    type: Number,
    default: 15,
    required: false
  },
  outOfSightXOffset: {
    type: Number,
    default: 500,
    required: false
  },
  outOfSightYOffset: {
    type: Number,
    default: 500,
    required: false
  },
  thresholdX: {
    type: Number,
    default: 50,
    required: false
  },
  thresholdY: {
    type: Number,
    default: 70,
    required: false
  }
})
const emit = defineEmits<{(e: string, action: string): void }>()
defineExpose({
  leftSwipeAction,
  rightSwipeAction
})
const interactElement = ref<HTMLDivElement>()
const isDragging = ref(true)
const interactPosition = reactive({
  x: 0,
  y: 0,
  rotation: 0
})
const transformString = computed(() => {
  const { x, y, rotation } = interactPosition
  return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`
})

const transitionString = computed(() => {
  return !isDragging.value && props.transition
})
onMounted(() => {
  interact(interactElement.value!).draggable({
    onstart: () => {
      emit('onSwipe', INTERACT_ON_START)
      isDragging.value = true
    },
    onmove: (event) => {
      emit('onSwipe', INTERACT_ON_MOVE)
      const { maxRotation, thresholdX } = props
      const x = interactPosition.x + event.dx
      const y = interactPosition.y + event.dy
      let rotation = maxRotation * (x / thresholdX)
      if (rotation > maxRotation) rotation = maxRotation
      else if (rotation < -maxRotation) rotation = -maxRotation
      setPosition({ x, y, rotation })
    },
    onend: () => {
      emit('onSwipe', INTERACT_ON_END)
      const { x, y } = interactPosition
      const { thresholdX, thresholdY } = props
      isDragging.value = false

      if (x > thresholdX) onThresholdReached(SWIPE_RIGHT)
      else if (x < -thresholdX) onThresholdReached(SWIPE_LEFT)
      else if (y < -thresholdY) onThresholdReached(SWIPE_TOP)
      else if (y > thresholdY) onThresholdReached(SWIPE_BOTTOM)
      else setPosition({ x: 0, y: 0, rotation: 0 })
    }
  })
})

function onThresholdReached (interaction: any) {
  const { outOfSightXOffset/* outOfSightYOffset */, maxRotation } = props
  // unsetInteractElement()
  switch (interaction) {
    case SWIPE_RIGHT:
      setPosition({
        x: outOfSightXOffset,
        rotation: maxRotation
      })
      emit('onSwipe', SWIPE_RIGHT)
      break
    case SWIPE_LEFT:
      setPosition({
        x: -outOfSightXOffset,
        rotation: -maxRotation
      })
      emit('onSwipe', SWIPE_LEFT)
      break
    case SWIPE_TOP:
      /*      setPosition({
        y: -outOfSightYOffset
      }) */
      emit('onSwipe', SWIPE_TOP)
      setPosition({
        y: 0,
        x: 0,
        rotation: 0
      })
      break

    case SWIPE_BOTTOM:
      /*      setPosition({
        y: outOfSightYOffset
      }) */
      emit('onSwipe', SWIPE_BOTTOM)
      setPosition({
        y: 0,
        x: 0,
        rotation: 0
      })
      break
  }
}
function setPosition (position: any) {
  const { x = 0, y = 0, rotation = 0 } = position
  interactPosition.x = x
  interactPosition.y = y
  interactPosition.rotation = rotation
}

function leftSwipeAction () {
  let count = -150
  const counting = setInterval(function () {
    if (count > -400) {
      count = count - 5
      setPosition({ x: count, y: 20, rotation: -10 })
    } else {
      clearInterval(counting)
      emit('onSwipe', SWIPE_LEFT)
      emit('onSwipe', INTERACT_ON_END)
    }
  }, 1)
}
function rightSwipeAction () {
  let count = 150
  const counting = setInterval(function () {
    if (count < 400) {
      count = count + 5
      setPosition({ x: count, y: 20, rotation: 10 })
    } else {
      clearInterval(counting)
      emit('onSwipe', SWIPE_RIGHT)
      emit('onSwipe', INTERACT_ON_END)
    }
  }, 1)
}
/* function unsetInteractElement () {
  interact(interactElement.value!).unset()
} */
</script>

<style scoped lang="scss">
</style>
