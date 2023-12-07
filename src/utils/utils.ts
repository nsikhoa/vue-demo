import type { ToastServiceMethods } from 'primevue/toastservice'
import type { ComputedRef } from 'vue'

export const isEmptyBlogField = (
  title: string,
  description: string,
  content: string,
  image: string
) => {
  if (!title || !description || !content || !image) {
    return true
  }
  return false
}

export const isErrorBlogField = (
  errors: ComputedRef<
    Partial<Record<'title' | 'description' | 'content' | 'image', string | undefined>>
  >,
  toast: ToastServiceMethods
) => {
  for (const key of Object.keys(errors.value)) {
    if (['title', 'description', 'content', 'image'].includes(key)) {
      toast.add({ severity: 'info', detail: `Please enter ${key}`, life: 1000 })
      return true
    }
  }

  return false
}
