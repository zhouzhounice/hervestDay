import React from 'react'
import { user } from './content'

const Content: React.FC = () => {
    const { name } = user
    return (
        <div>
            hi,{name}
        </div>
    )
}

export default Content