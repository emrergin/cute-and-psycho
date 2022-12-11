<script>
    export let data;
	// console.log(data);
    const blog = {...data,body:data.body.split("\r\n").filter(a=>a!=='')};
    // const blogs = data.articles.map(a=>({...a,body:((a.body.split(".").slice(0,8).join("."))+'.').split("\r\n").filter(a=>a!=='')}));
    // console.log(blogs);
</script>

<div class="blog-preview">
    <!-- {#each blogs as article (article.slug)} -->
        <!-- <div class="blog-preview"> -->
            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084)+1}/200`} alt="random"/>
            <h2>{blog.title}</h2>
            <h4>
                {blog.description}
            </h4>
            <div>
                {#each blog.body as paragraph}
                <p>{paragraph}</p> 
                {/each}
            </div>
            <!-- <a href={`/posts/${blog.key}`}>Devamını oku.</a> -->
        <!-- </div> -->
    <!-- {/each} -->
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
</style>