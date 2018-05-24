import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Topics from './topics'

Enzyme.configure({ adapter: new Adapter() })

let fakeTopics

beforeEach(() => {
  fakeTopics = Array.from(Array(10)).map((x, i) => ({
    id: i,
    topic: `topic${i}`,
    active: i % 2 === 0,
  }))
})

/* eslint-disable max-len */
describe('Topics', () => {
  test('Renders nothing when loading', () => {
    const f = shallow(<Topics isLoading loadTopics={() => true} toggleTopic={() => true} />)
    expect(f.html()).toEqual('<div class="app-topics-wrapper"></div>')
  })

  test('Renders nothing when no topics', () => {
    const f = shallow(<Topics isLoading={false} loadTopics={() => true} toggleTopic={() => true} topics={[]} />)
    expect(f.html()).toEqual('<div class="app-topics-wrapper"></div>')
  })

  test('Renders topics', () => {
    const f = shallow(<Topics isLoading={false} topics={fakeTopics} toggleTopic={() => true} loadTopics={() => true} />)
    expect(f.find('.app-topics-row')).toHaveLength(10)
    expect(f.find('.btn-active')).toHaveLength(5)
  })

  test('Fires loadTopics when mounting', () => {
    const mockLoad = jest.fn()
    shallow(<Topics isLoading={false} topics={fakeTopics} toggleTopic={() => true} loadTopics={mockLoad} />)
    expect(mockLoad).toBeCalled()
  })

  test('Button click fires topicToggle', () => {
    const mockToggle = jest.fn()
    const f = shallow(<Topics isLoading={false} topics={fakeTopics} toggleTopic={mockToggle} loadTopics={() => true} />)
    f.find('button').first().simulate('click')
    expect(mockToggle).toBeCalled()
    expect(mockToggle).toBeCalledWith(true, 0)
  })
})
/* eslint-enable max-len */
