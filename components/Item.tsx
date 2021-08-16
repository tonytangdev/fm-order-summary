import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import IconMusicPic from '../public/icon-music.svg'

import Button from './Button'

interface IItemProps {
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <Image src={IconMusicPic} alt="icon music" className={styles.image} />
            <div>
                <h3 className={styles.title}>
                    Annual Plan
                </h3>
                <span className={styles.price}>
                    $59.99/year
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <Button title="Change" isLink />
            </div>
        </div>
    )
}

export default Item
