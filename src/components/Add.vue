<template>
    <vHeader />
    <h1>
        Add students in this page for the table in Home Page!
    </h1>
    <form class="add">
        <input id="name_in" type="text" name="name" placeholder="Enter Name" v-model="students.name" />
        <input id="age_in" type="number" name="age" placeholder="Age" v-model="students.age" />
        <input id="number_in" type="number" name="grade" placeholder="Grade" v-model="students.grade" />
        <button type="button" v-on:click="addStudent"> Add Student</button>
    </form>
</template>
<script>
import axios from "axios"
import vHeader from "./Header.vue"
export default {
    name: "add_rest",
    components: {
        vHeader
    },
    data() {
        return {
            students: {
                name: '',
                age: '',
                grade: ''
            }

        }
    },
    methods: {
        async addStudent() {
            if (this.students.name == '') {
                let x = prompt(`Name is required!`)
                this.students.name = x
                document.getElementById('name_in').style.borderColor = 'red';

            }
            if (this.students.age == '') {
                let y = prompt(`Age is required!`)
                this.students.name = y
                document.getElementById('age_in').style.borderColor = 'red';

            }
            if (this.students.grade == '') {
                let z = prompt(`Grade is required!`)
                this.students.name = z
                document.getElementById('number_in').style.borderColor = 'red';

            }
            else {
                const res = await axios.post("http://localhost:3000/students", {
                    name: this.students.name,
                    age: this.students.age,
                    grade: this.students.grade
                })
                console.warn(res)
                if (res.status == 201) {
                    alert("Student Added successfully!")
                    document.getElementById("name_in").style.borderColor = "#045153";
                    document.getElementById("age_in").style.borderColor = "#045153";
                    document.getElementById("number_in").style.borderColor = "#045153";
                }
                else {
                    alert("Update Failed!")
                }
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')

        if (user == null) {
            console.warn("NULL user")
            this.$router.push({ name: "LogIn" })
        }
    }
}
</script>
