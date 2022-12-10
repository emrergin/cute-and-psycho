<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>


<section>
	<form use:enhance>
		<div>
			<label for="username">Kullanıcı Adı:</label>
			<input name="username" id="username" required />
		</div>

		<div>
			<label for="password">Şifre</label>
			<input type="password" name="password" id="password" required />
		</div>

		<div>
			<button type="submit">Giriş</button>
		</div>

		{#if form?.error}
			<div class="notice error">
				{form.error}
			</div>
		{/if}
	</form>
</section>

<style>
	form{
		display:flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>