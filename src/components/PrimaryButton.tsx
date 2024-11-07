import { cn } from '@/lib/utils'
import React from 'react'

const PrimaryButton = ({
    className
} : {
    className? : string
}) => {
  return (
    <button className={
        cn("bg-black text-white rounded-lg px-12 py-2" , className)
    }>
        check
    </button>
  )
}

export default PrimaryButton