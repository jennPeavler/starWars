import React from 'react';
import { mount, shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../App/App'
import { PeopleCard } from './PeopleCard'
import filmData from '../App/mockdata/filmData.js'
import peopleData from '../App/mockdata/peopleData.js'
import planetData from '../App/mockdata/planetData.js'
import vehicleData from '../App/mockdata/vehicleData.js'
import singlePersonData from '../App/mockdata/singlePersonData.js'
import dataScrubbers from '../DataScrubbers/DataScrubbers'

describe('PeopleCard', () => {
  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },1000)
    })
  }
  const mockFunc =jest.fn()

  beforeEach(() => {
    fetchMock.get('http://swapi.co/api/films/' , {
        status: 200,
        body: filmData
      })

    fetchMock.get('http://swapi.co/api/planets/' , {
        status: 200,
        body: planetData
      })


    fetchMock.get('http://swapi.co/api/vehicles/' , {
        status: 200,
        body: vehicleData
      })


    fetchMock.get('http://swapi.co/api/people/' , {
        status: 200,
        body: peopleData
      })
  })

  afterEach(() => {
    fetchMock.restore()
    expect(fetchMock.calls().unmatched).toEqual([])
  })

  it('should prepend a section with the className people-card', async () => {

    const wrapper = mount(<PeopleCard singlePerson={singlePersonData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCard = wrapper.find('.people-card').props()

    expect(singleCard.id).toEqual('C-3PO')
  })

  it('should have one header h2 and four h4 sub categories', async () => {
    const wrapper = mount(<PeopleCard singlePerson={singlePersonData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCardChildren = wrapper.find('.people-card').props().children
    const h2Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h2'
    })
    const h4Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h4'
    })
    
    expect(h2Count.length).toEqual(1)
    expect(h4Count.length).toEqual(4)
  })
})
