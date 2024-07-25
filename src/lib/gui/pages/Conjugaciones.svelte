<script lang="ts">
    import { conjugar, type InfoPalabra } from "$lib/conjugador";

    export let infoPalabra: InfoPalabra;

    $: conjugaciones = conjugar(infoPalabra.palabra);
</script>

<table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Base</th>
            <th>Raíz</th>
            <th>Determinante</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{infoPalabra.base}</td>
            <td>{infoPalabra.raiz}</td>
            <td>{infoPalabra.determinante}</td>
        </tr>
    </tbody>
</table>

<table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Modo verbal</th>
            <th>Conjugación</th>
        </tr>
    </thead>
    <tbody>
        {#each conjugaciones as conjugacion}
            <tr>
                <td>{conjugacion.nombre}</td>
                <td>{conjugacion.valor}</td>
            </tr>
        {/each}
    </tbody>
</table>
