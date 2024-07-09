<script lang="ts">
  import Header from "../lib/Header.svelte";
  import "../lib/assets/style.css";
  import Footer from "../lib/Footer.svelte";
  import Sidebar from "$lib/mainPageComponents/Sidebar.svelte";
  import { page } from "$app/stores";
  import "@fontsource-variable/epilogue";
  import "@fontsource-variable/montserrat";

  let isSidebarOpen = false;

  function handleChange(ev: { detail: { isSidebarOpen: boolean } }) {
    isSidebarOpen = ev.detail.isSidebarOpen;
  }

  const baseTags =
    "psikolog, pisikolog, bolu, terapist, bolu merkez, terapi, online terapi, bolu pisikolog, bolu psikolog, klinik psikolog, uzman klinik psikolog, bilişsel davranışçı terapi,bolu merkez terapi, bolu merkez psikolog, depresyon, panik atak, panik atak tedavi, çevrimiçi terapi, çevrim içi terapi, onlayn terapi";
  $: tags =
    baseTags +
    ($page.data.taglist && $page.data.taglist.length > 0
      ? ", " + $page.data.taglist.join(", ")
      : "");
</script>

<svelte:head>
  <meta name="keywords" content={tags} />
</svelte:head>

<Header on:change={handleChange} />

<main>
  <slot />
</main>

<Footer />
<Sidebar {isSidebarOpen} on:change={handleChange} />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 100%;
  }
</style>
