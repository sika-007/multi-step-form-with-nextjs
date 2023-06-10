import React from 'react'
import { AddonProps } from '@/services/models'

const AddonInput: React.FC<AddonProps> = ({name, title, description, isSelected, billing, dispatch}) => {
	return (
		<div onClick={() => dispatch && dispatch({type: "selectAddons", payload: name})} className={`flex items-center transition-all cursor-pointer gap-5 border-2 ${isSelected ? "scale-105 bg-primary" : ""} border-primary p-5 rounded-xl max-w-md mt-4`}>
			<div className='flex flex-col'>
				<h4 className={`text-lg font-bold ${isSelected ? "text-green-200" : "text-primary"}`}>{title}</h4>
				<p className={isSelected ? "text-gray-200" : "text-gray-500"}>{description}</p>
			</div>
			<p className={`ml-auto ${isSelected ? "text-gray-200" : "text-gray-500"}`}>${billing}/yr</p>
		</div>
	)
}

export default AddonInput
