import React, { useState } from 'react'
import './Forms.css'

const Forms = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('')
  const onChangeCountry = (el) => {
    setCountry(el.target.value)
  }
  const onChangeStreet = (el) => {
    setStreet(el.target.value)
  }
  const onChangeSubject = (el) => {
    setSubject(el.target.value)
  }
  return (
    <div className={'forms'}>
      <h3>Input your info</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Country'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Street'}
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeStreet} className={'select'}>
        <option value={'physic'}>physical</option>
        <option value={'legal'}>legal</option>
      </select>
    </div>
  )
}

export default Forms
