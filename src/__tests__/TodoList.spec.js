import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TodoList from '@/components/TodoList'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)

const mockTodoList = {
  id: 1,
  title: 'Test Title',
  todos: [
    {
      id: 1,
      text: 'test 1',
      completed: false
    },
    {
      id: 2,
      text: 'test 2',
      completed: false
    },
    {
      id: 3,
      text: 'test 3',
      completed: true
    }
  ],
  template: {
    id: 1,
    title: 'Test Title',
    user: {
      id: 1,
      username: 'TestUsername'
    }
  }
}

describe('TodoList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: { id: mockTodoList.id },
      data () {
        return {
          todoList: mockTodoList
        }
      },
      localVue,
      router,
      stubs: { RouterLink: RouterLinkStub }
    })
  })

  it('should render without problems', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should group todos properly', () => {
    expect(wrapper.findAll('[data-testId = todo]').length).toBe(2)
    expect(wrapper.findAll('[data-testId = completed-todo]').length).toBe(1)
  })
})
