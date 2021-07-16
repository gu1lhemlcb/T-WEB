/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/molecules/maps
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

const Maps = {
  mapTile: () => {
    return new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: '',
        url: 'https://api.mapbox.com/styles/arnaud-michel/ckr6i045b0rq717o1l4xl6qq3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJuYXVkLW1pY2hlbCIsImEiOiJja3I2aTFuZXczY2xsMm5xaDRnYXRzNmFlIn0._-1wFrDJqQ89bhSfAbr_0Q'
      })
    })
  },
  mapView: (longitude, latitude, zoom) => {
    return new ol.View({
      center: ol.proj.fromLonLat(
        [
          longitude,
          latitude
        ]
      ),
      zoom: zoom
    })
  },
  mapMarker: (feature) => {
    return new ol.style.Style(
      {
        geometry: feature.getGeometry(),
        image: new ol.style.Icon(
          {
            anchor: [
              0.5,
              0.5
            ],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            src: 'http://cdn.mapmarker.io/api/v1/pin?size=60&background=%23EB5F6D&color=%23FFFFFF&hoffset=1',
          }
        )
      }
    )
  },
  map: (element, longitude, latitude, zoom) => {
    return new ol.Map({
      target: element,
      view: Maps.mapView(longitude, latitude, zoom),
      interactions: ol.interaction.defaults(
        {
          mouseWheelZoom: false,
          onFocusOnly: true
        }
      ),
      layers: [
        Maps.mapTile()
      ]
    })
  }
}

export default Maps
