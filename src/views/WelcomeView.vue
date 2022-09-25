<template>
    <header>
        <!-- <article class="title">
            <h1 id="site-name">Icesi Sites</h1>
        </article> -->
        <Header />
    </header>
    <h1 id="site-name">Icesi Sites</h1>
    <aside>
        <img alt="Foodies" class="logo" src="../assets/family.jpg" />
    </aside>
    <section class="content">
        <article class="description">
            <p>“El lugar favorito de los foodies.”</p>
        </article>

        <!-- <div class="buttons">
            <router-link to="/Icesi-Sites" class-active="">
                <button>Empezar</button>
            </router-link>
        </div> -->
        <footer>

        </footer>
    </section>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    components: {
        Header
    }


}
</script>

<style scoped-lang="scss">
aside {
    display: flex;
    justify-content: center;
}

.logo {
    top: 0px;
    width: 500px;
    height: 330px;
}

h1 {
    font-family: sans-serif;
    font-size: 70px;
    font-weight: 600;
    /* background-image: linear-gradient(to left, #553c9a, #b393d3); */
    color: #D14242;
    background-clip: text;
    -webkit-background-clip: text;
    text-align: center;
    line-height: 0px;
}

p {
    color: #757575;
    font-family: Abbys;
    font-size: 12px;
    width: 270px;
    left: 65px;
    text-align: center;
    top: 48px;
    font-weight: 700;
    line-height: 80px;
}

/*.buttons {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    top: 40px;
    line-height: 411px;
}*/

button {
    margin: 10px;
    font-family: Cardo;
    font-size: 22px;
    color: white;
    border: none;
    width: 294px;
    height: 39px;
    border-radius: 10px;
    background-color: #1b0404;

}

@media (min-width: 1024px) {
    aside .logo {
        padding-left: 20px;
        width: 500px;
        height: 300px;
        left: 0px;
    }

    aside {
        float: left;
    }

    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        top: 140px;

    }

    h1 {
        font-size: 100px;
    }

    p {
        font-size: 20px;
        width: 500px;
        left: 160px;
    }
}
</style>