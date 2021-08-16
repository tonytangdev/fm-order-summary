import * as React from 'react'
import Hero from './Hero'
import Item from './Item'

interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <>
            <Hero />
            <h2>
                Order Summary
            </h2>
            <p>
                You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like !
            </p>
            <Item />
        </>
    )
}

export default Card
