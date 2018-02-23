'use strict';

const gmap = require('@google/maps');

function location(params) {
  //console.log("API Key", process.env.GOOGLE_MAPS_API_KEY)
  //console.log("Coords", params.coords)

  const latlng = JSON.parse(JSON.stringify(params.coords))

  const gmapClient = gmap.createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
    Promise: Promise
  })

  return gmapClient.reverseGeocode({
    "latlng": latlng,
    "result_type": "postal_code"
  }).asPromise()
    .then((response) => {
      let status = response.json.status
      let location = ""
      if (status === 'OK') {
        location = response.json.results[0].formatted_address
      }
      return { status: status, location: location }
    }).catch((err) => {
      console.log("Err: ", err)
      return { status: err, location: "unknown" }
    })
}

global.main = location;
