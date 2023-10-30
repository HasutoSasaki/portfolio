export default defineNuxtPlugin((nuxtApp) => {
    console.log(process.env.GITHUB_TOKEN)
    const { githubToken } = useRuntimeConfig();
    nuxtApp.hook('apollo:auth', ({ client, token }) => {
        token.value = githubToken;
    });
});