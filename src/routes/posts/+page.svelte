<script>
    export let data;
</script>

<div>
    {#each data.articles as article (article.slug)}
        <div class="blog-card">
            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084)+1}/200`} alt="random"/>
            <h2>{article.title}</h2>
            <p>
                {article.description}
            </p>
            <div>
                {article.body}
            </div>
        </div>
    {/each}
</div>