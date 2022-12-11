import { on } from 'nodemon'
import React from 'react'
import Button from '../Button/Button'
import { useTg } from '../hooks/useTg'

const Header = () => {
  const { user, onClose } = useTg()

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>{user?.username}</span>
    </div>
  )
}

export default Header
