<script setup lang="ts">
import TopNavBar from '@/components/Layout/TopNavBar.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavBar />

    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">Page Title</h1>
      </div>
     <slot></slot>
    </main>
  </div>
</template>