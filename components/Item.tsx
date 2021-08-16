import * as React from 'react'

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
            <span>
                Change
            </span>
        </>
    )
}

export default Item
