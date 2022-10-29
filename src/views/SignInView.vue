<script>
import Header from '../components/Header.vue';

export default {
    components: {Header}
}
</script>

<template>
    <header>
        <Header />
    </header>
    <main>
        <h1>Inicar sesión</h1>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email"/><br/>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password"/><br/>
    </main>
</template>
<style>

</style>