import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './app'
import Routes from '../routes'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  test('Renders routes', () => {
    const app = shallow(<App isLoading={false} />)
    expect(app.find(Routes)).toHaveLength(1)
  })

  test('Renders loader when isLoading is true', () => {
    const app = shallow(<App isLoading />)
    expect(app.find('.app-loader')).toHaveLength(1)
  })

  test('Does not render loader when isLoading is false', () => {
    const app = shallow(<App isLoading={false} />)
    expect(app.find('.app-loader')).toHaveLength(0)
  })
})
