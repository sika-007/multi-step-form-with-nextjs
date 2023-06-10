import Header from '@/components/Header'
import Input from '@/components/Input'
import { ActiveLinks } from '@/components/Layout'
import { useContext, useEffect } from 'react'
import { UserDataContext } from '@/services/context'
import Router from 'next/router'
import Head from 'next/head'

interface Props {
  setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinks>>
}

const PersonalInfo = ({ setActiveLink }: Props) => {

  const { state, dispatch } = useContext(UserDataContext)

  useEffect(() => {
    setActiveLink(ActiveLinks.INFO)
  }, [])

  function handleSubmit() {
    Router.push("/plans")
  }

  return (
    <div>
      <Head>
				<title>Details - Personal Info</title>
			</Head>
      <Header title='Personal Info' description='Please provide your name, email address, and phone number' />
      <form onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <Input 
          dispatch={dispatch} 
          value={state?.personalInfo.name} 
          type='text' 
          placeholder='John Doe - first name and last name' 
          title='Name' 
          action="setName" 
          regex="\w+\s\w+"
        />
        <Input 
          dispatch={dispatch} 
          value={state?.personalInfo.email} 
          type='email' 
          placeholder='johndoe@example.com' 
          title='Email' 
          action="setEmail"
          regex="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" 
        />
        <Input 
          dispatch={dispatch} 
          value={state?.personalInfo.telephone} 
          type='tel' 
          placeholder='+1234456 or 08123456789' 
          title='Telephone' 
          action="setTelephone"
          regex="\+?\d{9,12}" 
        />
        <div className='flex'>
          <button className='mt-5 ml-auto styled-button' type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo