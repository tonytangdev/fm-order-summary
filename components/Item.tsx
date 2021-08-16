import * as React from 'react'
import Button from './Button'

interface IItemProps {
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
    return (
        <>
            <img src="icon-music.svg" alt="icon music" />
            <div>
                <h3>
                    Annual Plan
                </h3>
                <span>
                    $59.99/year
                </span>
            </div>
            <div>
                <Button title="Change" />
            </div>
        </>
    )
}

export default Item
