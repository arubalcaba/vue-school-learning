<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Single Project View - {{ route.params?.slug }}</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
  </div>
</template>

<style scoped>

</style>
