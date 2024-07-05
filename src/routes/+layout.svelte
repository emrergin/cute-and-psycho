<script lang="ts">
  import Header from "../lib/Header.svelte";
  import "../lib/assets/style.css";
  import Footer from "../lib/Footer.svelte";
  import Sidebar from "$lib/mainPageComponents/Sidebar.svelte";
  import "@fontsource-variable/epilogue";
  import "@fontsource-variable/montserrat";
  import "@fontsource-variable/montserrat";

  let isSidebarOpen = false;

  function handleChange(ev: { detail: { isSidebarOpen: boolean } }) {
    isSidebarOpen = ev.detail.isSidebarOpen;
  }
</script>

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
