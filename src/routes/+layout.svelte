<script>
	import Header from '../lib/header.svelte';
    import '../lib/assets/style.css';
    import Footer from '../lib/footer.svelte';
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