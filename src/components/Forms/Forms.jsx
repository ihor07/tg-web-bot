import React from 'react'
import './Forms.css'

const Forms = () => {
  return (
    <div className={'forms'}>
      <h3>Input your info</h3>
      <input className={'input'} type="text" placeholder={'Country'} />
      <input className={'input'} type="text" placeholder={'Street'} />
      <select className={'select'}>
        <option value={'physic'}>physical</option>
        <option value={'legal'}>legal</option>
      </select>
    </div>
  )
}

export default Forms
