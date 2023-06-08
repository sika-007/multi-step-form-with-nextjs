import React from 'react'

interface StepProps {
  step: string;
  index: number;
}

const Step: React.FC<StepProps> = ({step, index}): JSX.Element => {
  return (
    <div className='flex items-center gap-3 mb-5 pl-14 pr-28'>
      <div className='border border-gray-200 rounded-full w-10 h-10 flex justify-center items-center'>
        <span className='text-gray-200'>{index}</span>
      </div>
      <div>
        <p className='text-gray-300'>Step {index}</p>
        <h3 className=' text-gray-200 font-bold text-lg'>{step}</h3>
      </div>
    </div>
  )
}

export default Step
