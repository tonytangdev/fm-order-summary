import * as React from 'react'
import Hero from './Hero'

interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <>
            <Hero />
        </>
    )
}

export default Card
