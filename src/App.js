import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { Happy } from './Happy';
import './App.css';
import { Sad } from './Sad';

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={0.6} />
      <ambientLight intensity={3} />
      <Happy />
    </Canvas>
  );
}

export default App;
