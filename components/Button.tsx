import * as React from 'react'
import styles from '../styles/Button.module.css'

interface IButtonProps {
    title: string,
    isLink: boolean
}

const Button: React.FunctionComponent<IButtonProps> = ({
    title,
    isLink
}) => {
    return (
        <>
            <button className={styles.link}>{title}</button>
        </>
    )
}

export default Button
