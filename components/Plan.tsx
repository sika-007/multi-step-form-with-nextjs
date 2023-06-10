import React from 'react'
import { PlanProps } from '@/services/models'


const Plan: React.FC<PlanProps> = ({ title, billing, isSelected, id, dispatch }) => {
	return (
		<div onClick={() => dispatch && dispatch({ type: "choosePlan", payload: id })} className={`transition-all ${isSelected ? "scale-105 bg-primary" : ""} flex flex-col w-full max-w-[170px] border-primary border-2 rounded-lg p-10 flex-wrap hover:cursor-pointer`}>
			<h4 className={`text-lg  ${isSelected ? "text-green-200" : "text-primary"} font-bold`}>{title}</h4>
			<p className={` ${isSelected ? "text-gray-200" : "text-gray-500"}`}>${billing.yearly}/yr</p>
		</div>
	)
}

export default Plan
