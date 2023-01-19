<script>
	import { page } from "$app/stores";
	const redirectUrl = "http://localhost:5173/redirect";
</script>

<div>Login with:</div>

<form method="post">
	{#each $page.data.authProviders as provider}
		<button formaction="?/login&provider={provider.name}" class="btn">
			{provider.name}
		</button>
	{/each}
</form>
