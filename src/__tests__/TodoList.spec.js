import { shallowMount, createLocalVue } from '@vue/test-utils'
import TodoList from '@/components/TodoList'

const localVue = createLocalVue()

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
  ]
}

describe('TodoList', () => {
  it('should render without problems', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { id: mockTodoList.id },
      data () {
        return {
          todoList: mockTodoList
        }
      },
      localVue
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('should group todos properly', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { id: mockTodoList.id },
      data () {
        return {
          todoList: mockTodoList
        }
      },
      localVue
    })

    expect(wrapper.findAll('[data-testId = todo]').length).toBe(2)
    expect(wrapper.findAll('[data-testId = completed-todo]').length).toBe(1)
  })
})
