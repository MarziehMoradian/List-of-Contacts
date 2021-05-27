import React from 'react'


  const Search = ({onSearch, search}) => {
    return (
        <div className='search-container'>
            <input 
                type="text" 
                value={search}
                className='search' 
                placeholder='Type Here...' 
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    
  )
}
export default Search;