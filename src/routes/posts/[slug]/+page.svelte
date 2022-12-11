<script>
    export let data;
    import { marked } from 'marked';
    $: markup = marked(data.body);
</script>

<div class="blog-preview">
    {#if data.image}
        <img src={data.image} alt="Makalenin resmi."/> 
    {:else}         
        <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084)+1}/500`} alt="Güzel bir resim."/>
    {/if}
    
    <h2>{data.title}</h2>
    <h3>
        {data.description}
    </h3>
    <div>
        {@html markup}
    </div>
</div>

<style>
    .blog-preview{
        padding:3ch;
        max-width:80ch;
        background-color: rgb(255, 252, 249);
        color: #615d5d;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        line-height:1.75em;
        font-size:1.12em;
    }

    img{
        margin-top:4ch;
        margin-inline:auto;
        display:block;
        max-width:95%;
    }
</style>