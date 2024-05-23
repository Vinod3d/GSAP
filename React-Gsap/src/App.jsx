import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

function App() {

  // useGSAP(()=>{
  //   gsap.to('.box', {
  //     x: 1000,
  //     duration: 2,
  //     delay:1
  //   })
  // })


  const gsapRef = useRef()

  // useGSAP(()=>{
  //   gsap.to(gsapRef.current, {
  //     x: 1500,
  //     duration: 2,
  //     delay:1,
  //     rotate:720
  //   })
  // })


  // useGSAP(()=>{
  //   gsap.to(".box2", {
  //     y:300,
  //     opacity:0,
  //     rotate: 360,
  //     duration: 2,
  //     delay: 1
  //   })
  // })

  const boxRef = useRef()

  // useGSAP(()=>{
  //   gsap.from(boxRef.current, {
  //     rotate: 360,
  //     delay: 1,
  //     duration: 1
  //   })
  // })

  useGSAP(()=>{
    gsap.from(".box2", {
      rotate : 360,
      scale: 0,
      duration: 2,
      opacity: 0,
      delay: 0.5
    })
  }, {scope:".container"})


  const [circle, setCircle] = useState(0)

  const random = gsap.utils.random(-500, 500, 100)

  useGSAP(()=>{
    gsap.to(".circle", {
      x: circle,
      duration: 0.5,
    })
  }, [circle])

  const randomX = gsap.utils.random(-500, 500, 100)
  const randomY = gsap.utils.random(-200, 200, 100)
  const rotateX = gsap.utils.random(-360, 360, 30)

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [roti, setRoti] = useState(0)

  const imageRef = useRef()

  useGSAP(()=>{
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: roti,
      duration: 1,
    })
  }, [xValue, yValue, roti])














  const {contextSafe} = useGSAP()

  const rotateBox = contextSafe(()=>{
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box">
        
      </div>

      <div className="container">
        <div ref={boxRef} className="box2"></div>
        <div className="circle"></div>
      </div>

      <div className="kuch">
        <div className="circle"></div>
      </div>

      <button onClick={()=>{
        setCircle(random)
        setXValue(randomX)
        setYValue(randomY)
        setRoti(rotateX)
      }}>
        
      <img ref={imageRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR4k149R0FAAGjiDnVn5gt9UHj3Cp5ehtRA4JYu2ZL5EJxmFJBj3Gd3VPY2GHSB77yys&usqp=CAU" alt="" />
      </button>

    </main>
  )
}

export default App
