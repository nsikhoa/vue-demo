import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Comment from '../Comment.vue'

describe('render', () => {
  it('renders properly', () => {
    const wrapper = mount(Comment, { props: { id: 1, name: 'Human A', comment: 'ZXC' } })

    // console.log(wrapper.get('[data-test="todo"]').text())

    expect(wrapper.text()).toContain('Human A')
  })
})
