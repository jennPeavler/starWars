import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import filmData from './mockdata/filmData.js'
import peopleData from './mockdata/peopleData.js'
import planetData from './mockdata/planetData.js'
import vehicleData from './mockdata/vehicleData.js'

describe('App Component API Calls', () => {
  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },1000)
    })
  }

  afterEach(() => {
    fetchMock.restore()
    expect(fetchMock.calls().unmatched).toEqual([])
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('should return error quote if it does not fetch the quote from the film api', async () => {
    fetchMock.get('http://swapi.co/api/films' , {
        status: 500,
      })
      .catch()


    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('quotes')).toEqual('For quote more API calls you must have')
  })

  it('should have film quote scroll if film API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/films' , {
        status: 200,
        body: filmData
      })
      .catch()

      const wrapper = mount(<App />)

      await waitingFunc()

      expect(wrapper.state('quotes').length).toEqual(1)
  })

  it('should return error message in people state if it does not fetch the data from the people api', async () => {
    fetchMock.get('http://swapi.co/api/people' , {
        status: 500,
      })
      .catch()


    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('people')).toEqual('Need people, you do')
  })

  it('should have people in state if people API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/people' , {
        status: 200,
        body: peopleData
      })
      .catch()


      const wrapper = mount(<App />)

      await waitingFunc()
      let keys = Object.keys(wrapper.state('people'))
      expect(keys.length).toEqual(10)
  })

  it('should return error message in planets state if it does not fetch the data from the planet api', async () => {
    fetchMock.get('http://swapi.co/api/planets/' , {
        status: 500,
      }).catch()

    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('planets')).toEqual('Need planets, you do')
  })

  it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/planets/' , {
        status: 200,
        body: planetData
      }).catch()


      const wrapper = mount(<App />)

      await waitingFunc()

      let keys = Object.keys(wrapper.state('planets'))
      expect(keys.length).toEqual(10)
  })

  it('should return error message in vehicles state if it does not fetch the data from the vehicles api', async () => {
    fetchMock.get('http://swapi.co/api/vehicles/' , {
        status: 500,
      }).catch()

    const wrapper = mount(<App />)

    await waitingFunc()

    expect(wrapper.state('vehicles')).toEqual('Invisbile vehicles, you have!')
  })

  it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/vehicles/' , {
        status: 200,
        body: vehicleData
      }).catch()


      const wrapper = mount(<App />)

      await waitingFunc()

      let keys = Object.keys(wrapper.state('vehicles'))
      expect(keys.length).toEqual(10)
  })
})

describe('App handleClick function', () => {

  it('should change lastClicked state to people when people button is clicked', () => {
    const wrapper = mount(<App />)

    const peopleButton = wrapper.find('.people-btn')

    peopleButton.simulate('click')

    expect(wrapper.state('lastClick')).toEqual('people')
  })

  it('should change lastClicked state to planets when planets button is clicked', () => {
    const wrapper = mount(<App />)

    const planetsButton = wrapper.find('.planets-btn')

    planetsButton.simulate('click')

    expect(wrapper.state('lastClick')).toEqual('planets')
  })

  it('should change lastClicked state to vehicles when vehicles button is clicked', () => {
    const wrapper = mount(<App />)

    const vehiclesButton = wrapper.find('.vehicles-btn')

    vehiclesButton.simulate('click')

    expect(wrapper.state('lastClick')).toEqual('vehicles')
  })

  it('should change lastClicked state to favorites when favorites button is clicked', () => {
    const wrapper = mount(<App />)

    const favoritesButton = wrapper.find('#favorites-btn')

    favoritesButton.simulate('click')

    expect(wrapper.state('lastClick')).toEqual('favorites')
  })

})

describe('App handleToggle function', () => {
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

  it('should add the correct card obj to favorites when the card is clicked', async () => {
    const wrapper = mount(<App />)

    await waitingFunc()

    const peopleButton = wrapper.find('.people-btn')
    peopleButton.simulate('click')

    const cardToBeClicked = wrapper.find('#C-3PO')

    // console.log(cardToBeClicked)
    cardToBeClicked.simulate('click')
    await waitingFunc()
    expect(cardToBeClicked.props().id).toBe('C-3PO')
    expect(wrapper.state('favorites')[0].name).toEqual('C-3PO')
    expect(wrapper.state('favorites')[0].name).not.toEqual('Luke Skywalker')
  })

  it('should remove the correct card obj from favorites if it is clicked when it is already favorited', async () => {
    const wrapper = mount(<App />)

    await waitingFunc()

    const peopleButton = wrapper.find('.people-btn')
    peopleButton.simulate('click')

    const cardToBeClicked = wrapper.find('#C-3PO')

    // console.log(cardToBeClicked)
    cardToBeClicked.simulate('click')
    expect(wrapper.state('favorites').length).toEqual(1)

    await waitingFunc()

    cardToBeClicked.simulate('click')
    expect(wrapper.state('favorites').length).toEqual(0)
  })

  it('should be able to add multiple card to favorites', async () => {
    const wrapper = mount(<App />)

    await waitingFunc()

    const peopleButton = wrapper.find('.people-btn')
    peopleButton.simulate('click')

    const firstCard = wrapper.find('#C-3PO')
    const secondCard = wrapper.find('#R2-D2')


    firstCard.simulate('click')
    secondCard.simulate('click')
    expect(wrapper.state('favorites').length).toEqual(2)
    expect(wrapper.state('favorites').length).not.toEqual(1)

  })

  it('if there are multiple favorite card, and one is clicked, should remove the correct card', async () => {
    const wrapper = mount(<App />)

    await waitingFunc()

    const peopleButton = wrapper.find('.people-btn')
    peopleButton.simulate('click')

    const firstCard = wrapper.find('#C-3PO')
    const secondCard = wrapper.find('#R2-D2')


    firstCard.simulate('click')
    secondCard.simulate('click')
    firstCard.simulate('click')

    expect(wrapper.state('favorites')[0].name).toEqual('R2-D2')


  })

  it.only('should be able to make all three types of cards favorite card', async () => {
    const wrapper = mount(<App />)

    await waitingFunc()

    const peopleButton = wrapper.find('.people-btn')
    peopleButton.simulate('click')
    const peopleCard = wrapper.find('#R2-D2')
    peopleCard.simulate('click')

    const planetButton = wrapper.find('.planets-btn')
    planetButton.simulate('click')
    const planetCard = wrapper.find('#Naboo')
    planetCard.simulate('click')

    const vehicleButton = wrapper.find('.vehicles-btn')
    vehicleButton.simulate('click')
    const vehicleCard = wrapper.find('#AT-AT')
    vehicleCard.simulate('click')

    expect(wrapper.state('favorites').length).toEqual(3)





  })


})
