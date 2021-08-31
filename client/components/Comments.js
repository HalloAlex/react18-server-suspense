import React from 'react'

function onClickEvt () {
    console.log('comments click')
}

export default () => {
    return <div onClick={onClickEvt}>
        Comments
    </div>
}