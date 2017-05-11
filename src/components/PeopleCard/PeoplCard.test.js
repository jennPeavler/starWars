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

  it('should prepend a section with the className people-card', async () => {

    const mockFunc =jest.fn()
    const wrapper = mount(<PeopleCard singlePerson={singlePersonData} favoriteClass={mockFunc} favorites={[]} />)

    await waitingFunc()

    const singleCard = wrapper.find('.people-card').props()
    console.log(wrapper.find('.people-card').props());
    expect(singleCard.id).toEqual('C-3PO')
    // const peopleButton = wrapper.find('people-btn')

    // peopleButton.simulate('click')

    // const peopleCard = wrapper.find('.people-card')


    // const wrapperTwo = mount(<PeopleCard />)

    // console.log(wrapperTwo);
  })
})
