<template>
    <header class="header">

        <div class="header-right">
            <RouterLink to="/">Welcome</RouterLink>
            <RouterLink to="/Icesi-Sites">Sites</RouterLink>
            <RouterLink to="/Add-Site">Add Site</RouterLink>
            <RouterLink to="sign-in">Sign In</RouterLink>
            <RouterLink to="sign-up">Sign Up</RouterLink>
        </div>

    </header>
</template>

<script>
export default {
    props: {
        numberLinks: String,
        color: String
    }
}
</script>
<style>
.header {
    overflow: hidden;
    background-color: #D14242;
    padding: 20px 10px;
}


.header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 20px;
    border-radius: 4px;
}


/* .header a.logo {
    font-size: 25px;
    font-weight: bold;
} */

.header a:hover {
    background-color: #ddd;
    color: black;
}


.header a.active {
    background-color: dodgerblue;
    color: white;
}

.header-right {
    float: right;
}

@media screen and (max-width: 500px) {
    .header a {
        float: none;
        display: block;
        text-align: left;
    }

    .header-right {
        float: none;
    }
}
</style>
