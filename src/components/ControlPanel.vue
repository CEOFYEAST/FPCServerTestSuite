<template>
    <div>
        <button @click="makeLoginRequest">Make Login Request</button>
        <div>
            <input v-model="username" placeholder="Username" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="createAccount">Create Account</button>
        </div>
        <button @click="logout">Logout</button>
        <button @click="privilegedRequest">Privileged GET Request</button>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async makeLoginRequest() {
            try {
                const response = await axios.get('localhost:3000/user/account/access');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async createAccount() {
            try {
                const response = await axios.post('localhost:3000/user/account/create', {
                    username: this.username,
                    password: this.password
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async logout() {
            try {
                const response = await axios.post('localhost:3000/user/account/logout');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async privilegedRequest() {
            try {
                const response = await axios.get('localhost:3000/user/save-slots/access');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style>
/* Add your styles here if needed */
</style>