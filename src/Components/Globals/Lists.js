import React from 'react'

const Lists = ({ name, arrow }) => {
  return (
    <>
      {name} {arrow && <span className="material-symbols-outlined">
        expand_more
      </span>}
      <div className="dropdown-content">
        <ul className=''>
          <li href="#">Link 1</li>
          <li href="#">Link 2</li>
          <li href="#">Link 3</li>
        </ul>
      </div>
    </>
  )
}

export default Lists