import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Plan from '@/components/Plan'
import { ActiveLinks } from '@/components/Layout'
import { useContext } from 'react'
import { UserDataContext } from '@/services/context'
import Router from 'next/router'
import Head from 'next/head'

interface PlanProps {
  setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinks>>
}

const plan: React.FC<PlanProps> = ({ setActiveLink }): JSX.Element => {

  const { state, dispatch } = useContext(UserDataContext)

  useEffect(() => {
    setActiveLink(ActiveLinks.PLAN)
  }, [])

  const planElements = state?.plans.map((plan, index) => (
    <Plan key={index} id={index} title={plan.title} isSelected={plan.isSelected} billing={plan.billing} dispatch={dispatch} />
  ))


  return (
    <div>
      <Head>
				<title>Details - Plans</title>
			</Head>
      <Header title='Select Your Plan' description='You have the option of monthly or yearly billing' />
      <div className='flex gap-4 flex-wrap'>
        {planElements}
      </div>

      <div className='flex justify-between mt-5'>
        <button onClick={() => Router.push("/")} className='styled-button'>
          Go back
        </button>
        <button onClick={() => Router.push("/addons")} className='styled-button'>
          Continue
        </button>
      </div>
    </div>
  )
}

export default plan
