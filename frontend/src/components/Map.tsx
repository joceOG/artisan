import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../styles/Map.css';

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const artisangeo = { lng: -3.9717127485255332 , lat: 5.383020677660781  }; 
  const [zoom, setZoom] = useState<number>(14);
  maptilersdk.config.apiKey = '9KS4hqrv0EjbVAKfbMEp';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [artisangeo.lng, artisangeo.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([139.7525,35.6846])
      .addTo(map.current);
  }, [artisangeo.lng, artisangeo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;

