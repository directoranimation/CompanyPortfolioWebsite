"use client"; // Ensure this component is rendered on the client side

import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const ShaderGradientBg = () => {
  return (
    <ShaderGradientCanvas
      style={{
        zIndex: 10,
      }}
      pointerEvents="none"
    >
      <ShaderGradient
        control="query"
        urlString="https://shadergradient-web.vercel.app/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%230004ff&color2=%239d00ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
      />
    </ShaderGradientCanvas>
  );
};

export default ShaderGradientBg;
