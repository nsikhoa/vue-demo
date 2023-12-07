<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'

// const store = useStore()

// const isLoggedIn = computed(() => {
//     return store.getters.isAuthenticated
// })

// console.log(store);

</script>

<template>
    <header>
        <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        </RouterLink>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/create">Create Blog</RouterLink>
            <!-- <RouterLink to="/login">Login</RouterLink> -->
        </nav>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
}

a {
  display: inline-block;
  padding: .5rem 1rem;
}

/* a:last-child {
    border: 1px solid var(--color-text);
    
}

a:last-child:hover {
  background-color: var(--color-text);
} */
</style>