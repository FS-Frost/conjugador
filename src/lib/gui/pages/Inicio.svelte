<script lang="ts">
    import { analizarPalabra } from "$lib/conjugador";
    import { verbosIrregulares } from "$lib/verbosIrregulares";
    import Conjugaciones from "./Conjugaciones.svelte";

    let palabra: string = "amar";

    $: infoPalabra = analizarPalabra(palabra);

    $: esVerboIrregular = verbosIrregulares.includes(palabra);
</script>

<svelte:head>
    <title>Conjugador</title>
</svelte:head>

<section>
    <div class="field">
        <label class="label" for="">Verbo</label>
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="amar"
                bind:value={palabra}
            />
        </div>
    </div>

    {#if esVerboIrregular}
        <p><b>{palabra}</b> es un verbo irregular no soportado.</p>
    {:else if palabra.length > 0}
        {#if infoPalabra != null && infoPalabra.determinante.length > 0}
            <Conjugaciones {infoPalabra} />
        {:else}
            <p><b>{palabra}</b> no es un verbo.</p>
        {/if}
    {/if}
</section>

<style>
    section {
        width: 100%;
    }
</style>
