<script>
    export let data;
    import { enhance } from '$app/forms';
</script>
<a href="/editor" class="button">Yeni Makale</a>
<div class="article-list-main">
        {#each data.articles as article}            
                <div class="blog-row">
                    <a href={`/editor/${article.key}`}><h2>{article.title}</h2></a>
                    <form
                        action="?/delete"
                        method="POST"
                        use:enhance
                    >
                        <input type="hidden" name="id" value={article.key}>
                        <button>sil!</button>
                  </form>
                </div>
        {/each}
</div>

<style>
    .article-list-main{
        display:flex;
        flex-direction: column;
        width:100%;
        align-items: stretch;
        margin-bottom: auto;
    }

    .blog-row{
        padding:3ch;
    }

    /* .article-list-main:last-child{
        margin-bottom: auto;
    } */

    a.button {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        /* color: initial; */
    }
</style>