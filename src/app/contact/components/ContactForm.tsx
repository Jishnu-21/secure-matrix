'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '600px',
  borderRadius: '0'
}

const center = {
  lat: 40.7589,
  lng: -73.9851
}

const markers = [
  { lat: 40.7589, lng: -73.9851 },
  { lat: 40.7549, lng: -73.9840 }
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-2">Contact us</h1>
        <div className="w-12 h-0.5 bg-[#D84315]"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-0 h-[600px]">
        <div className="w-full h-full">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="flex flex-col bg-[#e6eaf0] p-8 h-full">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-xl font-semibold text-black mb-2">
              Restons Connectés pour Booster Vos Ventes
            </h2>
            <div className="w-12 h-0.5 bg-[#D84315]"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
            <div>
              <Input
                placeholder="Input Text Label"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm"
              />
            </div>
            <div>
              <Input
                placeholder="Input Text Label"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm"
              />
            </div>
            <div className="flex-grow">
              <Textarea
                placeholder="Bonjour..."
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[240px] bg-white border-0 text-black placeholder:text-gray-500 shadow-sm"
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="w-24 bg-[#D84315] hover:bg-[#BF360C] text-white h-10"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
