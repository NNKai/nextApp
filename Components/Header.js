import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="Link">Link 1</Link>
      <Link href="Link2">Link 2</Link>
      <Link href="Link3">Link 3</Link>
    </div>
  )
}

export default Header
