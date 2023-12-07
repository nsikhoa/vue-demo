import { setup, type Meta, type StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import BlogItem from '../components/BlogItem.vue'
import RouterViewWrapper from '../stories/RouterViewWrapper.vue'
import '../assets/base.css'
import '../assets/main.css'

const customRoutes = [
  {
    path: '/',
    name: 'bloga',
    component: RouterViewWrapper // this would need to be defined/imported into the `.stories` file
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: RouterViewWrapper // this would need to be defined/imported into the `.stories` file
  }
]

const meta: Meta<typeof BlogItem> = {
  component: BlogItem,
  title: 'Example/BlogItem',
  argTypes: {
    id: { control: 'number' },
    title: { control: 'text' },
    content: { control: 'text' },
    numberComments: { control: 'number' },
    img: { control: 'text' }
  },

  render: (args) => {
    return {
      components: { BlogItem },
      setup() {
        return { args }
      },
      template:
        '<BlogItem :id="args.id" :title="args.title" :content="args.content" :numberComments="args.numberComments" :img="args.img" />'
    }
  },
  decorators: [
    () => ({
      template: '<div><story /><RouterView /></div>'
    })
  ]
}

export default meta
type Story = StoryObj<typeof BlogItem>

export const Basic: Story = {
  args: {
    id: 1
  }
}

Basic.decorators = [vueRouter(customRoutes)]
