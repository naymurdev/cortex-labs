import React from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function MeshGradient() {
  return (
    <div className="">
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
        }}
        className="mask-[radial-gradient(ellipse_55%_50%_at_50%_50%,#000_70%,transparent_110%)]"
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="plane"
          wireframe={true}
          shader="defaults"
          uTime={4.3}
          uSpeed={0.25}
          uStrength={2.5}
          uDensity={2}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={60}
          rotationY={0}
          rotationZ={30}
          color1="#020b5f"
          color2="#0923d1"
          color3="#009cff"
          reflection={0.4}
          // View (camera) props
          cAzimuthAngle={180}
          cPolarAngle={70}
          cDistance={2.6}
          cameraZoom={8.5}
          // Effect props
          lightType="3d"
          brightness={1.3}
          envPreset="city"
          grain="on"
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

export default MeshGradient;
