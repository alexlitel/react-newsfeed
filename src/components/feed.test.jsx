import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Feed from './feed'
import FeedItem from './feed-item'

Enzyme.configure({ adapter: new Adapter() })

describe('Feed', () => {
  test('Renders nothing when loading', () => {
    const f = shallow(<Feed isLoading loadFeed={() => true} />)
    expect(f.html()).toEqual('<div class="app-feed-wrapper"></div>')
  })

  test('Renders missing topics text when no topics/articles exist', () => {
    const f = render(<Feed isLoading={false} loadFeed={() => true} />)
    expect(f.find('.app-feed-missing-text')).toHaveLength(1)
  })

  test('Renders feed item when articles exist', () => {
    const fakeItem = {
      id: 2723,
      createdAt: '2017-03-29T03:00:01.874Z',
      updatedAt: '2017-03-29T07:04:36.031Z',
      title: 'Dogs Are Great',
      summary: 'New study confirms greatness of dogs.',
      url: 'https://www.nytimes.com/dogs',
      topics: [
        {
          id: 35,
          name: 'dog',
          description: null,
        },
      ],
      likesCount: 10,
      media: [],
      attribution: {
        displayName: 'New York Times',
        type: 'publisher',
      },
    }
    const f = shallow(<Feed isLoading={false} loadFeed={() => true} feedItems={[fakeItem]} />)
    expect(f.find(FeedItem)).toHaveLength(1)
  })

  test('Fires loadFeed event when mounting', () => {
    const mockLoad = jest.fn()
    shallow(<Feed isLoading={false} loadFeed={mockLoad} feedItems={[]} />)
    expect(mockLoad).toHaveBeenCalled()
  })
})
