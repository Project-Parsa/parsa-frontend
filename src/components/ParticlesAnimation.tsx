import React from "react";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

interface ParticlesAnimationProps {
  id: string;
  options: ISourceOptions;
  w?: string;
  h?: string;
  style?: React.CSSProperties;
  polygonMask?: boolean;
}

const ParticlesAnimation = ({
  id,
  options,
  w,
  h,
  style,
  polygonMask = false,
}: ParticlesAnimationProps): React.ReactElement => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    if (polygonMask) await loadPolygonMaskPlugin(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (container: Container | undefined) => {
      console.debug(container);
    },
    []
  );

  return (
    <Particles
      id={id}
      width={w}
      height={h}
      style={style}
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesAnimation;
