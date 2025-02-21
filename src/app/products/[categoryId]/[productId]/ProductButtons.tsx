'use client'

import { Button } from "@/components/ui/button"

export default function ProductButtons() {
  return (
    <div className="mt-auto space-y-4">
      <Button 
        className="w-full bg-[#D84315] cursor-pointer hover:bg-[#BF360C] text-white h-11"
        onClick={() => {
          // Handle send inquiry
        }}
      >
        Send Inquiry
      </Button>
      <Button 
        variant="outline" 
        className="w-full cursor-pointer border-[#D84315] text-[#D84315] hover:bg-[#D84315] hover:text-white h-11"
        onClick={() => {
          // Handle get quote
        }}
      >
        Get Best Quote
      </Button>
    </div>
  )
}
