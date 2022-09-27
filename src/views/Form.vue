<template>
  <header>
    <Header/>
  </header>
  <form @submit.prevent="submitForm">
    <span>Logo</span><br>
    <input type="file" accept="image/png, image/jpeg" /><br>
    <span>Name</span><br>
    <input v-model="name" type="text" placeholder="Nombre del lugar" /><br>
    <span>Descripción</span><br>
    <input v-model="description" type="text" placeholder="Descripción del lugar" /><br>
    <span>Precios</span><br>
    <input v-model="price" type="text" placeholder="$" /><br>
    <button class="submit" @click.prevent="(e) => submitForm()"> Agregar </button>
  </form>

</template>
<script>
import { mapStores } from 'pinia';
import { useSiteStore } from '../stores/sites';
import Header from '../components/Header.vue';
export default {
    data() {
        return {
            image: "",
            name: "",
            description: "",
            price: "",
        };
    },
    computed: {
        ...mapStores(useSiteStore),
        allSites() {
            return this.sitesStore.getSites;
        },
    },
    mounted() {
        this.sitesStore.loadSites();
    },
    methods: {
        submitForm() {
            const newSite = {
                image: this.image,
                name: this.name,
                description: this.description,
                price: this.price,
            };
            this.sitesStore.newSite(newSite);
            this.image = "";
            this.name = "";
            this.description = "";
            this.price = "";
        },
    },
    components: { Header }
};
</script>
<style>
form {
  padding: 10px;
  /* border: 2px solid black;
  border-radius: 5px; */
}

input {
  padding: 4px 8px;
  margin: 4px;
}

span {
  font-size: 18px;
  margin: 4px;
  font-weight: 500;
}

.submit {
  font-size: 15px;
  color: #fff;
  background: #222;
  padding: 6px 12px;
  border: none;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 5px;
}
</style>