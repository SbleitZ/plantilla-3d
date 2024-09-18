import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Suspense} from "react";
import Model from "../public/cute_avocado/Scene.jsx";
import Appa from "../public/cute_appa/Scene.jsx";

function App() {

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={<>Cargando...</>}>
          <color attach={"background"} args={["#131417"]} />
          <ScrollControls pages={5} damping={0.2}>
            {/* <Model position={[0, -1, -15]}/> */}
            <Appa position={[0,1,0]} />
            <Sparkles size={2} color={"#83f569"} scale={[10, 10, 10]} />
            <Scroll html style={{ width: "100%" }}>
              <div className="container">
              <div className="title">
                <h1>Te Quiero</h1>
              </div>
              <div className='row' style={{ position: 'absolute', top: `132vh`, right:0 }}>
                <h2 >Texto 1</h2>
                <p style={{ maxWidth: '336px' }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quas id unde molestiae accusamus sunt eius consequuntur, saepe numquam illum cupiditate praesentium atque aut cumque nobis veritatis amet ipsa itaque.
                </p>
              </div>
              <div className='row' style={{ position: 'absolute', top: `230vh`, left:2 }}>
                <h2 >Texto 2</h2>
                <p style={{ maxWidth: '336px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur deleniti ratione non autem fuga recusandae. Nihil, accusamus consequatur sequi natus cum explicabo deserunt soluta delectus omnis, esse, blanditiis officia.
                </p>
              </div>
              </div>

            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
