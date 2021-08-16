import * as React from 'react'
import Image from 'next/image'
import illustrationSvg from '../public/illustration-hero.svg'
import styles from '../styles/Hero.module.css'

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image src={illustrationSvg} aria-hidden className={styles.image} />
      </div>
    </>
  )
}

export default Hero
