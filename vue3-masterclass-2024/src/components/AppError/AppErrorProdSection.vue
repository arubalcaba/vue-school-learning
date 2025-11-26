<script setup lang="ts">
const props = defineProps<{
    customCode?: number;
    message: string;
    statusCode?: number;
	isCustomError?: boolean;
}>();

const error = ref({
    code: 500,
    msg: 'A la Chingada, something went wrong but don\'t freak out'
})

if(props.isCustomError) {
	error.value.code = props.customCode || 500
	error.value.msg = props.message
}

if(props.statusCode === 406){
	error.value.code = 404
	error.value.msg = 'The resource you are looking for could not be found.'
}



</script>



<template>
    <div>
			<img src="@/assets/images/danny.png" alt="Error" class="error__icon" />
			<h1 class="error__code">{{ error.code }}</h1>
			<p class="error__msg">{{ error.msg }}</p>
			<div class="error-footer">
				<p class="error-footer__text">You'll find lots to explore on the home page.</p>
				<RouterLink to="/">
					<Button class="max-w-36"> Back to homepage </Button>
				</RouterLink>
			</div>
		</div>
</template>