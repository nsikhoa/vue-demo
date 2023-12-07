<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const username = ref()
const password = ref()

const login = () => {
    console.log(username.value)
    console.log(password.value)
    // store.dispatch('LogIn', {username: username.value, password: password.value})
}

</script>
<template lang="">
    <div class='loginForm'>
        <span class="p-float-label">
            <InputText id="username" v-model="username" />
            <label for="username">Username</label>
        </span>
        <span class="p-float-label">
            <PasswordComponent v-model="password" inputId="password" />
            <label for="password">Password</label>
        </span>
        <ButtonComponent label="Login" severity="secondary" @click="login" />
    </div>
</template>
<style scoped>
.loginForm {
    max-width: max-content;
    margin: 0 auto;
}

button,
span:nth-child(2) {
    margin-top: 1.5rem;
}
</style>