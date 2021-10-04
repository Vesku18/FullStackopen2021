import React from 'react'

const Filter = ({bookFilter, handleBookFilterChange}) =>{
    return(
    <form>
        <div>
        
    filter shown with:
                        <input value={bookFilter}
                            onChange={handleBookFilterChange} />
        
        </div>
    </form>
    )
}

export default Filter