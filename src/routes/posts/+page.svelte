<script>
    export let data;
    import { marked } from 'marked';
    
    const blogs = data.articles.map(a=>({...a,body:marked(a.body.match( /[^\.!\?]+[\.!\?]+/g ).slice(0,8).join("").trim())}));

</script>

<div>
    {#each blogs as article (article.key)}
        <div class="blog-preview">
            {#if article.image}
                <img src={article.image} alt="Makalenin resmi."/> 
            {:else}
                <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084)+1}/200`} alt="Güzel bir resim."/>            
            {/if}
            <a href={`/posts/${article.key}`} class="title-link"><h2>{article.title}</h2></a>
            <h3>
                {article.description}
            </h3>
            <div>
                {@html article.body}
            </div>
            <a href={`/posts/${article.key}`}>Devamını oku.</a>
        </div>
    {/each}
</div>

<style>
    .blog-preview{
        padding:3ch;
        padding-top:8ch;
        max-width:80ch;
        background-color: rgb(255, 252, 249);
        color: #615d5d;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        line-height:1.75em;
        font-size:1.12em;
    }
    .title-link{
        text-decoration: none;
    }

    img{
        float: left;   
        margin-right:2ch; 
        margin-bottom:1ch;
        max-width:35%;
        object-position: center;
        object-fit: cover;
        min-height:200px;
    }

    @media (max-width: 600px) {
        img{
            float: none;
            max-width:95%;   
        }
    }
</style>