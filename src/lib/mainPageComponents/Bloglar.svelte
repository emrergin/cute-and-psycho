<script lang="ts">
  import type { Post } from "$lib/db/schema";
  export let data: Post[];
  import ArticleList from "./Articlelist.svelte";
</script>

<div class="bloglar">
  <div class="susluyazi hugetext maintitle" id="bloglar">Blog Yazıları</div>
  <ArticleList {data} count={3} />
</div>

<style>
  .bloglar {
    padding: 5vw;
  }
</style>
