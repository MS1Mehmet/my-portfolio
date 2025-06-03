import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Media from './media'

import { Dimensions, Size } from '../types/types'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [time, setTime] = useState<number>(0)
  const [sizes, setSizes] = useState<Size>({ width: window.innerWidth, height: window.innerHeight })
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [scene, setScene] = useState<THREE.Scene | null>(null)
  const [orbitControls, setOrbitControls] = useState<OrbitControls | null>(null)
  const [medias, setMedias] = useState<Media[]>([])

  useEffect(() => {
    if (canvasRef.current) {
      // Scene Setup
      const sceneInstance = new THREE.Scene()
      setScene(sceneInstance)

      // Camera Setup
      const cameraInstance = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
      cameraInstance.position.z = 10
      setCamera(cameraInstance)

      // Renderer Setup
      const rendererInstance = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      rendererInstance.setSize(window.innerWidth, window.innerHeight)
      rendererInstance.setPixelRatio(Math.min(2, window.devicePixelRatio))
      setRenderer(rendererInstance)

      // OrbitControls
      const orbitControlsInstance = new OrbitControls(cameraInstance, rendererInstance.domElement)
      setOrbitControls(orbitControlsInstance)

      // Media Setup
      const mediasInstance: Media[] = []
      setMedias(mediasInstance)

      // Window resize event
      window.addEventListener('resize', onResize)

      // Start rendering
      const clock = new THREE.Clock()

      const animate = () => {
        setTime(clock.getElapsedTime())
        orbitControlsInstance.update()
        if (rendererInstance && sceneInstance && cameraInstance) {
          rendererInstance.render(sceneInstance, cameraInstance)
        }
        requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      // Clean up
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Resize handler
  const onResize = () => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    if (camera && renderer) {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }

  return <canvas ref={canvasRef} />
}

export default Canvas
