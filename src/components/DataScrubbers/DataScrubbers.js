

export default class DataScrubbers {

  scrubQuotes(data) {
    let quotes = data.results.reduce((acc, val) => {
      acc.push(val.opening_crawl)
      return acc
    }, [])
    return quotes
  }

  scrubPeople(data) {

    let personalInfo = data.results.reduce((acc, val) => {
      if(!acc[val.name]) {

        acc[val.name] = {}
        acc[val.name].name = val.name

        //getting homeworld
        fetch(val.homeworld)
        .then((resp) => resp.json())
        .then((data) => {
          acc[val.name].homeworld=data.name
          acc[val.name].population=data.population
          return
        })

        fetch(val.species[0])
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.name)
          acc[val.name].species=data.name
          acc[val.name].language=data.language
          return
        })


      }
      console.log(acc)
      return acc
    }, {})
  }
    //To return
    // Luke: {
    //   Name: 'Luke'
    //   Homeworld: 'Tatoine'
    //   Species: 'Cyborg'
    //   Language: 'Spanish'
    //   Population: 200000
    // }


  // getData(url, key) {
  //
  //   fetch(url)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     return data[key]
  //   })
}
