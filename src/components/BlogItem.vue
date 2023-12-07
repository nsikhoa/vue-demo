<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Blog } from '@/types/Blog'
import { computed } from 'vue'

const props = defineProps<Omit<Blog, 'mainContent' | 'comments'> & { numberComments: number }>()

// const numberComments = computed(() => props.comments?.length)
</script>
<template>
  <div class="blogItem">
    <section>
      <img :src="img" alt="Image Blog" />
    </section>
    <section>
      <h2>{{ title }}</h2>
      <!-- <h3>Title description, <span>April 7, 2014</span></h3> -->
      <p>
        {{ content }}
      </p>
      <div>
        <RouterLink data-test="link" :to="'/blog/' + id">Read More</RouterLink>
        <p>
          Comments <span class="comments">{{ numberComments }}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  width: 50rem;
  object-fit: cover;
}

.blogItem {
  max-width: min-content;
  box-shadow: 0 2px 2rem rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
}

section:last-child {
  padding: 0 1rem 1rem 1rem;
}

section:last-child p {
  margin: 1rem 0;
}

section:last-child div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comments {
  padding: 0.5rem;
  background-color: #111;
  color: #fff;
}
</style>
