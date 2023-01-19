/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    if (locals.user) {
        return { user: locals.user }
    } else {
        return { user: undefined }
    }
}