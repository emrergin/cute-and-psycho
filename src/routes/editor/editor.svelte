<script lang="ts">
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { enhance } from "$app/forms";
  import type { Article } from "./proxy+page.server";
  export let article: Article;

  function handleTag(
    e: KeyboardEvent & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.currentTarget) {
        if (!article.tagList.includes(e.currentTarget.value)) {
          article.tagList = [...article.tagList, e.currentTarget.value];
        }
        e.currentTarget.value = "";
      }
    }
  }
</script>

<div class="editor-container">
  <form use:enhance method="POST">
    <fieldset>
      <input name="title" placeholder="Başlık" value={article.title} />
    </fieldset>

    <fieldset>
      <input
        name="description"
        placeholder="Kısa tanım"
        value={article.description}
      />
    </fieldset>

    <fieldset>
      <input
        name="imageLink"
        placeholder="Bir resim linki"
        value={article.image}
      />
    </fieldset>

    <fieldset>
      <textarea
        name="body"
        rows="8"
        placeholder="Metni, markdown ile yaz."
        value={String(article.body)}
      />
    </fieldset>

    <fieldset>
      <input
        placeholder="Etiketleri gir"
        on:keydown={(event) => handleTag(event)}
      />
    </fieldset>

    <div>
      {#each article.tagList as tag, i (tag)}
        <button
          transition:scale|local={{ duration: 200 }}
          animate:flip={{ duration: 200 }}
          on:click|preventDefault={() => {
            article.tagList = [
              ...article.tagList.slice(0, i),
              ...article.tagList.slice(i + 1),
            ];
          }}
          aria-label="Remove {tag} tag"
        >
          <i />
          {tag}
        </button>
      {/each}
    </div>

    {#each article.tagList as tag}
      <input hidden name="tag" value={tag} />
    {/each}

    <button class="button">Yayınla!</button>
  </form>
</div>

<style>
  .editor-container {
    width: 80ch;
    max-width: 100%;
  }

  form {
    display: flex;
    justify-content: stretch;
    flex-direction: column;
  }

  textarea {
    width: 100%;
  }
</style>
