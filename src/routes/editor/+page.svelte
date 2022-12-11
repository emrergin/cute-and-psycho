<script>
	import Editor from './editor.svelte';
	export let form;
</script>

<Editor
	article={{
		title: '',
		description: '',
		body: '',
		image: '',
		tagList: []
	}}
	errors={form?.errors}
/>
