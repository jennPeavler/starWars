import React from 'react';
import { SideBar } from './SideBar';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import filmData from '../../mockdata/filmData.js'
import DataScrubbers from '../DataScrubbers/DataScrubbers.js'


describe('SideBar', () => {

  const scrub = new DataScrubbers()
  const quotes = scrub.scrubQuotes(filmData)

  it('on page load, it should have a quote to scroll', () => {
    const wrapper = mount(<SideBar quotes={quotes}/>)

    expect(wrapper.props()).toHaveProperty('quotes')
    expect(wrapper.props().quotes.length).toBeGreaterThan(0)
  } )
})
