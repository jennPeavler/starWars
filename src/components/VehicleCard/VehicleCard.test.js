import React from 'react';
import { mount, shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../App/App'
import { VehicleCard } from './VehicleCard'
import filmData from '../../mockdata/filmData.js'
import peopleData from '../../mockdata/peopleData.js'
import planetData from '../../mockdata/planetData.js'
import vehicleData from '../../mockdata/vehicleData.js'
import singleVehicleData from '../../mockdata/singleVehicleData.js'
import dataScrubbers from '../DataScrubbers/DataScrubbers'

describe('VehicleCard', () => {
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

  it('should prepend a section with the className vehicle-card', async () => {

    const wrapper = mount(<VehicleCard singleVehicle={singleVehicleData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCard = wrapper.find('.vehicle-card').props()
    expect(singleCard.id).toEqual('AT-AT')
  })

  it('should have one header h2 and four h4 sub categories', async () => {
    const wrapper = mount(<VehicleCard singleVehicle={singleVehicleData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCardChildren = wrapper.find('.vehicle-card').props().children
    const h2Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h2'
    })
    const h4Count = singleCardChildren.filter((attr) => {
      return attr.type === 'h4'
    })

    expect(h2Count.length).toEqual(1)
    expect(h4Count.length).toEqual(3)
  })
})
