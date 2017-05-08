

export default class DataScrubbers {

  scrubQuotes(data) {
    //iterate over array
    console.log(data)
    let quotes = data.results.reduce((acc, val) => {
      acc.push(val.opening_crawl)
      return acc
    }, [])
    console.log(quotes);
    return quotes
  }
}
