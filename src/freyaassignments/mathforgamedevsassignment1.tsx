import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Billboard, Grid, TransformControls, useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas camera={{ position: [0, 4, 5] }}>
        <App />
      </Canvas>
    </div>
  </StrictMode >,
)

function App() {
  const barrel = useRef(null);
  const player = useRef(null);
  const barrelTexture = useTexture('https://files.catbox.moe/ovy3wf.png');
  const playerTexture = useTexture('https://files.catbox.moe/g6gvux.png');

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <Billboard ref={barrel}>
        <mesh position-y={0.5}>
          <planeGeometry args={[0.7]} />
          <meshBasicMaterial map={barrelTexture} transparent={true} side={DoubleSide} />
        </mesh>
      </Billboard>

      <TransformControls
        position-x={5}
        ref={player}
        onObjectChange={() => {
          if (player.current !== undefined) {
            const position = (player.current! as any).offset;
            console.log(position)
          }
        }}
      >
        <Billboard>
          <mesh position-y={0.5}>
            <planeGeometry args={[0.7]} />
            <meshBasicMaterial map={playerTexture} side={DoubleSide} />
          </mesh>
        </Billboard>
      </TransformControls>


      <Grid args={[100, 100]} sectionColor={'white'} cellColor={'white'} />

    </>
  )
}