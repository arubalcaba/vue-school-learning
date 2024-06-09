<script lang="ts" setup>
import { ref } from 'vue'
const posts = ref([
    { id: 1, title: 'Post 1', author: 'John Doe' },
    { id: 2, title: 'Post 2', author: 'Juan Doe' },
    { id: 3, title: 'Post 3', author: 'Jane Doe' },
    { id: 4, title: 'Post 4', author: 'SanJui Doe' },

])
const selected = ref([])
const search = ref('')
</script>
<template>
    <div>
        <h1>Post</h1>
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line></v-text-field>
        <v-data-table :items="posts" show-select v-model="selected" :search="search">

        </v-data-table>
    </div>
</template>