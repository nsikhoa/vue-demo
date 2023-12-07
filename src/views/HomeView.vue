<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Blog } from '@/types/Blog'
import BlogItem from '../components/BlogItem.vue'
import blogApi from '@/apis/blogs.api'

const blogs = ref<Blog[]>([])

onMounted(async () => {
  const response = await blogApi.getBlogs()
  blogs.value = response.data
})
</script>

<template>
  <main>
    <BlogItem
      v-for="blog in blogs"
      :key="blog.id"
      :id="blog.id"
      :title="blog.title"
      :content="blog.content"
      :numberComments="blog.comments.length"
      :img="blog.img"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
