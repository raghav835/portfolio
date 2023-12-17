import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 0.8,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

<svg xmlns="http://www.w3.org/2000/svg" width="311" height="500" fill="none" viewBox="0 0 311 500">
  <path fill="url(#a)" d="M0 0h311v500H0z"/>
  <defs>
    <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
      <use href="#b" transform="scale(.00322 .002)"/>
    </pattern>
    <image id="b" width="311" height="500" data-name="output-onlinepngtools.png" href="data:image/png;base64,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"/>
  </defs>
</svg>



    </div>
  )
}

export default Logo