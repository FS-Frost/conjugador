<script lang="ts">
    import { activePage, type ActivePage, isPage } from "$lib/activePage";
    import { onMount } from "svelte";
    import Inicio from "$lib/gui/pages/Inicio.svelte";

    let page: ActivePage;

    onMount(() => {
        activePage.subscribe((newActivePage) => {
            if (newActivePage == null) {
                return;
            }

            page = newActivePage;
        });

        const urlParams = new URLSearchParams(location.search);
        const rawUrlPage = urlParams.get("pagina") ?? "";
        const urlPage: ActivePage = isPage(rawUrlPage) ? rawUrlPage : "inicio";
        activePage.set(urlPage);
    });
</script>

{#if page == "inicio"}
    <Inicio />
{/if}
