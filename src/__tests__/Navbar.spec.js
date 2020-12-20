import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('should render without problems', () => {
    const wrapper = shallowMount(Navbar, {
      stubs: { RouterLink: RouterLinkStub }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
