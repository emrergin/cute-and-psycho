<script>
    export let data;
    import ArticleList from './Articlelist.svelte';
</script>

<div class="bloglar">
    <div class="susluyazi hugetext maintitle" id="bloglar">
        Blog Yazıları
    </div>
    <ArticleList data={data} count={3}/>
</div>

<style>
    .bloglar{
        padding: 5vw;
    }
</style>