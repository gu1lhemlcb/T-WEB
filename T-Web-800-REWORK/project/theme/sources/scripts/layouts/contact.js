/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layouts/location
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

import Maps from '../molecules/maps'

const Location = {
  init: () => {
    let mapElement = document.querySelector('#map-location')
    
    if (!mapElement ||  typeof mapLocations === 'undefined' ||  !mapCoordinates) {
      return
    }

    let map = Maps.map(
      'map-location',
      mapCoordinates.longitude,
      mapCoordinates.latitude,
      17,
    )

    let layer = new ol.layer.Vector({
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: 'http://cdn.mapmarker.io/api/v1/pin?size=60&background=%23EB5F6D&color=%23FFFFFF&hoffset=1',
          scale: 0.6,
        }),
      }),
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.fromLonLat([
                mapCoordinates.longitude,
                mapCoordinates.latitude,
              ]),
            ),
          }),
        ],
      }),
    })

    map.addLayer(layer)

    let popup = new ol.Overlay.Popup()

    map.addOverlay(popup)

    map.on('singleclick', function (evt) {
      popup.hide()
      popup.setOffset([0, 0])

      let feature = map.forEachFeatureAtPixel(evt.pixel, function (
        feature,
        layer,
      ) {
        return feature
      })

      if (feature) {
        let coordinates = feature.getGeometry().getCoordinates()
        let props = mapLocations[0]
        let name = props.name
        let info = ''

        info += `
          <span class="a--h3">
            ${name}<br>
          </span>
        `

        popup.setOffset([0, -25])

        popup.show(coordinates, info)
      } else {
        if (feature) {
          let view = map.getView()
          let featureCoordinates = feature.getGeometry().getCoordinates()
          let currentZoom = view.getZoom()

          view.animate({
            center: featureCoordinates,
            zoom: currentZoom + 2,
            duration: 1000,
          })
        }
      }

      map.on('pointermove', function (evt) {
        let feature = map.forEachFeatureAtPixel(evt.pixel, function (
          feature,
          layer,
        ) {
          return feature
        })

        if (feature) {
          this.getTargetElement().style.cursor = 'pointer'
        } else {
          this.getTargetElement().style.cursor = ''
        }
      })
    })
  },
}

export default Location
