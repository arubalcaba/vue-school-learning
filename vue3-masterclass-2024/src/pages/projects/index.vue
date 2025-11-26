<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table';
import { RouterLink } from 'vue-router';
import { projectsQuery, type Projects } from '@/Utils/supabaseQueries';
import { columns } from '@/Utils/tableColumns/projectColumns';


usePageStore().pageData.title ='My Projects';
const projects = ref<Projects | null>(null)

const getProjects = async() => {
  const { data, error, status } = await projectsQuery
  if(error) {
      useErrorStore().setError({error, customCode: status})
  }
  projects.value = data

}

await getProjects()

</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Back to Home</RouterLink>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>

<style scoped>

</style>

