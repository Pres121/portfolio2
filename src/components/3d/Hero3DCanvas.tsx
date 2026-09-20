import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- 1. Floating 3D Geometric Objects ---
    // Primary 3D Icosahedron (emerald glowing wireframe + inner core)
    const icoGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Primary emerald color
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    icoMesh.position.set(7, 2, -2);
    scene.add(icoMesh);

    // Inner glowing crystal core inside the icosahedron
    const coreGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x34d399,
      emissive: 0x059669,
      shininess: 100,
      transparent: true,
      opacity: 0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    icoMesh.add(coreMesh);

    // Secondary Torus Knot (Floating on the left side)
    const torusGeometry = new THREE.TorusKnotGeometry(2.5, 0.6, 100, 16);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Cyan emerald tint
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(-8, -3, -4);
    scene.add(torusMesh);

    // Small floating cubes
    const cubesGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.3,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < 8; i++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubesGroup.add(cube);
    }
    scene.add(cubesGroup);

    // --- 2. 3D Particle Constellation Field ---
    const isMobile = width < 768;
    const particleCount = isMobile ? 350 : 800;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;
      scales[i] = Math.random() * 0.12 + 0.04;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Create glowing circle particle texture canvas
    const particleCanvas = document.createElement("canvas");
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const ctx = particleCanvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(52, 211, 153, 1)");
      grad.addColorStop(0.5, "rgba(16, 185, 129, 0.5)");
      grad.addColorStop(1, "rgba(16, 185, 129, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }

    const particleTexture = new THREE.CanvasTexture(particleCanvas);
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- 3. Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 3, 40);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0x06b6d4, 2, 40);
    secondaryLight.position.set(-10, 10, 5);
    scene.add(secondaryLight);

    // --- 4. Interactive Mouse Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --- 5. Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (lerp)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate primary Icosahedron mesh
      icoMesh.rotation.x = elapsedTime * 0.2 + mouseY * 0.5;
      icoMesh.rotation.y = elapsedTime * 0.3 + mouseX * 0.5;

      // Rotate inner core opposite way
      coreMesh.rotation.x = -elapsedTime * 0.4;
      coreMesh.rotation.y = -elapsedTime * 0.5;

      // Rotate Torus knot
      torusMesh.rotation.x = elapsedTime * 0.15;
      torusMesh.rotation.z = elapsedTime * 0.25 - mouseX * 0.3;

      // Animate floating cubes
      cubesGroup.children.forEach((cube, idx) => {
        cube.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
        cube.rotation.y += 0.008 * (idx % 2 === 0 ? 1 : -1);
        cube.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.01;
      });

      // Move particle cloud subtly with mouse
      particlesMesh.rotation.y = elapsedTime * 0.04 + mouseX * 0.15;
      particlesMesh.rotation.x = elapsedTime * 0.02 + mouseY * 0.15;

      // Move point light with mouse cursor
      pointLight.position.x = mouseX * 12;
      pointLight.position.y = -mouseY * 12;

      renderer.render(scene, camera);
    };

    animate();

    // --- 6. Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
};

export default Hero3DCanvas;
