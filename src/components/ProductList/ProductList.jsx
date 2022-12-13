import React, { useState } from 'react'
import { useTelegram } from '../hooks/useTg'
import { useCallback, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const products = [
  { id: '1', title: 'Cars', price: `9000$`, description: 'BMW 320 F30' },
  { id: '2', title: 'Kick scooter', price: 1000, description: 'Xiaomi 10' },
  { id: '3', title: 'Moto', price: 5000, description: 'Honda CBR' },
  { id: '4', title: 'Bike', price: 3000, description: 'Giant 29 DH' },
  { id: '5', title: 'Snowboard', price: 600, description: 'China, 175cm' },
  { id: '6', title: 'Skis', price: 1100, description: 'Atomic pro 170cm' },
  { id: '7', title: 'Rollers', price: 190, description: 'noName' },
  { id: '8', title: 'Unicycle', price: 500, description: 'China 600w' },
]

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])

  const { tg, queryId } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    }
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }, [])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id)
    let newItems = []
    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }
    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      })
    }
  }
  return (
    <div className={'list'}>
      {' '}
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  )
}
export default ProductList
