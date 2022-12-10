<script>
    export let data;
</script>
<!-- ${Math.floor(Math.random() * 1084)+1} -->
<div class="article-list-main">
    {#each data.articles as article}
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
        /* border-radius: 18px;
        background: #fadcd6;
        box-shadow:  15px 15px 30px #e6cac5,
                    -15px -15px 30px #ffeee7; */
    }
</style>