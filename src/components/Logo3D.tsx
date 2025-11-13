import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Logo3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    container.appendChild(renderer.domElement);

    // Add lighting for black metallic shading
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Main key light (white with high intensity)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    // Fill light (softer white)
    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Rim light (bright white for edge highlights on black)
    const rimLight = new THREE.DirectionalLight(0xffffff, 2);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // Bottom light to prevent pure black shadows
    const bottomLight = new THREE.DirectionalLight(0xffffff, 0.5);
    bottomLight.position.set(0, -10, 0);
    scene.add(bottomLight);

    // Add subtle colored edge lights
    const edgeLight1 = new THREE.PointLight(0x00d9ff, 0.5, 50);
    edgeLight1.position.set(8, 2, 5);
    scene.add(edgeLight1);

    const edgeLight2 = new THREE.PointLight(0xff00ff, 0.5, 50);
    edgeLight2.position.set(-8, 2, 5);
    scene.add(edgeLight2);

    // Variable to hold the loaded model
    let modelGroup: THREE.Group | null = null;

    // Mouse controls for dragging (only horizontal rotation)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let spinMomentum = 0;
    let lastDragDelta = 0;

    renderer.domElement.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      spinMomentum = 0;
    });

    renderer.domElement.addEventListener('mousemove', (e) => {
      if (isDragging && modelGroup) {
        const deltaX = e.clientX - previousMousePosition.x;
        lastDragDelta = deltaX * 0.01;

        // Only rotate left to right (Y axis only)
        modelGroup.rotation.y += lastDragDelta;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    renderer.domElement.addEventListener('mouseup', () => {
      isDragging = false;
      // Set momentum based on last drag speed
      spinMomentum = lastDragDelta * 0.5;
    });

    renderer.domElement.addEventListener('mouseleave', () => {
      isDragging = false;
      spinMomentum = lastDragDelta * 0.5;
    });

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      '/logo.glb',
      function (gltf) {
        const model = gltf.scene;

        // Center the model first
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Scale model to fit in view properly
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.5 / maxDim;
        model.scale.setScalar(scale);

        // Rotate model to stand upright (rotate 90 degrees on X axis)
        model.rotation.x = Math.PI / 2;

        // Create a group and add the model to it
        modelGroup = new THREE.Group();
        modelGroup.add(model);

        // Recenter the model within the group
        const boxAfterRotation = new THREE.Box3().setFromObject(model);
        const centerAfterRotation = boxAfterRotation.getCenter(new THREE.Vector3());
        model.position.sub(centerAfterRotation);

        // Move the entire group down
        modelGroup.position.y = -2.5;

        // Position camera to view from front
        camera.position.set(0, -1.5, 5);
        camera.lookAt(0, -2.5, 0);

        // Apply black metallic material with proper shading
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            
            if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              
              materials.forEach((mat: any) => {
                // Replace with black metallic material
                const blackMetallic = new THREE.MeshStandardMaterial({
                  color: 0x000000, // Pure black
                  metalness: 0.8,
                  roughness: 0.3,
                  envMapIntensity: 1.0,
                  emissive: 0x111111, // Very subtle glow
                  emissiveIntensity: 0.1
                });
                
                if (Array.isArray(mesh.material)) {
                  const index = mesh.material.indexOf(mat);
                  mesh.material[index] = blackMetallic;
                } else {
                  mesh.material = blackMetallic;
                }
              });
            }
          }
        });

        scene.add(modelGroup);
        console.log('Model loaded and centered successfully');
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error('An error occurred loading the model:', error);
      }
    );

    // Rotation speed control
    const normalSpeed = 0.005;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Auto-rotate the model left to right when not dragging
      if (modelGroup && !isDragging) {
        // Apply momentum after drag
        if (Math.abs(spinMomentum) > 0.001) {
          modelGroup.rotation.y += spinMomentum;
          spinMomentum *= 0.95; // Gradually slow down momentum
        } else {
          // Normal speed rotation
          modelGroup.rotation.y += normalSpeed;
          spinMomentum = 0;
        }
      }

      renderer.render(scene, camera);
    }

    // Handle window resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  );
};

export default Logo3D;
