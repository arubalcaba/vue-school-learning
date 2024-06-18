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
            <template #item.title="{ item }">
                <v-dialog fullscreen transition="dialog-bottom-transition">
                    <template v-slot:activator="{ props: activatorProps }">
                        <button v-bind="activatorProps" color="surface-variant"
                            variant="flat">{{ item.title }}</button>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card :title="item.title">
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </template>
        </v-data-table>
    </div>
</template>