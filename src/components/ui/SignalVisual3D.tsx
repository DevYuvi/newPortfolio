"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SignalVisual3DProps {
  activeTab: "build" | "architect" | "accelerate";
  label: string;
}

/**
 * High-fidelity recreation of Sarthak Sharma's SignalExplorer 3D particle canvas:
 * - Structure (waving planar grid)
 * - Ripples (nautilus spiral wave)
 * - Constellation (Fibonacci sphere)
 * - Interactive pointer disturbance and ripple shockwave
 * - Smooth morphing via uWeights vector interpolation
 */
export function SignalVisual3D({ activeTab, label }: SignalVisual3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef(activeTab);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 340;
    let height = container.clientHeight || 340;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.z = 5.2;

    const POINT_COUNT = 2400;
    const posStructure = new Float32Array(POINT_COUNT * 3);
    const posRipples = new Float32Array(POINT_COUNT * 3);
    const posConstellation = new Float32Array(POINT_COUNT * 3);

    for (let e = 0; e < POINT_COUNT; e++) {
      // 1. Structure: Waving Planar Dot Matrix Grid
      const t = (e % 60) / 59;
      const r = Math.floor(e / 60) / 39;
      posStructure[3 * e] = (t - 0.5) * 3.0;
      posStructure[3 * e + 1] = (r - 0.5) * 2.8;
      posStructure[3 * e + 2] = 0.12 * Math.sin(18.0 * t);

      // 2. Ripples: Organic Nautilus Spiral Wave
      const n = t * Math.PI * 2.0;
      const i2 = 0.2 + 1.5 * r;
      posRipples[3 * e] = Math.cos(n) * i2;
      posRipples[3 * e + 1] = Math.sin(n) * i2;
      posRipples[3 * e + 2] = 0.2 * Math.sin(8.0 * i2);

      // 3. Constellation: 3D Fibonacci Sphere Globe
      const a = 1.0 - (2.0 * e) / (POINT_COUNT - 1);
      const s = 2.399963 * e;
      const o = Math.sqrt(Math.max(0, 1.0 - a * a));
      posConstellation[3 * e] = Math.cos(s) * o * 1.6;
      posConstellation[3 * e + 1] = 1.6 * a;
      posConstellation[3 * e + 2] = Math.sin(s) * o * 1.6;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(posStructure, 3));
    geometry.setAttribute("aTeach", new THREE.BufferAttribute(posRipples, 3));
    geometry.setAttribute("aConnect", new THREE.BufferAttribute(posConstellation, 3));

    const uniforms = {
      uTime: { value: 0 },
      uWeights: {
        value: new THREE.Vector3(
          activeTab === "build" ? 1 : 0,
          activeTab === "architect" ? 1 : 0,
          activeTab === "accelerate" ? 1 : 0
        ),
      },
      uPointer: { value: new THREE.Vector2(4.0, 4.0) },
      uPulse: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
      vertexShader: `
        attribute vec3 aTeach;
        attribute vec3 aConnect;
        uniform vec3 uWeights;
        uniform float uTime;
        uniform float uPulse;
        uniform vec2 uPointer;
        varying float vGlow;

        void main() {
          vec3 p = position * uWeights.x + aTeach * uWeights.y + aConnect * uWeights.z;
          float d = distance(p.xy, uPointer);
          float wave = sin(length(p.xy) * 9.0 - uTime * 2.5);
          p.z += wave * (0.06 + 0.2 * uWeights.y);
          p.xy += normalize(p.xy + vec2(0.001)) * sin(d * 7.0 - uTime * 4.0) * exp(-d * 1.5) * 0.16;
          p *= 1.0 + uPulse * 0.08;
          vGlow = 0.45 + 0.4 * exp(-d * 2.0) + 0.15 * wave;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(13.0 / -mv.z, 1.0, 4.0);
        }
      `,
      fragmentShader: `
        varying float vGlow;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          vec3 col = mix(vec3(0.68, 0.65, 0.59), vec3(1.0, 0.48, 0.22), smoothstep(0.45, 0.9, vGlow));
          gl_FragColor = vec4(col, (1.0 - smoothstep(0.1, 0.5, d)) * 0.85);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Pointer hover interactions
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.uPointer.value.set(
        ((e.clientX - rect.left) / rect.width) * 4.0 - 2.0,
        2.0 - ((e.clientY - rect.top) / rect.height) * 4.0
      );
    };

    const onPointerLeave = () => {
      uniforms.uPointer.value.set(4.0, 4.0);
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    let animFrame = 0;
    const targetWeights = new THREE.Vector3(1, 0, 0);
    let pulseVal = 0;
    let lastTab = activeTabRef.current;

    const animate = (time: number) => {
      animFrame = requestAnimationFrame(animate);

      const sec = time * 0.001;
      uniforms.uTime.value = sec;

      const currentTab = activeTabRef.current;
      targetWeights.set(
        currentTab === "build" ? 1 : 0,
        currentTab === "architect" ? 1 : 0,
        currentTab === "accelerate" ? 1 : 0
      );

      // Trigger pulse when switching tabs
      if (lastTab !== currentTab) {
        lastTab = currentTab;
        pulseVal = 1.0;
      }

      pulseVal *= 0.93;
      uniforms.uPulse.value = pulseVal;

      // Smooth weight interpolation
      uniforms.uWeights.value.lerp(targetWeights, 0.065);

      // Subtle ambient orbital drift
      points.rotation.y = 0.18 * Math.sin(0.00015 * time);

      renderer.render(scene, camera);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      resizeObserver.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
    // Three.js scene initializes once on mount; activeTab updates are read from activeTabRef in the animation loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="signal-visual"
      aria-hidden="true"
      style={{ position: "relative", width: "100%", height: "340px" }}
    >
      <span className="signal-center-label">
        <span>{label}</span>
      </span>
    </div>
  );
}
