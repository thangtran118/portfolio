<script setup lang="ts">
import { useCurrentPageState } from '~/composables/page'

const currentPage = useCurrentPageState()
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <PBootLoader
      :show="currentPage === 'bootloader'"
      @complete="currentPage = 'login';"
    />
  </div>
</template>
