<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

const getProjects = async() => {
  const { data, error } = await supabase.from('projects').select('*')
  if(error) {
    console.error('error', error)
  }
  projects.value = data
  console.log('data', data)
}

;(async() => {
  await getProjects()
})()

</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Back to Home</RouterLink>
    {{ projects }}
  </div>
</template>

<style scoped>

</style>
