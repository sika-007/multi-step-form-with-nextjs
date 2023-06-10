import { InputProps } from '@/services/models'
import Head from 'next/head'
import React from 'react'

const Input: React.FC<InputProps> = ({ title, type, placeholder, value, dispatch, action, regex }) => {

	return (
		<div className='mb-4'>
			<p className='text-primary mb-1 text-lg font-bold'>{title}</p>
			<input
				type={type}
				value={value}
				onChange={(e) => dispatch && dispatch({ type: action, payload: e.target.value })}
				placeholder={`e.g. ${placeholder}`}
				className='px-2 bg-transparent border border-primary w-full max-w-md h-10 focus:border-green-400 rounded-md focus:outline-none'
				pattern={regex}
				required
			/>
		</div>
	)
}

export default Input
