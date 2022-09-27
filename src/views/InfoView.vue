<template>
    <header>
        <Header />
    </header>
    <div class="con">
        <div class="detail">
            <div class="card-detail">
                <img :src="currentSite.image" :alt="currentSite.name">
            </div>
            <div class="detail-content">
                <h3>{{currentSite.name}}</h3>
            </div>
            <div class="detail-description">
                <h3> Description </h3>
                <p> {{currentSite.description}}</p>
                <p class="items" v-for="current in currentSite.price" :key="current.name">{{current}}</p>
                <div class="return">
                    <router-link to="/Icesi-Sites" tag="button" class="btn"> Ok
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useSiteStore } from '../stores/sites';
import Header from '../components/Header.vue';
export default {
    data() {
        return {
            currentSite: {}
        };
    },
    computed: {
        ...mapStores(useSiteStore),
    },
    mounted() {
        this.currentSite = this.sitesStore.getSiteById(this.$route.params.siteId);
    },
    components: { Header }
}
</script>
<style scoped lang="scss">
.con {
    padding: 40px 0px 0px 8px;
    display: flex;
    justify-content: center;
}

.detail {
    width: 500px;
    height: 500px;
    padding: 0px;
    border: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
}

.card-detail {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 318px;
}

.detail .card-detail img {
    border-radius: 25px;
    width: 100%;
}

.detail .detail-content>h3 {
    top: 8px;
    text-align: center;
    color: #000000;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 28px;
    margin-top: 40px;
}

.detail .detail-content p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 12px;
    font-weight: 300;
    top: 14px;
    text-align: center;
}

.detail .detail-description h3 {
    top: 8px;
    color: #000000;
    margin: 0px;
    top: 0px;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 20px;
    margin-top: 16px;
}

.detail .detail-description p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
    text-align: left;
}

.items {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    font-family: 'Avenir LT Std';
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

.return {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    top: 20px;
}

.btn {
    margin: 10px;
    font-family: Cardo;
    font-size: 22px;
    color: white;
    border: none;
    width: 300px;
    height: 39px;
    border-radius: 5px;
    text-align: center;
    background-color: #2c3639;
}
</style>