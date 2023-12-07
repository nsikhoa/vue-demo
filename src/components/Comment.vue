<script setup lang="ts">
import { Comment } from '@/types/Comment'
defineProps<Comment>()
</script>

<template>
  <div class="comment">
    <div>{{ name }}</div>
    <div>{{ comment }}</div>
  </div>
</template>

<style scoped>
.comment {
  padding: 0.5rem;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
}
</style>
