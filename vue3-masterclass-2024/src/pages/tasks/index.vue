<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

const getTasks = async() => {
  const { data, error } = await supabase.from('tasks').select('*')
  if(error) {
    console.error('error', error)
  }
  tasks.value = data

}

;(async() => {
  await getTasks()
})()

</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink to="/">Back to Home</RouterLink>
   <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}

    </li>
   </ul>
  </div>
</template>

<style scoped>

</style>
