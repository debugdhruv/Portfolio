"use client"

import { useState } from "react"
import PreLoader from "@/components/PreLoader"

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <>
      {showLoader && (
        <PreLoader onComplete={() => setShowLoader(false)} />
      )}
      
      {/* div will be hidden during preloader and shown after */}
      <div style={{ 
        visibility: showLoader ? 'hidden' : 'visible',
        opacity: showLoader ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}>
        {children}
      </div>
    </>
  )
}