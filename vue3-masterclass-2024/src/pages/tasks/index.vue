<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table';
import { RouterLink } from 'vue-router';
import type { QueryData } from '@supabase/supabase-js';
import { tasksWithProjectQuery, type TasksWithProjects } from '@/Utils/supabaseQueries';
import { columns } from '@/Utils/tableColumns/taskColumns';

usePageStore().pageData.title ='My Task';

const tasks = ref<TasksWithProjects | null>(null)

const getTasks = async() => {
  const { data, error } = await tasksWithProjectQuery
  console.log('data', data)
  if(error) {
    console.error('error', error)
  }
  tasks.value = data

}

await getTasks()


</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped>

</style>
