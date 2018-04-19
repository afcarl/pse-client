const axios = require("axios");
const equities = []

// Purges the cached data for the equities
const purge = () => {

}

// Build the cached data for the equities
const build = () => {
  let pEquitites = [];
  let urlArray = []

  axios
    .get("http://api.pse.tools/api/stocks")
    .then(response => {
      for(let i = 0; i < response.data.data.length; i++) {
        urlArray.push(createUrlForSymbol(response.data.data[i].symbol));
      }


      let promiseArray = urlArray.map(url => axios.get(url));
      axios.all(promiseArray)
      .then(function(results) {
        let temp = results.map(r => r.data);
        console.log(temp);
      });

    })

}

const getEquities = () => {
    return equities;
}

function createUrlForSymbol(symbol) {
  return `http://api.pse.tools/api/chart/symbols/?symbol=${symbol}`
}

build();
