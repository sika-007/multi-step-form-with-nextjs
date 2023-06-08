import React from 'react'
import Step from './Step'

const Navigation:React.FC = ():JSX.Element => {

  const stepNames: string[] = [
    "Your Info",
    "Select Plan",
    "Add-Ons",
    "Summary"
  ]

  const stepItems: React.ReactNode[] = stepNames.map((step: string, index: number) => (
    <Step step={step} index={index + 1} />
  ))


  return (
    <div className='px-2 py-10 flex flex-wrap justify-start sm:justify-center md:block'>
      {stepItems} 
    </div>
  )
}

export default Navigation
