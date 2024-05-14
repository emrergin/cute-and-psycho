<script>
  export let data;
  export let count;
  let articles = data.articles.slice(0, count);
</script>

<div class="article-list-main">
  {#each articles as article}
    <a href={`/posts/${article.id}`}>
      <div class="blog-card">
        {#if article.image}
          <img src={article.image} alt="Makalenin resmi." />
        {:else}
          <img
            src={`https://picsum.photos/seed/${
              Math.floor(Math.random() * 1084) + 1
            }/300`}
            alt="Güzel bir resim."
          />
        {/if}
        <h2>{article.title}</h2>
        <p>
          {article.description}
        </p>
      </div>
    </a>
  {/each}
</div>

<style>
  a {
    text-decoration: none;
    width: 30%;
  }

  .article-list-main {
    display: flex;
    gap: 2ch;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .blog-card {
    padding: 2ch;
    border-radius: 3px;
    background-color: rgb(255, 252, 249);
  }

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 600px) {
    a {
      width: 90%;
    }
  }
</style>
