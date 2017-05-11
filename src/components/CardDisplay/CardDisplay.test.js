import React from 'react';
import { CardDisplay } from './CardDisplay';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import filmData from '../App/mockdata/filmData.js'
import peopleData from '../App/mockdata/peopleData.js'
import planetData from '../App/mockdata/planetData.js'
import vehicleData from '../App/mockdata/vehicleData.js'
import DataScrubbers from '../DataScrubbers/DataScrubbers.js'


describe('CardDisplay', () => {

  const scrub = new DataScrubbers()
  const people = scrub.scrubPeople(peopleData)
  const planets = scrub.scrubPlanets(planetData)
  const vehicles = scrub.scrubVehicles(vehicleData)


  it('should display 10 people cards if the people button is the last clicked', () => {

    const mockFn = jest.fn()
    const wrapper = mount(<CardDisplay lastClick='people' people={people} favoriteClass={mockFn}/>)

    expect(Object.keys(wrapper.props().people).length).toBe(10)

  })

  it('should display 10 vehicle cards if the vehicle button is the last clicked', () => {

    const mockFn = jest.fn()
    const wrapper = mount(<CardDisplay lastClick='vehicles' vehicles={vehicles} favoriteClass={mockFn}/>)

    expect(Object.keys(wrapper.props().vehicles).length).toBe(10)

  })

  it('should display 10 planet cards if the planet button is the last clicked', () => {

    const mockFn = jest.fn()
    const wrapper = mount(<CardDisplay lastClick='planets' planets={planets} favoriteClass={mockFn}/>)

    expect(Object.keys(wrapper.props().planets).length).toBe(10)

  })





})
