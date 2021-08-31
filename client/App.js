import React, { Suspense } from 'react'
import Loading from './components/Loading'

const Comments = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                import('./components/Comments')
            )
        }, 3000)
    })
})
export default () => {
    return <Suspense fallback={<Loading />}>
        <Comments />
    </Suspense>
}