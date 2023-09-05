import React from 'react'

const mainStyles = "h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[115px] mb-[20px]";
function Divider({ styles }) {
  return (
    <div className={`${mainStyles} ${styles}`} />
  )
}

export default Divider;
