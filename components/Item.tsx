import * as React from 'react'
import styles from '../styles/Item.module.css'

import Button from './Button'

interface IItemProps {
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <img src="icon-music.svg" alt="icon music" />
            <div>
                <h3 className={styles.title}>
                    Annual Plan
                </h3>
                <span className={styles.price}>
                    $59.99/year
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <Button title="Change" />
            </div>
        </div>
    )
}

export default Item
