import React from 'react';
import CardDisplay from './CardDisplay';
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

  it('should display 10 people card if the people button is the last clicked', () => {

    const wrapper = shallow(<CardDisplay lastClick='people' people={people} />)
    // const wrapper = shallow(<CardDisplay />)

    // Can't get this to work, but essentiall all I need to do is do tests for all categories and pass in data and lastClick equalling correct
    // card type and then test do see if it renders 10 cards or in the case of favorites, however many cards I favorites.

    //For whatever reason, I am not able to shallow or mount the <CardDisplay /> with or without properties

  })





})
