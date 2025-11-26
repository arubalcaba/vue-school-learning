<script setup lang="ts">

const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error, customCode: 500 });
  return false; // prevent further propagation
});

</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />
    <RouterView v-else v-slot="{ Component, route }">
    <Suspense  v-if="Component">
      <Component :is="Component" :key="route.name"></Component>
      <template #fallback>
        <span>Loading...</span>
      </template>

    </Suspense>
    </RouterView>
  </AuthLayout>
</template>