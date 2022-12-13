import React, { useCallback, useEffect, useState } from 'react'
import './Forms.css'
import { useTelegram } from '../hooks/useTg'

const Forms = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physic')
  const { tg } = useTelegram()

  const onSendData = useCallback(() => {}, [])
  const data = {
    country,
    street,
    subject,
  }
  tg.sendData(JSON.stringify(data))
  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [])

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
    <div className={'form'}>
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
      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'physic'}>Physical</option>
        <option value={'legal'}>Legal</option>
      </select>
    </div>
  )
}

export default Forms
