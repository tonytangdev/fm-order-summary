import * as React from 'react'
import styles from '../styles/Hero.module.css'

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src="illustration-hero.svg" aria-hidden className={styles.image} />
      </div>
    </>
  )
}

export default Hero
