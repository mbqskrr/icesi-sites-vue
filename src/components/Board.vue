<template>
    <div class="container">
        <ul>
            <li v-for="site in sites" :key="site.name">
                <div class="board">
                    <div class="board-image">
                        <img :src="site.image" :alt="site.name">
                    </div>
                    <div class="board-content">
                        <h3>{{site.name}}</h3>
                        <p>{{site.price}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sites: [
                {
                    image: "./src/assets/sites/mb.jpg",
                    name: "Martin Birreria",
                    description: "Comida mexicana",
                    price: "$$",
                },
                {
                    image: "./src/assets/sites/th.jpg",
                    name: "Turk House NYC",
                    description: "Comida rápida americana",
                    price: "$$$"
                },
                {
                    image: "./src/assets/sites/ldm.png",
                    name: "Lengua de Mariposa",
                    description: "Heladería con sabores únicos",
                    price: "$$"
                }
            ]
        }
    }
}
</script>
<style>
.container {
    padding: 50px 0px 0px 14px;
    display: flex;
}

ul>li {
    display: inline-block;
}

.board {
    width: 140px;
    height: 230px;
    padding: 0px;
    border: 0;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    /**box-shadow: 0 0 30px rgba(0, 0, 0, .04);*/
    transition: .4s ease;
}

.board:hover {
    transform: scale(1.05);
}

.board .board-image img {
    border-radius: 25px;
    width: 100%;
    transition: .4s ease;
}

.board .board-content h3 {
    height: 157px;
    width: 170px;
    color: #000000;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 14px;
    margin-top: 16px;
}

.board .board-content p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin: 8px 0 22px;
    bottom: 8px;
    text-align: justify;
}

@media (min-width: 1024px) {
    body {
        height: unset;
        padding: 30px 0;
    }

    .board {
        width: 160px;
        height: 250px;
    }
}
</style>