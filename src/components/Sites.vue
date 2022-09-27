<template>
    <main>
        <Board />
    </main>
</template>
<script>
import Board from "./Board.vue";
import { ref } from 'vue'
export default {
    setup() {
        return {
            slide: ref(1)
        }
    },
    components: {
        Board
    },
    data() {
        return {

        }
    }
}
</script>
<style>
h4 {
    padding-top: 50px;
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}

.q-pa-md {
    height: 500px;
}
</style>