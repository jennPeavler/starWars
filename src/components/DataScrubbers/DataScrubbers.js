export default class DataScrubbers {

  secureWebsite(unsecureUrl) {
    let secure = unsecureUrl.substr(0, 4) + 's'
    let path = unsecureUrl.substr(4)
    let securePath = secure + path
    return securePath
  }

  scrubQuotes(data) {
    let quotes = data.results.reduce((acc, val) => {
      acc.push(val.opening_crawl)
      return acc
    }, [])
    let randomNumber = Math.floor(Math.random()*7)
    return quotes[randomNumber]
  }

  scrubPeople(data) {
    return data.results.reduce((acc, val) => {
        acc[val.name] = {}
        acc[val.name].name = val.name
        acc[val.name].type = 'people'

        fetch(this.secureWebsite(val.homeworld))
        .then((resp) => resp.json())
        .then((data) => {
          acc[val.name].homeworld=data.name
          acc[val.name].population=data.population
        })

        fetch(this.secureWebsite(val.species[0]))
        .then((resp) => resp.json())
        .then((data) => {
          acc[val.name].species=data.name
          acc[val.name].language=data.language
        })
      return acc
    }, {})
  }

  scrubPlanets(data) {
      return data.results.reduce((acc, val) => {
          if(!acc[val.name]) {
            acc[val.name] = {}
            acc[val.name].name = val.name
            acc[val.name].type = 'planets'
            acc[val.name].terrain = val.terrain
            acc[val.name].population = val.population
            acc[val.name].climate = val.climate
            acc[val.name].residents = []

            val.residents.forEach((resident, i) => {
              fetch(this.secureWebsite(resident))
              .then((resp) => resp.json())
              .then((data) => {
                  acc[val.name].residents.push(data.name)
              })
            })
          }
        return acc
      }, {})
    }

  scrubVehicles(data) {
      return data.results.reduce((acc, val) => {
        if(!acc[val.name]) {
          acc[val.name] = {}
          acc[val.name].name = val.name
          acc[val.name].type = 'vehicles'
          acc[val.name].model = val.model
          acc[val.name].class = val.vehicle_class
          acc[val.name].numberOfPassengers = val.passengers
        }
        return acc
      }, {})
    }

  favoriteClass(name, favorites) {
    if (favorites.length === 0) {
      return ""
    } else if (favorites.length) {
      let match = favorites.find((val) => {
        return val === name
      })
      if (match) {
        return 'selected'
      }
    }
  }
}
