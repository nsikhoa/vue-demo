import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import BlogItem from '../BlogItem.vue'
import router from '@/router'

describe('routing', () => {
  it('renders properly', () => {
    const wrapper = mount(BlogItem, {
      props: { id: 1, title: 'Tieude', content: 'CONTENT', numberComments: 1, img: 'asd' },
      global: {
        plugins: [router]
      }
    })

    // console.log(wrapper.get('[data-test="todo"]').text())

    expect(wrapper.text()).toContain('Tieude')
  })
  it('route', () => {
    const wrapper = mount(BlogItem, {
      props: { id: 1, title: 'Tieude', content: 'CONTENT', numberComments: 1, img: 'asd' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('class="blogItem"')
  })
  it('route2', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(BlogItem, {
      props: { id: 1, title: 'Tieude', content: 'CONTENT', numberComments: 1, img: 'asd' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('class="blogItem"')

    await wrapper.find('[data-test="link"]').trigger('click')
    await flushPromises()
    console.log(wrapper.html())

    expect(wrapper.html()).toContain('Blog Image')
  })
})
