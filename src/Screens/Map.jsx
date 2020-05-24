import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

export class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGVkdmVnaWEiLCJhIjoiY2p1Z3kyYnZwMDJjdjN5bjd6NTF5ZHYxdCJ9.I88eMP-J0gJTh3mVlI1kzA';
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/hedvegia/cjugyx0je25zo1fp7yj88wn4x',
      center: [20.779229, 48.092413],
      zoom: 11.8,
      interactive: false
    })
    map.on('mousedown', function (e) {
      console.log(JSON.stringify(e.lngLat))
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: '0'
        }}
        id="map"
        className="Observe"
        ref={el => this.mapContainer = el}
      />
    )
  }
}
