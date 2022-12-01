import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import { Sad } from './Sad';

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.05} />
      <directionalLight intensity={0.6} />
      <ambientLight intensity={1} />
      <Sad />
    </Canvas>
  );
}

export default App;
