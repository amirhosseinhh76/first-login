<template>
    <div class="holding-cell">
        <div class="register">
            <img class="logo" alt="ogo" src="../assets/logo.png">
            <input class="username" type="text" v-model="name" placeholder="Name here!" />
            <input class="username" type="text" v-model="email" placeholder="Email Here!" />
            <input class="password" type="password" v-model="pass" placeholder="Password" />
            <button v-on:click="signUp">
                Sign Up
            </button>
            <p>
                <router-link to="/log-in">Already signed up? click to login!</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {

        return {
            name: '',
            email: '',
            pass: ''
        }
    },
    methods: {
        async signUp() {

            // let res = await axios.post("http://192.168.15.43:3000/user", {
            //     name: this.name,
            //     email: this.email,
            //     password: this.pass
            // });
            let res = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.pass
            });
            console.log(res.status)
            // console.warn(res);
            if (res.status == 201) {

                localStorage.setItem("user-info", JSON.stringify(res.data));

            }
        }
    }
}
</script>
