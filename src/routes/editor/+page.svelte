<script>
	import Editor from './editor.svelte';
	export let form;
</script>

<Editor
	article={{
		title: '',
		description: '',
		body: '',
		tagList: []
	}}
	errors={form?.errors}
/>
