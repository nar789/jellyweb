import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import { Chrismas } from './Chrismas';

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.05} />
      <pointLight position={[0,-3,-8]} color={0xF9FF57} intensity={0.5} distance={5} power={10}/>
      <pointLight position={[2,0,2]} color={0x4876FF} intensity={2} />
      <pointLight position={[-2,0,2]} color={0xD84EFF} intensity={1} distance={20} />
      <Chrismas />
    </Canvas>
  );
}

export default App;
