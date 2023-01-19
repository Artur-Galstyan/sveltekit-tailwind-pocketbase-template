import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    const authMethods = await locals.pb.collection('users').listAuthMethods();
    return {
        authProviders: authMethods.authProviders
    }
}


export const actions: Actions = {
    login: async ({ request, locals, url, cookies }) => {

        const authMethods = await locals.pb.collection('users').listAuthMethods();
        const provider = authMethods.authProviders.find(prov => prov.name == url.searchParams.get("provider"));
        const redirectUrl = "http://localhost:5173/redirect"
        if (provider) {

            cookies.set("provider", JSON.stringify(provider))
            throw redirect(303, provider.authUrl + redirectUrl)
        }

    }
}