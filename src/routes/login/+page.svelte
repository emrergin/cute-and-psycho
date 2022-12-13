<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance  } from '$app/forms';

	export let form: ActionData;

	let notice;
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
			<label for="password">Şifre:</label>
			<input type="password" name="password" id="password" required />
		</div>

		<div>
			<button type="submit" class="button">Giriş</button>
		</div>

		{#if form?.error}
			<div class="notice">
				{form.error}
			</div>
		{/if}
	</form>
</section>

<style>
form{
	display:flex;
	flex-direction: column;
	width: 400px;
	padding: 30px;
	padding-top: 16px;
	background-color: rgb(255, 252, 249);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	margin-top:32px;
	position:relative;
}


form>*{
	display:flex;
	justify-content: space-between;
	padding:5px;
	align-items: center;
}

input{
	padding-block:0.75ch;
}

input:focus{
	outline:2px #628e73 solid;
}

.notice{
	position:absolute;
	color:red;
	top: 50%;
    transform: translateY(-50%);
	background-color: rgb(255, 252, 249);
	width:100%;
	height:100%;
}

</style>