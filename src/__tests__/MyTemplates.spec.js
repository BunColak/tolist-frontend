import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MyTemplatesList from '@/components/MyTemplatesList'

const mockTemplates = [
  {
    id: 1,
    title: 'Title 1'
  },
  {
    id: 2,
    title: 'Title 2'
  },
  {
    id: 3,
    title: 'Title 3'
  }
]

describe('MyTemplatesList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MyTemplatesList, {
      data () {
        return { templates: mockTemplates }
      },
      stubs: { RouterLink: RouterLinkStub }
    })
  })

  it('should render properly', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correct links', () => {
    wrapper = shallowMount(MyTemplatesList, {
      data () {
        return { templates: mockTemplates }
      },
      stubs: { RouterLink: RouterLinkStub }
    })
    expect(wrapper.findAll('a').length).toEqual(mockTemplates.length)
    wrapper.findAll('a').wrappers.forEach((wp, i) => {
      expect(wp.props('to')).toEqual(`/templates/${mockTemplates[i].id}`)
    })
  })
})
