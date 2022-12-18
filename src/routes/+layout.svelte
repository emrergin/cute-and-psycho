<script>
	import Header from '../lib/Header.svelte';
    import '../lib/assets/style.css';
    import Footer from '../lib/Footer.svelte';
</script>

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