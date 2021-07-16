/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layouts/location
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

import maps from '../molecules/maps'

const Contact = {
  init: () => {
    let mapElement = document.querySelector('#map-contact')

    if (!mapElement) {
      return
    }

    let map = maps.map(
      'map-contact',
      43.607997,
      3.886231,
      10
    )

    let layer = new ol.layer.Vector({
      style: new ol.style.Style(
        {
          image: new ol.style.Icon(
            {
              anchor: [
                0.5,
                0.5
              ],
              anchorXUnits: 'fraction',
              anchorYUnits: 'fraction',
              src: 'http://cdn.mapmarker.io/api/v1/pin?size=50&background=%23ED6F2D&text=P&color=%23FFFFFF&hoffset=1',
              scale: 0.6
            }
          )
        }
      ),
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.fromLonLat(
                [
                  mapCoordinates.longitude,
                  mapCoordinates.latitude
                ]
              )
            )
          })
        ]
      })
    })

    map.addLayer(layer)
  }
}

export default Contact
