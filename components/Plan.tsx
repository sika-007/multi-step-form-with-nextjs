import React from 'react'
import { Plan } from '@/services/models'

type PlanProps = Plan

const Plan: React.FC<PlanProps> = ({ title, billing, isSelected }) => {
	return (
		<div className='border-primary border-2 rounded-lg p-10 flex-wrap hover:cursor-pointer'>
			<h4 className='text-lg font-bold text-primary'>Arcade</h4>
			<p className='text-gray-500'>$9/mo</p>
		</div>
	)
}

export default Plan
