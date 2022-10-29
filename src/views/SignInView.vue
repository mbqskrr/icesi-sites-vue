<script>
import { mapStores } from 'pinia';
import Header from '../components/Header.vue';
import { useAuthenticationStore } from "../stores/auth";


export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        signIn(e) {
            e.preventDefault();
            console.log(this.email, this.password)
            this.authenticationStore.singIn(this.email, this.password)
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    components: { Header },
    /*mounted:{

    }*/
}
</script>

<template>
    <header>
        <Header />
    </header>
    <main>
        <h1>Inicar sesión</h1>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" v-model="email" /><br />
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" v-model="password" /><br />
        <button @click="signIn">Inicar sesión</button>
    </main>
</template>
<style>

</style>