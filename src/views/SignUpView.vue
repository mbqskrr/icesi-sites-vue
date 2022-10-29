<script>
import { useAuthenticationStore } from '../stores/auth'
import { mapStores } from "pinia";
import { auth } from "../firebase/config"
import Header from '../components/Header.vue';

export default {

    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        newUser(e) {
            e.preventDefault()
            if (this.password === this.confirmPassword) {
                this.authenticationStore.newUserAwait(this.email, this.password)
                console.log('no te voy a esperar')
            }
            else alert('Passwords no coinciden')
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    components: { Header },
    mounted() {
        console.log(auth.currentUser)
    }
}
</script>
<template>
    <header>
        <Header/>
    </header>
    <main>
        <form>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email">
            <br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" v-model="password">
            <br>
            <label for="cpassword">Confirm Password:</label>
            <input type="password" name="cpassword" id="cpassword" v-model="confirmPassword"><br>
            <button @click="newUser">Crear cuenta</button>
        </form>
    </main>

</template>
<style>

</style>