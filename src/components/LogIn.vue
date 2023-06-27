<template>
    <div class="holding-cell">
        <div class="login">
            <img class="logo" alt="logo" src="../assets/logo.png">

            <input class="username" type="text" v-model="email" placeholder="Email" />
            <input class="password" type="password" v-model="pass" placeholder="Password" />
            <button v-on:click="login">
                Log in
            </button>
            <p>
                <router-link to="/sign-up">Don't have an account? create from here...</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        async login() {

            let res = await axios.get(
                `http://192.168.15.43:3000/user?email=${this.email}&pass=${this.pass}`
            )
            // let res = await axios.get(
            //     `http://localhost:3000/user?email=${this.email}&pass=${this.pass}`
            // )
            console.warn(res)
            if (res.status == 200 && res.data.length > 0) {
                // console.warn(this.email, this.pass)
                localStorage.setItem("user-info", JSON.stringify(res.data[0]));
                this.$router.push({ name: "homeHome" })
            }
            else {
                alert("User name or Password Invalid!")
            }
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user-info'))
        if (user) {
            this.$router.push({ name: "homeHome" })
        }
    }
}
</script>
