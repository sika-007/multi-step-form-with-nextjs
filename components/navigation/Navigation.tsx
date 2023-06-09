import React from 'react'
import Step from './Step'

interface NavigationProps {
  activeLink: string
}

export interface Steps {
  name: string
  relLink: string
}

const Navigation:React.FC<NavigationProps> = ({ activeLink }):JSX.Element => {

  const steps: Steps[] = [
    {name: "Your Info", relLink: "info"},
    {name: "Select Plan", relLink: "plan"},
    {name: "Add-Ons", relLink: "addons"},
    {name: "Summary", relLink: "summary"}
  ]

  const stepItems: React.ReactNode[] = steps.map((step: Steps, index: number) => (
    <Step activeLink={activeLink} key={index} step={step} index={index + 1} />
  ))


  return (
    <div className='px-2 py-10 flex flex-wrap justify-start sm:justify-center md:block'>
      {stepItems} 
    </div>
  )
}

export default Navigation
