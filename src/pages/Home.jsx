// import React, { Suspense, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import Loader from '../components/Loader';
// import { OrbitControls } from '@react-three/drei';
// import PC from '../model/pc'; // Correct import for default export

// const Home = () => {
//   const ref = useRef();

//   return (
//     <section className="w-full h-screen relative background-image">
//       <div className="flex justify-center items-center pt-24">
//         <h1 className="text-4xl font-bold retro-style text-gray-400 text-shadow-md outlined-text">Hi, My Name is Anas Ahmed</h1>
//       </div>
//       <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
//         <Suspense fallback={<Loader />}>
//           <directionalLight position={[5, 5, 5]} intensity={1} />
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={1} />
//           <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={1} />
//           <hemisphereLight intensity={0.3} />
//           <PC />
//         </Suspense>
//         <OrbitControls
//           ref={ref}
//           autoRotate
//           enableZoom={false}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2.5}
//           minPolarAngle={Math.PI / 2.5}
//         />
//       </Canvas>
//     </section>
//   );
// };

// export default Home;

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { OrbitControls } from '@react-three/drei';
import PC from '../model/pc';

const Home = () => {
  const ref = useRef();

  return (
    <section id="home" className="back-container relative flex flex-col items-center h-screen z-20 ">
      <div className="relative flex flex-col items-center w-full pt-16">
        <h1 className="text-4xl font-bold retro-style text-gray-100 text-shadow-md outlined-text my-8 z-10">
          Hi, My Name is Anas Ahmed
        </h1>
        <div className="relative w-full h-[60vh] overflow-visible">
          <Canvas className="w-full h-full bg-transparent" camera={{ near: 0.1, far: 1000, position: [0, 0, 6] }}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={1} />
              <hemisphereLight intensity={0.3} />
              <PC position={[0, 0, 0]} />
            </Suspense>
            <OrbitControls
              ref={ref}
              autoRotate
              enableZoom={false}
              enablePan={true}
              maxPolarAngle={Math.PI / 2.5}
              minPolarAngle={Math.PI / 2.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Home;







