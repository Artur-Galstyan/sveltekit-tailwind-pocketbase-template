<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    console.log($page.data.isValid);
    if (browser && $page.data.isValid) {
        setTimeout(() => {
            window.location.href = "/secret";
        }, 2000);
    }
</script>

<div>Authenticating...</div>
{#if $page.data.isValid}
    yes!!
{:else}
    oh no!
{/if}
