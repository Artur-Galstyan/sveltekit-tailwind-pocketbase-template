import { redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals, cookies, url }) {

    const provider = JSON.parse(cookies.get("provider"));

    const redirectUrl = "http://localhost:5173/redirect";
    if (provider.state !== url.searchParams.get('state')) {
        console.log("State parameters don't match.");
        return { error: "State parameters don't match." }
    }

    const authData = await locals.pb.collection('users').authWithOAuth2(
        provider.name,
        url.searchParams.get('code'),
        provider.codeVerifier,
        redirectUrl,
        // pass optional user create data
        {
            emailVisibility: false,
        }
    )
    if (locals.pb.authStore.isValid) {
        cookies.set(locals.pb.authStore.exportToCookie());
    }

    return {
        isValid: locals.pb.authStore.isValid
    }

}