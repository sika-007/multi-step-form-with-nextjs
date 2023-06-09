import React from 'react'
import { Steps } from './Navigation';

interface StepProps {
  step: Steps;
  index: number;
  activeLink: string;
}

const Step: React.FC<StepProps> = ({step, index, activeLink}): JSX.Element => {

  const isActivePage = activeLink === step.relLink

  return (
    <div className='flex items-center gap-3 mb-5 pl-12 pr-24'>
      <div className={`border ${isActivePage ? "border-primary bg-green-200" : "border-gray-200"} rounded-full w-10 h-10 flex justify-center items-center`}>
        <span className={isActivePage ? "text-primary" : "text-gray-200"}>{index}</span>
      </div>
      <div>
        <p className='text-gray-300'>Step {index}</p>
        <h3 className=' text-gray-200 font-bold text-lg'>{step.name}</h3>
      </div>
    </div>
  )
}

export default Step
