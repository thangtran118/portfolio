<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'complete'): void
}>()

const percentage = ref(0)

// update the percentage every 1ms
const { pause, resume } = useIntervalFn(() => {
  percentage.value += 0.3
  if (percentage.value >= 100) {
    pause()
    useTimeoutFn(() => emit('complete'), 200)
  }
}, 1)

// watch the show prop, and reset the percentage when it's shown
watchEffect(() => {
  if (props.show) {
    percentage.value = 0
    resume()
  }
})
</script>

<template>
  <div
    v-show="props.show"
    class="size-full bg-black flex justify-center items-center z-50"
  >
    <div>
      <div class="size-20 sm:size-24">
        <icon name="mdi:apple" size="100%" color="white" />
      </div>
      <div class="mt-16 -mx-14">
        <div class="h-1 sm:h-1.5 bg-gray-500 rounded relative">
          <span
            class="absolute top-0 bg-white shadow-inner h-full rounded-sm"
            :style="{ width: `${percentage}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
