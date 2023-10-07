import React from 'react'

const Nav = () => {
  return (
    <div>
         <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
           />
    </div>
  )
}

export default Nav