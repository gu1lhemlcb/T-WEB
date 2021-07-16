/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layouts/locations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

import maps from '../molecules/maps'

const Locations = {
  init: () => {
    let mapElement = document.querySelector('#map-locations')

    if (!mapElement || typeof mapLocations === 'undefined' || !mapLocations) {
      return
    }

    let map = maps.map(
      'map-locations',
      1.433333,
      43.5,
      window.matchMedia("(max-width: 1100px)").matches ? 2 : 2
    )

    let features = []

    if (Object.keys(mapLocations).length > 0) {
      for (let [key, location] of Object.entries(mapLocations)) {
        let feature = new ol.Feature({
          type: 'click',
          location: location,
          geometry: new ol.geom.Point(
            ol.proj.transform(
              [
                location.coordinates.longitude,
                location.coordinates.latitude
              ],
              'EPSG:4326',
              'EPSG:3857'
            )
          )
        })

        features.push(feature)
      }
    }

    let currentResolution
    let maxFeatureCount
    let vector = null

    let calculateClusterInfo = function (resolution) {
      maxFeatureCount = 0
      let features = vector.getSource().getFeatures()

      let feature
      let radius

      for (let i = features.length - 1; i >= 0; --i) {
        feature = features[i]

        let originalFeatures = feature.get('features')
        let extent = ol.extent.createEmpty()

        let j = (void 0)
        let jj = (void 0)

        for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
          ol.extent.extend(extent, originalFeatures[j].getGeometry().getExtent())
        }

        maxFeatureCount = Math.max(maxFeatureCount, jj)

        radius = 0.25 * (ol.extent.getWidth(extent) + ol.extent.getHeight(extent)) / resolution

        feature.set('radius', radius)
      }
    }

    let styleFunction = function (feature, resolution) {
      if (resolution != currentResolution) {
        calculateClusterInfo(resolution)
        currentResolution = resolution
      }

      let style
      let size = feature.get('features').length

      if (size > 1) {
        style = new ol.style.Style({
          image: new ol.style.Circle({
            radius: feature.get('radius'),
            fill: new ol.style.Fill({
              color: [74, 171, 206, Math.min(0.9, 0.6 + (size / maxFeatureCount))]
            })
          }),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({
              color: '#FFFFFF'
            })
          })
        })
      } else {
        let originalFeature = feature.get('features')[0]
        style = maps.mapMarker(originalFeature)
      }

      return style
    }

    vector = new ol.layer.Vector({
      source: new ol.source.Cluster({
        distance: 40,
        source: new ol.source.Vector({
          features: features
        })
      }),
      style: styleFunction,
      updateWhileAnimating: true,
      updateWhileInteracting: true
    })

    map.addLayer(vector)

    let popup = new ol.Overlay.Popup()

    map.addOverlay(popup)

    map.on('singleclick', function (evt) {
      popup.hide()
      popup.setOffset(
        [
          0,
          0
        ]
      )

      let feature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature, layer) {
          return feature
        }
      )

      if (feature && feature.getProperties().features.length === 1) {
        let coordinates = feature.getGeometry().getCoordinates()
        let props = feature.getProperties().features[0].getProperties()

        let info = ''

        info += `
          <h3>
            ${props.location.name}
          </h3>
          ${props.location.address}
          <p>
            ${props.location.zip} ${props.location.city}
          </p>
          <a class="button" href="${props.location.google}" target="_blank" title="En savoir plus">
            <span></span>
            <span>
              En savoir plus
            </span>
          </a>
        `

        popup.setOffset(
          [
            0,
            -25
          ]
        )

        popup.show(coordinates, info)
      } else {
        if (feature) {
          let view = map.getView()
          let featureCoordinates = feature.getGeometry().getCoordinates()
          let currentZoom = view.getZoom()

          view.animate({
            center: featureCoordinates,
            zoom: currentZoom + 2,
            duration: 1000
        })
        }
      }

      map.on(
        'pointermove',
        function (evt) {
          let feature = map.forEachFeatureAtPixel(
            evt.pixel,
            function (feature, layer) {
              return feature
            }
          )

          if (feature && feature.getProperties().features.length === 1) {
            this.getTargetElement().style.cursor = 'pointer'
          } else {
            this.getTargetElement().style.cursor = ''
          }
        }
      )
    })
  }
}

export default Locations
