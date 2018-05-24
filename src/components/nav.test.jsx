import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import Nav from './nav'

Enzyme.configure({ adapter: new Adapter() })

describe('Nav', () => {
  test('Renders links', () => {
    function DummyComponent() {
      return (
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      )
    }
    const nav = render(<DummyComponent />)
    expect(nav.find('a')).toHaveLength(3)
  })
})
