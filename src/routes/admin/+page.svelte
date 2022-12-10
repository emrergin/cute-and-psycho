<script>
    export let data;
</script>

<div class="article-list-main">
        {#each data.articles as article}            
                <div class="blog-row">
                    <a href={`/editor/${article.key}`}><h2>{article.title}</h2></a>
                </div>
        {/each}
</div>