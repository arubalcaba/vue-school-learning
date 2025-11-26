<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'


useErrorStore().setError({ error: 'A la Chingada', customCode: 404 });
</script>

<template>
  <AppErrorPage />
</template>

<style scoped>

</style>