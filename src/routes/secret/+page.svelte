<script>
	import { page } from "$app/stores";
</script>

{#if $page.data.user}
	hi, {$page.data.user.email}
{:else}
	You're not logged in...
{/if}
