<script>
    export let data;
    export let count;
    let articles = data.articles.slice(0,count);
</script>

<div class="article-list-main">
    {#each articles as article}
        <a href={`/posts/${article.key}`}>
            <div class="blog-card">
                <img src={`https://picsum.photos/seed/${Math.floor(Math.random() * 1084)+1}/200`} alt="random"/>
                <h2>{article.title}</h2>
                <p>
                    {article.description}
                </p>
            </div>
        </a>
    {/each}
</div>

<style>
    .article-list-main{
        display:flex;
        gap:2ch;
        justify-content: space-evenly;
    }

    .blog-card{
        padding:2ch;
        border-radius: 3px;
        border:2px var(--yazirenk) solid;
    }
</style>