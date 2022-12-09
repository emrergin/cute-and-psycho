<script>
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	export let article;
	export let errors;
</script>

<div >
	<div >
		<div >
			<div >
				<ListErrors {errors} />

				<form use:enhance method="POST">
					<fieldset >
						<input
							name="title"							
							placeholder="Başlık"
							value={article.title}
						/>
					</fieldset>

					<fieldset >
						<input
							name="description"							
							placeholder="Kısa tanım"
							value={article.description}
						/>
					</fieldset>

					<fieldset >
						<textarea
							name="body"							
							rows="8"
							placeholder="Metni, markdown ile yaz."
							value={article.body}
						/>
					</fieldset>

					<fieldset >
						<input
							
							placeholder="Etiketleri gir"
							on:keydown={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									if (!article.tagList.includes(event.target.value)) {
										article.tagList = [...article.tagList, event.target.value];
									}
									event.target.value = '';
								}
							}}
						/>
					</fieldset>

					<div >
						{#each article.tagList as tag, i (tag)}
							<button
								transition:scale|local={{ duration: 200 }}
								animate:flip={{ duration: 200 }}
								
								on:click|preventDefault={() => {
									article.tagList = [
										...article.tagList.slice(0, i),
										...article.tagList.slice(i + 1)
									];
								}}
								aria-label="Remove {tag} tag"
							>
								<i  />
								{tag}
							</button>
						{/each}
					</div>

					{#each article.tagList as tag}
						<input hidden name="tag" value={tag} />
					{/each}

					<button >Yayınla!</button>
				</form>
			</div>
		</div>
	</div>
</div>