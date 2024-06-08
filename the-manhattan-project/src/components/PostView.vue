<script lang="ts" setup>
import { ref } from 'vue'
const posts = ref([
    {id: 1,title: 'Post 1', author: 'John Doe'},
    {id: 2,title: 'Post 2', author: 'Juan Doe'},
    {id: 3,title: 'Post 3', author: 'Jane Doe'},
    {id: 4,title: 'Post 4', author: 'SanJui Doe'},

])
</script>
<template>
    <div>
        <h1>Post</h1>
        <v-table
        :height="300" :fixed-header="true" :hover="true"
        >
            <thead>
                <tr>
                    <th class="text-left">
                        Title
                    </th>
                    <th class="text-left">
                        Author
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.title }}</td>
                    <td>{{ post.author }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>