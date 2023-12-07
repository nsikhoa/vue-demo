<script setup lang="ts">
import blogApi from '@/apis/blogs.api'
import { useToast } from 'primevue/usetoast'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { blogSchema } from '@/utils/rules'
import { isEmptyBlogField, isErrorBlogField } from '@/utils/utils'
import { computed, onMounted, ref } from 'vue'
import type { Blog } from '@/types/Blog'

const { errors, defineField } = useForm({
  validationSchema: blogSchema
})

const router = useRouter()
const route = useRoute()

const blog = ref<Blog>()
const blogId = computed(() => {
  return parseInt(route.params.id as string)
})
const toast = useToast()
const [title, titleAttrs] = defineField('title')
const [description, descAttrs] = defineField('description')
const [content, contentAttrs] = defineField('content')
const [image, imageAttrs] = defineField('image')

onMounted(async () => {
  const res = await blogApi.getBlogDetail(blogId.value)
  blog.value = res.data
  title.value = blog.value.title
  description.value = blog.value.content
  content.value = blog.value.mainContent
  image.value = blog.value.img
})

const onSubmit = async () => {
  if (isErrorBlogField(errors, toast)) {
    return
  }

  if (
    isEmptyBlogField(
      title.value as string,
      description.value as string,
      content.value as string,
      image.value as string
    )
  ) {
    toast.add({ severity: 'info', detail: `Please enter fields`, life: 1000 })
    return
  }

  const response = await blogApi.updateBlog(blogId.value, {
    title: title.value as string,
    content: description.value as string,
    mainContent: content.value as string,
    img: image.value as string,
    comments: []
  })
  if (response.status === 200) {
    router.push({ path: '/edit/' + blogId.value })
    setTimeout(() => {
      toast.add({ severity: 'success', detail: 'Update Blog Success', life: 1000 })
    }, 1500)
  } else {
    toast.add({ severity: 'error', detail: 'Update Blog Failed', life: 1000 })
  }
}
</script>

<template>
  <ToastComp />
  <form @submit.prevent="onSubmit">
    <span class="p-float-label">
      <InputText v-validate="'required'" id="title" v-model="title" v-bind="titleAttrs" />
      <label for="title">Title</label>
    </span>
    <div>{{ errors.title }}</div>
    <span class="p-float-label">
      <InputText id="description" v-model="description" v-bind="descAttrs" />
      <label for="description">Description</label>
    </span>
    <div>{{ errors.description }}</div>
    <span class="p-float-label">
      <TextareaComp v-model="content" v-bind="contentAttrs" />
      <label>Main Content</label>
    </span>
    <div>{{ errors.content }}</div>
    <span class="p-float-label">
      <InputText id="image" v-model="image" v-bind="imageAttrs" />
      <label for="image">Image</label>
    </span>
    <div>{{ errors.image }}</div>
    <span class="p-float-label">
      <ButtonComponent label="Update" severity="secondary" type="submit" />
    </span>
  </form>
</template>

<style scoped>
span {
  margin: 0 auto;
  margin-top: 1.5rem;
  width: 50%;
}

span input {
  width: 100%;
}

span textarea {
  width: 100% !important;
  height: 25rem !important;
}

form div {
  width: 50%;
  margin: 0 auto;
  color: red;
}
</style>
