<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useRoute, useRouter } from 'vue-router'
import Comment from '@/components/Comment.vue'
import type { Blog } from '@/types/Blog'
import blogApi from '@/apis/blogs.api'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const blog = ref<Blog>()
const visible = ref(false)

const blogId = computed(() => {
  return parseInt(route.params.id as string)
})

onMounted(async () => {
  const res = await blogApi.getBlogDetail(blogId.value)
  blog.value = res.data
})

const deleteBlog = () => {
  visible.value = true
}

const confirmDelete = async () => {
  const res = await blogApi.removeBlog(blogId.value)
  if (res.status === 200) {
    toast.add({ severity: 'success', detail: 'Delete Success', life: 1000 })
    setTimeout(() => {
      router.push({ path: '/' })
    }, 1000)
  } else {
    toast.add({ severity: 'error', detail: 'Delete failed', life: 1000 })
  }
}
</script>
<template>
  <ToastComp />
  <div class="blog">
    <img :src="blog?.img" alt="Blog Image" />
    <h2>{{ blog?.title }}</h2>
    <div v-html="blog?.mainContent"></div>

    <div v-for="item in blog?.comments" :key="item.id">
      <Comment :id="item.id" :name="item.name" :comment="item.comment" />
    </div>

    <div class="buttons">
      <RouterLink :to="'/edit/' + blog?.id">Edit</RouterLink>
      <ButtonComponent label="Delete" severity="secondary" @click="deleteBlog" />
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Header"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div>
        <span>Warning</span>
      </div>
    </template>
    <p>Do you want to delete this blogs?</p>
    <template #footer>
      <ButtonComponent
        label="Cancel"
        severity="secondary"
        @click="visible = false"
        autofocus
        style="margin-right: 5px"
      />
      <ButtonComponent label="Ok" severity="success" @click="confirmDelete" autofocus />
    </template>
  </Dialog>
</template>
<style scoped>
img {
  width: 50rem;
}
.blog {
  width: min-content;
  margin: 0 auto;
}

.buttons {
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
}

.buttons a {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: rgb(28, 184, 93);
  color: #fff;
}
</style>
