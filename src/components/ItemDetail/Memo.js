import React from 'react'

export const Memo = React.memo(() => {
    console.log("renderizado")

    return (
        <div>
            Memo
        </div>
    )
})