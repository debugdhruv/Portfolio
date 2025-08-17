"use client"

import { useState } from "react"
import PreLoader from "@/components/PreLoader"

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)

  if (showLoader) {
    return <PreLoader onComplete={() => setShowLoader(false)} />
  }

  return <>{children}</>
}