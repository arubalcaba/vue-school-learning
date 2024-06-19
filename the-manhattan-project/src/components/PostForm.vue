<script setup lang="ts">
import { ref } from 'vue'
import { isEmpty } from 'lodash'

const emit = defineEmits(['submit'])

const props = defineProps<{
    post: Record<string, any>;
}>();

const form = ref({
    title: '',
    tags: [],
    published: null,
    body: '',
    image: [],
    ...props.post,
})

const valid = ref(true)

function handleSubmit(){
    if(!valid.value){
        return
    }
    console.log("submitting",form.value)
    emit('submit');
}

function isRequired(value: string) {
    return !isEmpty(value) ? true : "This field is required";
}

function isNotEmpty(value: string[]) {
    return !isEmpty(value) ? true : "This field is required";
}

async function asyncValidation(value: string){
    const res = await fetch(`https://httpbin.org/status/${value}`)
    if(res.ok){
        return true
    }
    return "Bad HTTP Response Code"
}

const submitBtn = ref();
const submit = () => submitBtn.value.click();

defineExpose({
    submit
})
</script>
<template>
    <v-form v-model="valid" @submit.prevent="handleSubmit" ref="formEl">
        <v-row>
            <v-col cols="3">
                <v-switch label="Published" v-model="form.published"></v-switch>
            </v-col>
            <v-col cols="3">
                <v-checkbox indeterminate v-model="form.published" label="Published">
                </v-checkbox>
            </v-col>
        </v-row>

        <v-text-field
        v-model="form.title"
        :rules="[isRequired]"
        label="Title">
        </v-text-field>
        <v-combobox
            v-model="form.tags"
            :items="['News', 'Tutorial', 'Event']"
            label="Tags"
            :rules="[isNotEmpty]"
            multiple
            chips
        >
        </v-combobox>
        <v-file-input
        accept="image/*"
        placeholder="Upload a Feature Image"
        prepend-icon="mdi-image"
        label="Feature Image"
        v-model="form.image"
        ></v-file-input>
        <v-textarea label="Post Body" v-model="form.body"></v-textarea>

        for is valid? {{ valid }}

        <button ref="submitBtn" type="submit" class="d-none">Submit</button>

    </v-form>
</template>