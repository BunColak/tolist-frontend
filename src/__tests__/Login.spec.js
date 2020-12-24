import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'

const localVue = createLocalVue()

describe('Login', () => {
  it('should render without problems', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper).toMatchSnapshot()
  })

  it('should request login on form submit', () => {
    const mutate = jest.fn()
    mutate.mockResolvedValue({
      data: {
        login: {
          token: 'test'
        }
      }
    })
    const wrapper = shallowMount(Login, {
      localVue,
      mocks: {
        $apollo: {
          mutate
        }
      }
    })

    const variables = {
      username: 'test',
      password: 'test'
    }

    wrapper.setData(variables)

    wrapper.find('form').trigger('submit')

    expect(mutate).toBeCalledWith(
      expect.objectContaining({
        variables
      })
    )
  })

  it('should display errors in a list if there is an error', async () => {
    const mutate = jest.fn()
    const errors = ['Error 1', 'Error 2']
    mutate.mockRejectedValueOnce({
      graphQLErrors: errors.map(e => ({ message: e }))
    })

    const wrapper = shallowMount(Login, {
      localVue,
      mocks: {
        $apollo: {
          mutate
        }
      }
    })

    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('ul').exists()).toBeTruthy()
    expect(wrapper.findAll('li').length).toEqual(2)
  })

  it('should set token in root on login', async () => {
    const mutate = jest.fn()
    const mockToken = 'testToken'
    const Parent = {
      data () {
        return {
          token: ''
        }
      }
    }

    mutate.mockResolvedValue({
      data: {
        login: {
          token: mockToken
        }
      }
    })
    const wrapper = shallowMount(Login, {
      localVue,
      mocks: {
        $apollo: {
          mutate
        }
      },
      parentComponent: Parent
    })

    const variables = {
      username: 'test',
      password: 'test'
    }

    wrapper.setData(variables)
    wrapper.find('form').trigger('submit')

    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$root.token).toEqual(mockToken)
  })
})
