<template>
    <header class="header">
        <!-- <a href="#default" class="logo">CompanyLogo</a> -->
        <div class="header-right">
            <!-- <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a> -->
            <RouterLink to="/">Welcome</RouterLink>
            <RouterLink to="/Icesi-Sites">Sites</RouterLink>
            <RouterLink to="/Add-Site">Add Site</RouterLink>
        </div>
        <!-- <nav>
            <RouterLink to="/">Welcome</RouterLink>
            <RouterLink to="/Icesi-Sites">Sites</RouterLink>
        </nav> -->
    </header>
</template>
<script>

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
    line-height: 25px;
    border-radius: 4px;
}


.header a.logo {
    font-size: 25px;
    font-weight: bold;
}

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


/* header{
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
 */

</style>
