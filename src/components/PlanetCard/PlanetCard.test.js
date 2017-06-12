import React from 'react';
import { mount, shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../App/App'
import { PlanetCard } from './PlanetCard'
import filmData from '../../mockdata/filmData.js'
import peopleData from '../../mockdata/peopleData.js'
import planetData from '../../mockdata/planetData.js'
import vehicleData from '../../mockdata/vehicleData.js'
import singlePlanetData from '../../mockdata/singlePlanetData.js'
import dataScrubbers from '../DataScrubbers/DataScrubbers'

describe('PlanetCard', () => {
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

  it('should prepend a section with the className planet-card', async () => {

    const wrapper = mount(<PlanetCard singlePlanet={singlePlanetData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCard = wrapper.find('.planet-card').props()

    expect(singleCard.id).toEqual('Naboo')
  })

  it('should have one header h2 and four h4 sub categories', async () => {
    const wrapper = mount(<PlanetCard singlePlanet={singlePlanetData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCardChildren = wrapper.find('.planet-card').props().children
    const h2Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h2'
    })
    const h4CountNonResident = singleCardChildren.filter((attr) => {
      return attr.type === 'h4'
    })
    const h4CountResident = singleCardChildren[5].filter((attr) => {
      return attr.type === 'h4'
    })
    const totalh4 = h4CountNonResident.length + h4CountResident.length

    expect(h2Count.length).toEqual(1)
    expect(totalh4).toEqual(6)
  })
})
