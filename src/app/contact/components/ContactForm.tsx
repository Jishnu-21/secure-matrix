'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

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
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Contact us</h1>
        <div className="w-12 h-0.5 bg-[#D84315]"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-0">
        <div className="w-full h-[600px]">
          <iframe 
            src="https://maps.google.com/maps?q=18.71150307086937,73.83990901335487&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

        <div className="flex flex-col bg-[#e6eaf0] p-8 min-h-[600px]">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-xl font-bold text-black mb-2">
            Get in touch for inquiries, support, or collaboration. We're here to assist you.
            </h2>
            <div className="w-12 h-0.5 bg-[#D84315]"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
            <div>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm"
              />
            </div>
            <div>
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm"
              />
            </div>
            <div className="flex-grow">
              <Textarea
                placeholder="Message"
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
