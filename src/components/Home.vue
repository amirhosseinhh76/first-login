<template>
    <vHeader />
    <h1>
        Hello {{ name }}, Welcome to Home Page!
    </h1>

    <table class="center" border="1px">
        <tr>
            <td
                style="background-color: rgb(54, 112, 99); color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                #</td>
            <td
                style="background-color: rgb(54, 112, 99); color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Name</td>
            <td
                style="background-color: rgb(54, 112, 99); color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Age</td>
            <td
                style="background-color: rgb(54, 112, 99); color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Grade</td>
            <td
                style="background-color: rgb(54, 112, 99); color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                Action</td>
        </tr>
        <tr v-for="item in students " :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.grade }}</td>
            <td><router-link :to="`/Update_restaurant/` + item.id">Update</router-link></td>

        </tr>
    </table>
</template>
<script>
import axios from "axios"
import vHeader from "./Header.vue"
export default {
    name: "homeHome",
    data() {
        return {
            name: '',
            students: []
        }
    },
    components: {
        vHeader
    },
    async mounted() {
        let user = localStorage.getItem('user-info')

        if (user == null) {
            console.warn("NULL user")
            this.$router.push({ name: "LogIn" })

        }
        else {
            this.name = JSON.parse(user).name
            let res = await axios.get(
                `http://192.168.15.43:3000/students`
            )
            // let res = await axios.get(
            //     `http://localhost:3000/students`
            // )
            this.students = res.data;
        }
    }

}
</script>
<style>
td {
    width: 160px;
    height: 40px;
}

.center {
    margin-left: auto;
    margin-right: auto;
}
</style>