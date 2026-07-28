'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { supabase } from '@/lib/supabase';
import { Location } from '@/types';

// Custom dark-styled map marker
const customIcon = L.divIcon({
  className: 'custom-map-marker',
  html: `<div style="background-color: #C2A676; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #121210; box-shadow: 0 0 10px rgba(194,166,118,0.5);"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

export default function NomadMap() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const { data, error } = await supabase.from('locations').select('*');
        if (error || !data || data.length === 0) {
          setLocations([
            { id: '1', title: 'Bangkok & Chiang Mai', country: 'Thailand', latitude: 13.7563, longitude: 100.5018, status: 'current', created_at: '' },
            { id: '2', title: 'Mindanao Loop', country: 'Philippines', latitude: 8.1540, longitude: 125.1256, status: 'past', created_at: '' },
            { id: '3', title: 'Cairo & Sinai', country: 'Egypt', latitude: 30.0444, longitude: 31.2357, status: 'past', created_at: '' },
            { id: '4', title: 'Tokyo & Countryside', country: 'Japan', latitude: 35.6762, longitude: 139.6503, status: 'past', created_at: '' },
          ]);
        } else {
          setLocations(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="h-[450px] w-full rounded-2xl bg-earth-card border border-earth-muted/20 flex items-center justify-center text-earth-muted animate-pulse">
        Loading nomad footprint...
      </div>
    );
  }

  return (
    <div className="h-[450px] w-full rounded-2xl overflow-hidden border border-earth-muted/20 shadow-2xl relative z-10">
      <MapContainer 
        center={[15.0, 105.0]} 
        zoom={3} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', backgroundColor: '#1C1B18' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & CartoDB'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.latitude, loc.longitude]} icon={customIcon}>
            <Popup>
              <div className="p-2 text-earth-dark bg-earth-sand rounded-lg">
                <span className="text-[10px] font-bold uppercase tracking-wider text-earth-accent bg-earth-dark px-2 py-0.5 rounded">
                  {loc.status}
                </span>
                <h3 className="font-bold text-base mt-1">{loc.title}</h3>
                <p className="text-xs text-earth-muted">{loc.country}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}