import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps';

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [99.0, -29.0, -360],
                center: [-3, -3],
                scale: 1000,
            }}
            style={{ width: '100%', height: '100%' }}
        >
            <Geographies
                geography="../features.json"
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[24.144, -110.312]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: '#FF5533',
                    strokeWidth: 3,
                    strokeLinecap: 'round',
                }}
            >
                <text
                    x="-8"
                    textAnchor="end"
                    alignmentBaseline="middle"
                    fill="#F53"
                >
                    {'La Paz'}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
