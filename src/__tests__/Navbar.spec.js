import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('should render without problems', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: { RouterLink: RouterLinkStub }
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('should not render login buttons if logged in', () => {
    const Parent = {
      data () {
        return {
          isLoggedIn: true
        }
      }
    }
    const wrapper = shallowMount(Navbar, {
      stubs: { RouterLink: RouterLinkStub },
      parentComponent: Parent
    })
    expect(wrapper.find('#login-buttons').exists()).toBeFalsy()
  })

  it('should show login form on login click', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: { RouterLink: RouterLinkStub }
    })

    expect(wrapper.vm.$data.showLogin).toBeFalsy()
    wrapper.find('#login').trigger('click')
    expect(wrapper.vm.$data.showLogin).toBeTruthy()
  })
})
