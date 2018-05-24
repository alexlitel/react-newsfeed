import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FeedItem from './feed-item'

Enzyme.configure({ adapter: new Adapter() })

let fakeItem

beforeEach(() => {
  fakeItem = {
    id: 2723,
    createdAt: '2017-03-29T03:00:01.874Z',
    updatedAt: '2017-03-29T07:04:36.031Z',
    title: 'This is the title',
    summary: 'What summary.',
    url: 'https://www.google.com/foosite',
    topics: [
      {
        id: 1,
        name: 'Foo',
        description: null,
      },
    ],
    likesCount: 10,
    media: [{
      id: 1562,
      type: 'photo',
      url: 'https://picsum.photos/200/300',
      thumbnailUrl: null,
      mimeType: 'image/jpeg',
    }],
    attribution: {
      displayName: 'Google',
      type: 'publisher',
    },
  }
})

describe('FeedItem', () => {
  test('Renders date, source, summary, title, tags, image', () => {
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.html()).toContain('Google')
    expect(f.html()).toContain('March 29, 2017')
    expect(f.html()).toContain('This is the title')
    expect(f.html()).toContain('Foo')
    expect(f.html()).toContain('What summary')
    expect(f.html()).toContain('https://picsum.photos/200/300')
  })

  test('Renders "read more" link when there is no body', () => {
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.html()).toContain('Read More')
  })

  test('Does not render "read more" link when there is a body', () => {
    fakeItem.body = '<p>Foo</p>'
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.html()).not.toContain('Read More')
  })

  test('Renders body text when there is a body', () => {
    fakeItem.body = '<p>Foo</p>'
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.find('.app-feed-item-body')).toHaveLength(1)
  })

  test('Does not render image if no media', () => {
    fakeItem.media = []
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.find('img')).toHaveLength(0)
  })

  test('Does not render tags if no tags', () => {
    fakeItem.topics = []
    const f = render(<FeedItem item={fakeItem} />)
    expect(f.find('li')).toHaveLength(0)
  })
})
