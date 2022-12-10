<script>
	import Editor from '../editor.svelte';
	export let data;
	export let form;
	// console.log(data)
</script>

<Editor article={data} errors={form?.errors} />