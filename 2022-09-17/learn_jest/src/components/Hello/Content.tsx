import * as React from 'react'
import { user } from './Content.ts'

const Content: React.FC = () => {
    const { name } = user
    return (
        <div>
            hi,{name}
        </div>
    )
}

export default Content
