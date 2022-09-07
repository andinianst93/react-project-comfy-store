import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { FaHome, FaBookReader, FaCouch } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    text: 'home',
    icon: <FaHome />,
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    icon: <FaBookReader />,
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    icon: <FaCouch />,
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
