import React from 'react'

interface HeaderProps {
	title: string
	description: string
}

const Header: React.FC<HeaderProps> = ({title, description}): JSX.Element => {
	return (
		<div className='mb-8'>
			<h2 className='text-5xl font-bold text-primary mb-3'>{title}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Header
