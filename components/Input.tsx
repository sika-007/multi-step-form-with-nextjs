import React from 'react'

interface InputProps {
	title: string;
	type: string;
	placeholder: string;
}

const Input: React.FC<InputProps> = ({ title, type, placeholder }) => {
	return (
		<div className='mb-4'>
			<p className='text-primary mb-1 text-lg font-bold'>{title}</p>
			<input 
				type={type} 
				placeholder={`e.g. ${placeholder}`} 
				className='px-2 bg-transparent border border-primary w-full max-w-md h-10 focus:border-green-400 rounded-md focus:outline-none'
			/>
		</div>
	)
}

export default Input
