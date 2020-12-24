import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem'

const mockTodo = {
  id: 1,
  text: 'Test Text',
  completed: false
}

describe('TodoItem', () => {
  it('should render without problems', () => {
    const wrapper = shallowMount(TodoItem, { propsData: { todo: mockTodo } })
    expect(wrapper).toMatchSnapshot()
  })

  it('should emit toggle with correct parameters', async () => {
    const wrapper = shallowMount(TodoItem, { propsData: { todo: mockTodo } })
    wrapper.find('input').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().toggleTodo).toBeTruthy()
    expect(wrapper.emitted().toggleTodo.length).toBe(1)
    expect(wrapper.emitted().toggleTodo[0]).toEqual([mockTodo.id])
  })
})
