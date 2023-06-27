<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Add_restaurant">Add Students</router-link>
        <a v-on:click="logout" href="#">LogOut</a>
    </div>
</template>

<script>
export default {
    name: "vHeader",
    methods: {
        logout() {
            console.warn("logout hit");
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    }
}
</script>


<style>
.nav {
    background-color: rgb(54, 112, 99);
    overflow: hidden;
}


.nav a {
    float: left;
    color: aliceblue;
    padding: 14px;
    text-decoration: none;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nav a:hover {
    background: grey;
}
</style>