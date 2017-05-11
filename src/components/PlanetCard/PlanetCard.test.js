import React from 'react';
import { mount, shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../App/App'
import { PlanetCard } from './PlanetCard'
import filmData from '../App/mockdata/filmData.js'
import peopleData from '../App/mockdata/peopleData.js'
import planetData from '../App/mockdata/planetData.js'
import vehicleData from '../App/mockdata/vehicleData.js'
import singlePlanetData from '../App/mockdata/singlePlanetData.js'
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
      .catch()

      fetchMock.get('http://swapi.co/api/planets/' , {
          status: 200,
          body: planetData
        })
        .catch()

      fetchMock.get('http://swapi.co/api/vehicles/' , {
          status: 200,
          body: vehicleData
        })
        .catch()

      fetchMock.get('http://swapi.co/api/people/' , {
          status: 200,
          body: peopleData
        })
        .catch()
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

  it('should have one header h1 and four h3 sub categories', async () => {
    const wrapper = mount(<PlanetCard singlePlanet={singlePlanetData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCardChildren = wrapper.find('.planet-card').props().children
    console.log(singleCardChildren);

    const h1Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h1'
    })

    const h3CountNonResident = singleCardChildren.filter((attr) => {
      return attr.type === 'h3'
    })
    const h3CountResident = singleCardChildren[4].filter((attr) => {
      return attr.type === 'h3'
    })

    const totalh3 = h3CountNonResident.length + h3CountResident.length

    expect(h1Count.length).toEqual(1)
    expect(totalh3).toEqual(5)
  })
})
