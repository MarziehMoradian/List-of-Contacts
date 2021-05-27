import React from 'react'

export default function ButtonDelete({classes,btnTitle,onClick}) {
    return (
        <div>
            <button className={`btn ${classes}`} onClick={onClick}>{btnTitle}</button>
        </div>
    )
}
