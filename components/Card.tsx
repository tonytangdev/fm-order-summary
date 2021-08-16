import * as React from 'react'
import styles from '../styles/Card.module.css'

import Button from './Button'
import Hero from './Hero'
import Item from './Item'

interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <div className={styles.container}>
            <Hero />
            <div className={styles.cardContent}>
                <h2 className={styles.title}>
                    Order Summary
                </h2>
                <p className={styles.paragraph}>
                    You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like !
                </p>
                <Item />
                <div>
                    <Button title="Proceed to Payment" />
                </div>
                <div>
                    <Button title="Cancel Order" />
                </div>
            </div>

        </div>
    )
}

export default Card
