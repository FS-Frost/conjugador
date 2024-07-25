<script lang="ts">
    import NavItem from "./NavItem.svelte";

    let navMenu: HTMLElement;
    let navToggle: HTMLElement;

    function toggleMenu(): void {
        if (navToggle) {
            navToggle.classList.toggle("is-active");
        }

        if (navMenu) {
            navMenu.classList.toggle("is-active");
        }
    }
</script>

<nav class="navbar">
    <a
        bind:this={navToggle}
        on:click={() => toggleMenu()}
        role="button"
        tabindex="0"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        on:keydown={() => {}}
        href={`javascript:;`}
    >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

    <div bind:this={navMenu} class="navbar-menu" id="navMenu">
        <div class="navbar-start">
            <NavItem text="Inicio" page="inicio" />
        </div>

        <div class="navbar-end">
            <a
                class="navbar-item"
                title="Ver en GitHub"
                href={`https://github.com/FS-Frost/conjugador`}
                target="_blank"
            >
                Ver en GitHub
            </a>
        </div>
    </div>
</nav>
