import React from 'react';
import DataScrubbers from './DataScrubbers'
import filmData from '../App/mockdata/filmData.js'
import peopleData from '../App/mockdata/peopleData.js'
import planetData from '../App/mockdata/planetData.js'
import vehicleData from '../App/mockdata/vehicleData.js'

describe('dataScrubbers functionality', () => {
  const dataScrubbers = new DataScrubbers

  it('scrubQuotes returns a single opening_crawl', () => {
    let results = dataScrubbers.scrubQuotes(filmData)

    expect(typeof results).toBe('string')
  })

  it('scrubPeople returns an object for each person in data', () => {
    let results = dataScrubbers.scrubPeople(peopleData)

    expect(typeof results).toBe('object')
    expect(Object.keys(results).length).toEqual(10)
  })

  it('scrubPlanets returns an object for each planet in data', () => {
    let results = dataScrubbers.scrubPlanets(planetData)

    expect(typeof results).toBe('object')
    expect(Object.keys(results).length).toEqual(10)
  })

  it('scrubVehicles returns an object for each vehicle in data', () => {
    let results = dataScrubbers.scrubVehicles(vehicleData)

    expect(typeof results).toBe('object')
    expect(Object.keys(results).length).toEqual(10)
  })

  it('favoriteClass returns an empty string if favorites array is empty', () => {
    let results = dataScrubbers.favoriteClass('obi-wan', [])

    expect(typeof results).toBe('string')
    expect(results).toEqual('')
  })

  it('favoriteClass returns selected for any matching object', () => {
    let results = dataScrubbers.favoriteClass('obi-wan', ['obi-wan':{name: 'obi-wan', type: 'people'}])

    expect(typeof results).toBe('string')
    expect(results).toEqual('selected')
  })
})
