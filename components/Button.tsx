import * as React from 'react'
import styles from '../styles/Button.module.css'

interface IButtonProps {
    title: string,
    isLink?: boolean,
    isSecondary?: boolean
}

const Button: React.FunctionComponent<IButtonProps> = ({
    title,
    isLink,
    isSecondary
}) => {
    let buttonStyles = styles.button

    if (isSecondary) {
        buttonStyles = styles.secondary
    } else if (isLink) {
        buttonStyles = styles.link
    }

    return (
        <>
            <button className={`${buttonStyles} ${styles.activeButton}`}>{title}</button>
        </>
    )
}

export default Button
