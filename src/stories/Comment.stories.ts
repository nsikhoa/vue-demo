import type { Meta, StoryObj } from '@storybook/vue3'
import Comment from '../components/Comment.vue'

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'Example/Comment',
  argTypes: {
    id: { control: 'number' },
    name: { control: 'text' },
    comment: { control: 'text' }
  },

  render: (args) => {
    return {
      components: { Comment },
      setup() {
        return { args }
      },
      template: '<Comment :id="args.id" :name="args.name" :comment="args.comment" />'
    }
  }
}

export default meta
type Story = StoryObj<typeof Comment>

export const Basic: Story = {
  args: {
    id: 1,
    name: 'Test'
  }
}
