import React from 'react'

interface AddonProps {
	name: string
	title: string
	description: string
	isSelected: boolean
	billing: number
}

const AddonInput: React.FC<AddonProps> = () => {
	return (
		<div className='flex items-center gap-5 border-2 border-primary p-5 rounded-xl max-w-md mt-4'>
			<input type="checkbox" name=""  />
			<div className='flex flex-col'>
				<h4 className='text-lg font-bold text-primary'>Online Service</h4>
				<p className="text-gray-500">Access to multiplayer games</p>
			</div>

		</div>
	)
}

export default AddonInput
