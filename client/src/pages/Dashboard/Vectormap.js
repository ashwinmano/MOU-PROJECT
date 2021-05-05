import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import "./jquery-jvectormap.css";

export class Vectormap extends Component {
  render() {
    return (
      <div style={{ width: this.props.width, height: 250 }}>
        <VectorMap
          map={this.props.value}
          backgroundColor="transparent"
          ref="map"
          containerStyle={{
            width: "100%",
            height: "80%"
          }}
          regionStyle={{
            initial: {
              fill: this.props.color,
              stroke: "#74788d",
              "stroke-width": 1,
              "stroke-opacity": 0.4
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" //what colour clicked country will be
            },
            selectedHover: {}
          }}
          containerClassName="map"


          markerStyle={{
            initial: {
                r: 5,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 1,
                'stroke-opacity': 0.4
            },
        }}
        markers={[{
            latLng: [21.00, 78.00],
            name: 'INDIA : 350'

        },
        {
            latLng: [-33.00, 151.00],
            name: 'Australia : 250'

        },
        {
            latLng: [36.77, -119.41],
            name: 'USA : 250'

        },
        {
            latLng: [55.37, -3.41],
            name: 'UK   : 250'

        },
        {
            latLng: [25.20, 55.27],
            name: 'UAE : 250'

        },
        {
            latLng: [35.65, 139.83],
            name: 'JP : 37'

        },
        {
            latLng: [-23.53, -46.62],
            name: 'BR : 162'

        },
        {
            latLng: [50.43, 30.51],
            name: 'UA : 129'

        }]
        }
        series={{
            regions: [{
                values: {
                    "US": '#5893d4',
                    "SA": '#5893d4',
                    "AU": '#5893d4',
                    "IN": '#5893d4',
                    "GB": '#5893d4',
                    "JP": '#5893d4',
                    "BR": '#5893d4',
                    "UA": '#5893d4',
                },
                attribute: 'fill'
            }]
        }}
        hoverOpacity={null}
        normalizeFunction='linear'
        zoomOnScroll={true}
        scaleColors={['#000000', '#000000']}
        selectedColor='#000000'
        selectedRegions={[]}
        enableZoom={false}
        hoverColor='#fff'
        />
      </div>
    );
  }
}

export default Vectormap;
