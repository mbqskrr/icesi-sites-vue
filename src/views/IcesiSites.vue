<template>
    <header>

    </header>
    <main>
        <div class="panels">
            <Sites />
        </div>
    </main>
    <footer>

    </footer>
</template>
<script>
import Sites from '../components/Sites.vue';
export default {
    components: {
        Sites
    }
}
</script>
<style scoped lang="scss">
header {
    position: sticky;
}

nav {
    font-family: Cardo;
    font-size: 22px;
    overflow: hidden;
    width: 100%;
    background-color: papayawhip;
    text-align: center;
    position: fixed;
    height: 70px;
    bottom: 40px;
}

nav a.router-link-exact-active {
    color: black;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
}

.panels {
    position: initial;
}

@media (min-width: 1024px) {
    nav {
        display: flex;
        justify-content: space-around;
        top: 0;
    }
}
</style>