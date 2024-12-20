<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{name: '/projects/[id]', params: {'id': 77}}">Go to Project 77</RouterLink>
  </div>
</template>

<style scoped>

</style>
