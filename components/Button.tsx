import * as React from 'react'

interface IButtonProps {
    title: string
}

const Button: React.FunctionComponent<IButtonProps> = ({
    title
}) => {
    return (
        <>
            <button>{title}</button>
        </>
    )
}

export default Button
