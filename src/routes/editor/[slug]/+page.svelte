<script lang="ts">
  import type { Post } from "$lib/db/schema";
  import Editor from "../editor.svelte";
  export let data: Post;
</script>

<Editor article={data} />
