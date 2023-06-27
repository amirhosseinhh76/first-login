<template>
    <vHeader />
    <h1>
        Update Entry!
    </h1>
    <form class="add">
        <input id="name_up" type="text" name="name" placeholder="Enter Name" v-model="students.name" />
        <input id="age_up" type="number" name="age" placeholder="Age" v-model="students.age" />
        <input id="number_up" type="number" name="grade" placeholder="Grade" v-model="students.grade" />
        <button type="button" v-on:click="upStudent"> Update Status</button>
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
        async upStudent() {
            if (this.students.name == '') {
                let x = prompt(`Name is required!`)
                if (x == null) {
                    alert("Status Update Failed!")
                    location.reload()
                }
                this.students.name = x
                document.getElementById('name_up').style.borderColor = 'red';

            }
            if (this.students.age == '') {
                let y = prompt(`Age is required!`)
                this.students.name = y
                document.getElementById('age_up').style.borderColor = 'red';

            }
            if (this.students.grade == '') {
                let z = prompt(`Grade is required!`)
                this.students.name = z
                document.getElementById('number_up').style.borderColor = 'red';

            }
            else {
                if (this.students.name != null && this.students.age != null && this.students.grade != null) {
                    const res = await axios.put("http://192.168.15.43:3000/students/" + this.$route.params.id, {
                        name: this.students.name,
                        age: this.students.age,
                        grade: this.students.grade
                    })
                    console.warn(res)
                    if (res.status == 200) {
                        alert("Status Update successful!")
                        document.getElementById("name_up").style.borderColor = "#045153";
                        document.getElementById("age_up").style.borderColor = "#045153";
                        document.getElementById("number_up").style.borderColor = "#045153";
                    }
                    else {
                        alert("Ridi")
                    }
                }

            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (user == null) {
            console.warn("NULL user")
            this.$router.push({ name: "LogIn" })
        }
        else {
            let id = this.$route.params.id
            if (id == null) {
                this.$route.push({ name: "homeHome" })
            }
            let res = await axios.get('http://192.168.15.43:3000/students/' + id)
            this.students = res.data;
        }
    }
}
</script>
