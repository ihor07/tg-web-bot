import React, { useEffect, useState } from 'react'
import './Forms.css'
import { useTelegram } from '../hooks/useTg'

const Forms = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send text',
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

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
