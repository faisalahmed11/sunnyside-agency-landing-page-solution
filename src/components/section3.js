import React from 'react'

function Section3({styles}) {
  return (
    <section className={styles.section3}>
      <img srcSet='/mobile/image-gallery-milkbottles.jpg 600w,
      /desktop/image-gallery-milkbottles.jpg 1000w'
      alt=''/>
      <img srcSet='/mobile/image-gallery-orange.jpg 600w,
      /desktop/image-gallery-orange.jpg 1000w'
      alt=''/>
      <img srcSet='/mobile/image-gallery-cone.jpg 600w,
      /desktop/image-gallery-cone.jpg 1000w'
      alt=''/>
      <img srcSet='/mobile/image-gallery-sugar-cubes.jpg 600w,
      /desktop/image-gallery-sugarcubes.jpg 1000w'
      alt=''/>

    </section>
  )
}

export default Section3