import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import filmData from './mockdata/filmData.js'
import peopleData from './mockdata/peopleData.js'
import planetData from './mockdata/planetData.js'
import vehicleData from './mockdata/vehicleData.js'

describe('App', () => {
  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },1000)
    })
  }

  // afterEach(() => {
  //   expect(fetchMock.calls().unmatched).toEqual([])
  //   fetchMock.restore()
  // })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('should return error quote if it does not fetch the quote from the film api', async () => {
    fetchMock.get('http://swapi.co/api/films' , {
        status: 500,
      })
      .catch(
        console.log('noooooo')
      )

    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('quotes')).toEqual('For quote more API calls you must have')
  })

  it('should have film quote scroll if film API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/films' , {
        status: 200,
        body: filmData
      })
      .catch(
        console.log('noooooo')
      )

      const wrapper = mount(<App />)

      await waitingFunc()
      console.log(wrapper.state())
      expect(wrapper.state('quotes').length).toEqual(1)
  })

  it('should return error prop in people state if it does not fetch the data from the people api', async () => {
    fetchMock.get('http://swapi.co/api/people' , {
        status: 500,
      })
      .catch(
        console.log('noooooo')
      )

    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('people')).toEqual('Need people, you do')
  })

  it.only('should have people in state if people API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/people' , {
        status: 200,
        body: peopleData
      })
      .catch(
        console.log('noooooo')
      )

      const wrapper = mount(<App />)

      await waitingFunc()
      let keys = Object.keys(wrapper.state('people'))
      expect(keys.length).toEqual(10)
  })

})
