import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default marker icon issue with Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// TypeScript Type for Incident Data
type Incident = {
  Name: string;
  Location: string;
  County: string;
  AcresBurned: number;
  PercentContained: number;
  Latitude: number;
  Longitude: number;
  IsActive: boolean;
};

const FireMap: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await fetch(
          "https://incidents.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=true"
        );
        const data: Incident[] = await response.json();
        setIncidents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching incidents:", error);
        setLoading(false);
      }
    };
    fetchIncidents();
  }, []);

  // Dynamic color logic for fire severity
  const getCircleColor = (acresBurned: number) => {
    if (acresBurned < 10) return "green";
    if (acresBurned < 50) return "orange";
    return "red";
  };

  if (loading) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ height: "95vh", width: "98vw", margin: "0 auto" }}>
      <MapContainer
        center={[37.5, -119]} // Center of California
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Map incidents */}
        {incidents.map((incident, index) => (
          <Circle
            key={index}
            center={[incident.Latitude, incident.Longitude]}
            radius={Math.max(incident.AcresBurned * 50, 2000)} // Bigger circles with a minimum size
            color={getCircleColor(incident.AcresBurned)}
            fillOpacity={0.7}
          >
            <Popup>
              <h3>{incident.Name}</h3>
              <p><strong>Location:</strong> {incident.Location}</p>
              <p><strong>County:</strong> {incident.County}</p>
              <p><strong>Acres Burned:</strong> {incident.AcresBurned}</p>
              <p><strong>Percent Contained:</strong> {incident.PercentContained}%</p>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default FireMap;
