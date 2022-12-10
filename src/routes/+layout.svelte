<script>
	// import { navigating } from '$app/stores';
	import Header from '../lib/header.svelte';
    import '../assets/style.css';
    import Footer from '../lib/footer.svelte';
	// import PreloadingIndicator from './PreloadingIndicator.svelte';
</script>

<!-- {#if $navigating}
	<PreloadingIndicator />
{/if} -->

<Header />

<main>
	<slot />
</main>

<Footer/>

<style>
main{
    display:flex;
    flex-direction:column;
    align-items: center;
    width:100vw;
    max-width:100%;

}
</style>