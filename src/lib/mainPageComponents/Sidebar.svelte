<script lang="ts">
  import CloseIcon from "$lib/icons/CloseIcon.svelte";

  export let isSidebarOpen: boolean;

  import { createEventDispatcher } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("change", { isSidebarOpen: false });
  }
</script>

{#if isSidebarOpen}
  <div
    class="modal-shadow"
    transition:fade={{ delay: 250, duration: 300, easing: quintOut }}
  ></div>
  <div
    class="sidebar"
    transition:slide={{
      delay: 250,
      duration: 300,
      easing: quintOut,
      axis: "x",
    }}
  >
    <button class="close-button" on:click={close} aria-label="close">
      <CloseIcon />
    </button>
    <a class="sidebar-link" on:click={close} href="/#hakkimda">Hakkımda</a>
    <a class="sidebar-link" on:click={close} href="/#neden">Neden Terapi?</a>
    <a class="sidebar-link" on:click={close} href="/posts/">Blog</a>
    <a class="sidebar-link" on:click={close} href="/#iletisim">İletişim</a>
    <a class="sidebar-link" on:click={close} href="/#randevu">Randevu</a>
    <div class="social-media-icons">
      <a
        id="instagram-link"
        aria-label="İnstagram gönderilerim"
        href="https://www.instagram.com/psk.senaergin/"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="2.5em" height="2.5em" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
          /></svg
        >
      </a>

      <a
        aria-label="Youtube kanalım"
        href="https://www.youtube.com/@psk.senaergin"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="2.5em" height="2.5em" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
          /></svg
        >
      </a>
    </div>
  </div>
{/if}

<style>
  .sidebar {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--kahve);
    padding: 4rem 5rem;
    width: 80%;
    height: 100%;
    display: flex;
    z-index: 320;
  }

  .sidebar-link {
    color: #3a3232;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .close-button {
    all: unset;
    position: absolute;
    right: 1rem;
    top: 1.5rem;
    cursor: pointer;
  }

  .modal-shadow {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11;
  }

  .social-media-icons {
    display: flex;
    gap: 2rem;
  }
</style>
