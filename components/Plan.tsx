import React from 'react'

interface Billing {
	monthly: number
	yearly: number
}

interface PlanProps {
	title: string
	billing: Billing
	isSelected: boolean

	// This should be a state defined on the parent component. The implementation of this may end up looking different.
	showYearly: boolean
}

const Plan: React.FC<PlanProps> = ({ title, billing, isSelected, showYearly }) => {
	return (
		<div className='border-primary border-2 rounded-lg p-10 flex-wrap hover:cursor-pointer'>
			<h4 className='text-lg font-bold text-primary'>Arcade</h4>
			<p className='text-gray-500'>$9/mo</p>
		</div>
	)
}

export default Plan
