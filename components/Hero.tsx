import * as React from 'react'

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <>
      <img src="illustration-hero.svg" aria-hidden />
    </>
  )
}

export default Hero
