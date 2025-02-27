"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  // Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-ant-path";
import L from "leaflet";
import { useState } from "react";
import CityModal from "./CityModal"; // Modal komponentini chaqiramiz

// Shaharlar ma’lumotlari
const locations = [
  {
    id: 1,
    name: "Samarqand",
    position: [39.654, 66.959],
    image: "/samarkand.jpeg",
    description:
      "Samarqand - Amir Temurning poytaxti bo‘lib, Temuriylar davrida gullab-yashnagan.",
  },
  {
    id: 2,
    name: "Buxoro",
    position: [39.768, 64.455],
    image: "/bukhara.jpeg",
    description:
      "Buxoro - tarixiy shahar bo‘lib, Amir Temur davrida muhim madaniy markazlardan biri bo‘lgan.",
  },
  {
    id: 3,
    name: "Dehli Sultonligi",
    position: [28.6139, 77.209],
    image: "/dehli.jpeg",
    description:
      "Dehli Sultonligi Amir Temur tomonidan bosib olingan va u yerda Temuriylar ta’siri kuchaygan.",
  },
  {
    id: 4,
    name: "Bag‘dod (Mamluk Sultonligi)",
    position: [33.3152, 44.3661],
    image: "/baghdad.jpeg",
    description:
      "Bag‘dod Amir Temur yurishlari davomida egallangan va u yerdagi siyosiy ta’siri mustahkamlangan.",
  },
  {
    id: 5,
    name: "Damashq (Mamluk Sultonligi)",
    position: [33.5138, 36.2765],
    image: "/damascus.jpeg",
    description:
      "Damashq Amir Temur tomonidan bosib olingan va qisqa muddatda Temuriylar ta’siri ostida bo‘lgan.",
  },
  {
    id: 6,
    name: "Usmonlilar Davlati (Bursa)",
    position: [40.1824, 29.0669],
    image: "/bursa.jpeg",
    description:
      "Bursa Amir Temur va Usmonlilar o‘rtasidagi to‘qnashuvlarning markazlaridan biri bo‘lgan.",
  },
  {
    id: 7,
    name: "Istanbul (Usmonlilar)",
    position: [41.0082, 28.9784],
    image: "/istanbul.jpeg",
    description:
      "Istanbul Temuriylar va Usmonlilar o‘rtasidagi siyosiy mojarolar davomida katta ahamiyat kasb etgan.",
  },
  {
    id: 8,
    name: "Oltin O‘rda (Saray-Berke)",
    position: [48.711, 45.3544],
    image: "/saray-berke.jpeg",
    description:
      "Saray-Berke Amir Temur tomonidan bosib olingan va Oltin O‘rdaga nisbatan hukmronlik o‘rnatilgan.",
  },
  {
    id: 9,
    name: "Eron (Isfahon)",
    position: [32.6546, 51.667],
    image: "/isfahan.jpeg",
    description:
      "Isfahon Temuriylar imperiyasi tarkibiga kirgan va madaniy jihatdan muhim shahar bo‘lgan.",
  },
  {
    id: 10,
    name: "Kavkaz (Tbilisi)",
    position: [41.6938, 44.8015],
    image: "/tbilisi.jpg",
    description:
      "Tbilisi Amir Temur yurishlari davomida egallangan va strategik ahamiyatga ega bo‘lgan.",
  },
];

const routeCoordinates = locations.map((loc) => loc.position);
const polylineOptions = { color: "green", weight: 2, opacity: 0.8 };

export default function Maps() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Amir Temurning Yurishlari
      </h2>

      <div className="max-w-4xl mx-auto h-96 rounded-lg z-0 overflow-hidden shadow-lg">
        <MapContainer
          center={[39.654, 66.959]}
          zoom={4}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={loc.position}
              icon={L.icon({
                iconUrl: "/marker-icon.svg",
                iconSize: [32, 32],
              })}
              eventHandlers={{
                click: () => openModal(loc),
              }}
            >
              {/* <Popup>{loc.name}</Popup> */}
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                {loc.name}
              </Tooltip>
            </Marker>
          ))}
          <Polyline
            positions={routeCoordinates}
            pathOptions={polylineOptions}
          />
        </MapContainer>
      </div>

      {/* Modal */}
      <CityModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        city={selectedCity}
      />
    </div>
  );
}
