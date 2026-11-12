import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Sparkles, Compass, RotateCcw, Volume2, Eye } from 'lucide-react';

// Generates unique procedural planet textures with zero external asset dependencies
function createProceduralPlanetTexture(id, baseColor, accentColor, detailColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base spherical gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
  bgGrad.addColorStop(0, baseColor);
  bgGrad.addColorStop(0.5, detailColor);
  bgGrad.addColorStop(1, baseColor);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 512);

  if (id === 'analytics') {
    // Data Analytics: digital latitude coordinate bands & telemetry bar clusters
    for (let y = 30; y < 512; y += 45) {
      ctx.fillStyle = accentColor + '33';
      ctx.fillRect(0, y, 1024, 18);
      ctx.strokeStyle = accentColor + '88';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }
    for (let x = 40; x < 1024; x += 55) {
      ctx.fillStyle = accentColor + '77';
      const h = ((x * 13) % 90) + 20;
      ctx.fillRect(x, 256 - h / 2, 16, h);
    }
  } else if (id === 'python') {
    // Python Development: deep oceanic blue with golden code meridians
    ctx.fillStyle = accentColor + '66';
    for (let i = 0; i < 20; i++) {
      const cx = (i * 110 + 60) % 1024;
      const cy = Math.sin(i * 1.5) * 150 + 256;
      ctx.beginPath();
      ctx.arc(cx, cy, 60 + (i % 3) * 20, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (id === 'cloud') {
    // Cloud Engineering: azure stratosphere with swirling cirrus storm belts
    ctx.fillStyle = '#FFFFFF44';
    for (let i = 0; i < 14; i++) {
      const y = i * 36 + 20;
      ctx.beginPath();
      ctx.ellipse(512, y, 512, 12 + Math.sin(i * 2) * 6, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (id === 'genai') {
    // Generative AI: glowing neural synapses and dendritic nodes
    ctx.strokeStyle = accentColor + '99';
    ctx.lineWidth = 2;
    const nodes = [];
    for (let i = 0; i < 30; i++) {
      const nx = ((i * 173) % 1000) + 12;
      const ny = ((i * 97) % 490) + 11;
      nodes.push({ x: nx, y: ny });
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(nx, ny, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  } else if (id === 'fullstack') {
    // Full Stack: cybernetic modular grids and architecture lanes
    ctx.strokeStyle = accentColor + '55';
    ctx.lineWidth = 1.5;
    for (let x = 0; x < 1024; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y < 512; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }
  } else if (id === 'uiux') {
    // UI/UX Design: iridescent waves and pastel harmonic gradient ribbons
    for (let i = 0; i < 9; i++) {
      const y = i * 58;
      const waveGrad = ctx.createLinearGradient(0, y, 1024, y + 40);
      waveGrad.addColorStop(0, accentColor + '66');
      waveGrad.addColorStop(0.5, '#FFFFFF66');
      waveGrad.addColorStop(1, accentColor + '33');
      ctx.fillStyle = waveGrad;
      ctx.fillRect(0, y, 1024, 32);
    }
  } else if (id === 'story') {
    // My Story: celestial pearl lunar landscape with crater depth rings
    ctx.fillStyle = '#00000044';
    for (let i = 0; i < 35; i++) {
      const cx = ((i * 193) % 980) + 20;
      const cy = ((i * 127) % 470) + 20;
      const r = (i % 5) * 6 + 7;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF44';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  } else if (id === 'lab') {
    // Project Lab: molten fissures, incandescent magma channels and energy pulses
    ctx.strokeStyle = '#FFAA00';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#FF453A';
    ctx.shadowBlur = 10;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      let sx = ((i * 140) % 980) + 20;
      let sy = ((i * 80) % 480) + 15;
      ctx.moveTo(sx, sy);
      for (let s = 0; s < 4; s++) {
        sx += Math.sin(s + i) * 60;
        sy += Math.cos(s + i) * 50;
        ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Generates fiery core star texture
function createCentralCoreTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 1024, 512);
  grad.addColorStop(0, '#7F1D1D');
  grad.addColorStop(0.3, '#FF453A');
  grad.addColorStop(0.6, '#F59E0B');
  grad.addColorStop(1, '#991B1B');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 512);

  for (let i = 0; i < 40; i++) {
    const x = ((i * 157) % 1000) + 12;
    const y = ((i * 93) % 490) + 11;
    const r = (i % 6) * 10 + 20;
    const flare = ctx.createRadialGradient(x, y, 0, x, y, r);
    flare.addColorStop(0, '#FFFBEB');
    flare.addColorStop(0.4, '#FDE047');
    flare.addColorStop(1, 'transparent');
    ctx.fillStyle = flare;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export default function SkillUniverse3D({ portals, onSelectPortal, activeModalId }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [hudPosition, setHudPosition] = useState({ x: 0, y: 0, visible: false });
  const [isOrbiting, setIsOrbiting] = useState(true);
  const [isWarping, setIsWarping] = useState(false);

  // References for Three.js state
  const stateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    raycaster: new THREE.Raycaster(),
    mouse: new THREE.Vector2(-999, -999),
    planetMeshes: [],
    orbitLines: [],
    coreMesh: null,
    coreRing: null,
    starField: null,
    nebulaGroup: null,
    isOrbiting: true,
    hoveredId: null,
    targetCameraPos: new THREE.Vector3(0, 26, 44),
    targetLookAt: new THREE.Vector3(0, 0, 0),
    currentLookAt: new THREE.Vector3(0, 0, 0),
    defaultCameraPos: new THREE.Vector3(0, 26, 44),
    animationFrameId: null,
    isZooming: false,
  });

  // Handle camera reset when modal closes
  useEffect(() => {
    if (!activeModalId && stateRef.current.camera) {
      stateRef.current.targetCameraPos.copy(stateRef.current.defaultCameraPos);
      stateRef.current.targetLookAt.set(0, 0, 0);
      stateRef.current.isZooming = false;
      setIsWarping(false);
    }
  }, [activeModalId]);

  // Sync orbit pause state with ref
  useEffect(() => {
    stateRef.current.isOrbiting = isOrbiting;
  }, [isOrbiting]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 680;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.007);

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.set(0, 26, 44);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    stateRef.current.scene = scene;
    stateRef.current.camera = camera;
    stateRef.current.renderer = renderer;

    // 2. Cosmic Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 1.8);
    scene.add(ambientLight);

    // Warm radiant light from the central core
    const coreLight = new THREE.PointLight(0xFF6B4A, 4.5, 90, 1.2);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Secondary cool atmospheric fill light
    const dirLight = new THREE.DirectionalLight(0x38BDF8, 1.6);
    dirLight.position.set(25, 40, 20);
    scene.add(dirLight);

    // 3. Deep Starfield (2,800 twinkling stars)
    const starCount = 2800;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 70 + Math.random() * 160;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const tint = Math.random();
      if (tint > 0.85) {
        // Cyan / Blue starlight
        starColors[i * 3] = 0.45;
        starColors[i * 3 + 1] = 0.75;
        starColors[i * 3 + 2] = 1.0;
      } else if (tint > 0.7) {
        // Warm Orange / Red star
        starColors[i * 3] = 1.0;
        starColors[i * 3 + 1] = 0.45;
        starColors[i * 3 + 2] = 0.35;
      } else {
        // Pure White / Diamond
        starColors[i * 3] = 0.95;
        starColors[i * 3 + 1] = 0.95;
        starColors[i * 3 + 2] = 1.0;
      }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);
    stateRef.current.starField = starField;

    // 4. Central Star Core ("ABEETH'S SKILL UNIVERSE")
    const coreRadius = 4.2;
    const coreGeo = new THREE.SphereGeometry(coreRadius, 48, 48);
    const coreTexture = createCentralCoreTexture();
    const coreMat = new THREE.MeshStandardMaterial({
      map: coreTexture,
      emissive: new THREE.Color(0xFF453A),
      emissiveIntensity: 0.65,
      roughness: 0.4,
      metalness: 0.3
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);
    stateRef.current.coreMesh = coreMesh;

    // Core Corona Glow Halo
    const coronaGeo = new THREE.SphereGeometry(coreRadius * 1.18, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xFF453A,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide
    });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    scene.add(coronaMesh);

    // Central Metallic Orbit Ring
    const ringGeo = new THREE.RingGeometry(coreRadius * 1.35, coreRadius * 1.5, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xFF453A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const coreRing = new THREE.Mesh(ringGeo, ringMat);
    coreRing.rotation.x = Math.PI / 2;
    scene.add(coreRing);
    stateRef.current.coreRing = coreRing;

    // 5. The Eight Planets & Orbit Rings Configuration
    const planetConfigs = [
      { id: 'analytics', base: '#0369A1', accent: '#00F0FF', detail: '#082F49', radius: 1.75, orbitR: 11.5, speed: 0.0075, ring: true },
      { id: 'python', base: '#1E3A8A', accent: '#FBBF24', detail: '#172554', radius: 1.85, orbitR: 15.0, speed: 0.0062, ring: false },
      { id: 'cloud', base: '#0284C7', accent: '#BAE6FD', detail: '#075985', radius: 1.65, orbitR: 18.5, speed: 0.0053, ring: true },
      { id: 'genai', base: '#7E22CE', accent: '#F472B6', detail: '#3B0764', radius: 2.05, orbitR: 22.0, speed: 0.0044, ring: false },
      { id: 'fullstack', base: '#047857', accent: '#34D399', detail: '#064E3B', radius: 1.75, orbitR: 25.5, speed: 0.0037, ring: false },
      { id: 'uiux', base: '#BE123C', accent: '#FDA4AF', detail: '#881337', radius: 1.95, orbitR: 29.0, speed: 0.0031, ring: true, grandRing: true },
      { id: 'story', base: '#475569', accent: '#F8FAFC', detail: '#1E293B', radius: 1.6, orbitR: 32.5, speed: 0.0026, ring: false },
      { id: 'lab', base: '#B91C1C', accent: '#FFAA00', detail: '#7F1D1D', radius: 1.95, orbitR: 36.0, speed: 0.0022, ring: true },
    ];

    const planetMeshes = [];
    const orbitLines = [];

    planetConfigs.forEach((cfg, index) => {
      const portalInfo = portals.find(p => p.id === cfg.id) || portals[index];

      // Faint Elliptical Orbit Path Line
      const orbitCurve = new THREE.EllipseCurve(0, 0, cfg.orbitR, cfg.orbitR * 0.95, 0, 2 * Math.PI, false, 0);
      const orbitPoints = orbitCurve.getPoints(120);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(
        orbitPoints.map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0x2A2A2A,
        transparent: true,
        opacity: 0.35,
        linewidth: 1
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      scene.add(orbitLine);
      orbitLines.push({ line: orbitLine, id: cfg.id });

      // Planet Sphere Mesh
      const pGeo = new THREE.SphereGeometry(cfg.radius, 36, 36);
      const pTexture = createProceduralPlanetTexture(cfg.id, cfg.base, cfg.accent, cfg.detail);
      const pMat = new THREE.MeshStandardMaterial({
        map: pTexture,
        roughness: 0.45,
        metalness: 0.25,
        emissive: new THREE.Color(cfg.accent),
        emissiveIntensity: 0.15
      });
      const planetMesh = new THREE.Mesh(pGeo, pMat);

      // Distribute evenly in balanced orbital arrangement
      const angle = (index * (Math.PI * 2 / planetConfigs.length)) + (index * 0.2);
      planetMesh.position.x = Math.cos(angle) * cfg.orbitR;
      planetMesh.position.z = Math.sin(angle) * (cfg.orbitR * 0.95);
      planetMesh.position.y = Math.sin(index * 1.5) * 1.6;

      planetMesh.userData = {
        id: cfg.id,
        portal: portalInfo,
        config: cfg,
        angle: angle,
        orbitR: cfg.orbitR,
        orbitSpeed: cfg.speed,
        rotationSpeed: 0.015 + (index % 3) * 0.005,
        baseScale: 1.0,
        originalRadius: cfg.radius,
        targetScale: 1.0,
      };

      // Atmospheric Glow Shell
      const haloGeo = new THREE.SphereGeometry(cfg.radius * 1.14, 24, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.accent),
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      planetMesh.add(haloMesh);
      planetMesh.userData.haloMat = haloMat;

      // Subtle Glowing Gateway Ring for every planet
      const gatewayRingGeo = new THREE.RingGeometry(cfg.radius * 1.25, cfg.radius * 1.35, 32);
      const gatewayRingMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xFF453A),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35
      });
      const gatewayRing = new THREE.Mesh(gatewayRingGeo, gatewayRingMat);
      gatewayRing.rotation.x = Math.PI / 2;
      planetMesh.add(gatewayRing);
      planetMesh.userData.gatewayRing = gatewayRing;

      // Special Saturn-Like Planetary Rings (e.g. for UI/UX Design or Analytics)
      if (cfg.grandRing) {
        const grandRingGeo = new THREE.RingGeometry(cfg.radius * 1.45, cfg.radius * 2.3, 48);
        const grandRingMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(cfg.accent),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65,
          roughness: 0.3
        });
        const grandRingMesh = new THREE.Mesh(grandRingGeo, grandRingMat);
        grandRingMesh.rotation.x = Math.PI / 2.3;
        grandRingMesh.rotation.y = 0.2;
        planetMesh.add(grandRingMesh);
      } else if (cfg.ring) {
        const ringGeo = new THREE.RingGeometry(cfg.radius * 1.3, cfg.radius * 1.55, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(cfg.accent),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.45
        });
        const subRingMesh = new THREE.Mesh(ringGeo, ringMat);
        subRingMesh.rotation.x = Math.PI / 2;
        planetMesh.add(subRingMesh);
      }

      scene.add(planetMesh);
      planetMeshes.push(planetMesh);
    });

    stateRef.current.planetMeshes = planetMeshes;
    stateRef.current.orbitLines = orbitLines;

    // 6. Interactive Raycasting & Mouse Parallax
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      stateRef.current.mouse.set(x, y);

      // Subtle mouse parallax on camera
      if (!stateRef.current.isZooming) {
        stateRef.current.targetCameraPos.x = x * 4;
        stateRef.current.targetCameraPos.y = 26 + y * 3;
      }
    };

    const handlePointerLeave = () => {
      stateRef.current.mouse.set(-999, -999);
      setHoveredPlanet(null);
      setHudPosition(prev => ({ ...prev, visible: false }));
      canvas.style.cursor = 'default';
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.changedTouches && e.changedTouches[0]?.clientX);
      const clientY = e.clientY ?? (e.changedTouches && e.changedTouches[0]?.clientY);
      if (clientX !== undefined && clientY !== undefined) {
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
        stateRef.current.mouse.set(x, y);
      }

      const { raycaster, mouse, camera, planetMeshes } = stateRef.current;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planetMeshes, true);

      if (intersects.length > 0) {
        let hit = intersects[0].object;
        while (hit.parent && !hit.userData.id && hit !== scene) {
          hit = hit.parent;
        }

        if (hit.userData && hit.userData.portal) {
          const selected = hit.userData.portal;
          stateRef.current.isZooming = true;
          setIsWarping(true);

          // Warp Zoom: camera targets planet
          const pPos = new THREE.Vector3();
          hit.getWorldPosition(pPos);

          stateRef.current.targetLookAt.copy(pPos);
          stateRef.current.targetCameraPos.set(
            pPos.x * 0.7,
            pPos.y + 2.5,
            pPos.z * 0.7 + 6.0
          );

          // Trigger destination after smooth cinematic warp
          setTimeout(() => {
            onSelectPortal(selected);
          }, 450);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        stateRef.current.mouse.set(x, y);
      }
    };

    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', handlePointerLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });

    // 7. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 680;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 8. Main 60FPS Render & Physics Loop
    let lastTime = performance.now();

    const animate = (time) => {
      stateRef.current.animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Rotate Starfield gently
      if (starField) {
        starField.rotation.y += 0.0003;
      }

      // Rotate Core Planet
      if (coreMesh) {
        coreMesh.rotation.y += 0.005;
      }
      if (coreRing) {
        coreRing.rotation.z -= 0.004;
      }

      // Orbit & Rotate Planets
      const { planetMeshes, orbitLines, raycaster, mouse, camera, renderer, isOrbiting } = stateRef.current;

      planetMeshes.forEach((mesh) => {
        if (isOrbiting && !stateRef.current.isZooming) {
          mesh.userData.angle += mesh.userData.orbitSpeed;
          mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.orbitR;
          mesh.position.z = Math.sin(mesh.userData.angle) * (mesh.userData.orbitR * 0.95);
        }
        mesh.rotation.y += mesh.userData.rotationSpeed;

        if (mesh.userData.gatewayRing) {
          mesh.userData.gatewayRing.rotation.z += 0.008;
        }

        // Smooth scaling on hover
        const targetScale = mesh.userData.targetScale || 1.0;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
      });

      // Raycasting Hover Detection
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planetMeshes, true);

      let foundHovered = null;

      if (intersects.length > 0) {
        let hit = intersects[0].object;
        while (hit.parent && !hit.userData.id && hit !== scene) {
          hit = hit.parent;
        }

        if (hit.userData && hit.userData.portal) {
          foundHovered = hit;
          canvas.style.cursor = 'pointer';

          // Project 3D position to 2D screen coordinates for HUD tooltip
          const pos = new THREE.Vector3();
          hit.getWorldPosition(pos);
          pos.project(camera);

          const screenX = ((pos.x + 1) * width) / 2;
          const screenY = ((-pos.y + 1) * height) / 2;

          setHudPosition({
            x: screenX,
            y: screenY,
            visible: true
          });
        }
      }

      if (!foundHovered) {
        canvas.style.cursor = 'default';
        setHudPosition(prev => ({ ...prev, visible: false }));
      }

      // Update Planet Scales & Orbit Lines Highlight
      planetMeshes.forEach((mesh) => {
        const isThisHovered = foundHovered === mesh;
        mesh.userData.targetScale = isThisHovered ? 1.32 : 1.0;

        if (mesh.userData.haloMat) {
          mesh.userData.haloMat.opacity = isThisHovered ? 0.45 : 0.2;
        }

        if (mesh.userData.gatewayRing) {
          mesh.userData.gatewayRing.material.opacity = isThisHovered ? 0.85 : 0.35;
        }

        if (mesh.material && mesh.material.emissiveIntensity !== undefined) {
          mesh.material.emissiveIntensity = isThisHovered ? 0.65 : 0.15;
        }
      });

      orbitLines.forEach(({ line, id }) => {
        const isMatched = foundHovered && foundHovered.userData.id === id;
        line.material.color.setHex(isMatched ? 0xFF453A : 0x2A2A2A);
        line.material.opacity = isMatched ? 0.9 : 0.35;
      });

      if (foundHovered && foundHovered.userData.portal) {
        setHoveredPlanet(foundHovered.userData.portal);
      } else if (!foundHovered) {
        setHoveredPlanet(null);
      }

      // Smooth Camera Movement (Lerp)
      camera.position.lerp(stateRef.current.targetCameraPos, 0.05);
      stateRef.current.currentLookAt.lerp(stateRef.current.targetLookAt, 0.05);
      camera.lookAt(stateRef.current.currentLookAt);

      renderer.render(scene, camera);
    };

    stateRef.current.animationFrameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (stateRef.current.animationFrameId) {
        cancelAnimationFrame(stateRef.current.animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouchStart);

      // Dispose Three.js objects
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [portals, onSelectPortal]);

  // Toggle Orbit Animation
  const handleToggleOrbit = () => {
    setIsOrbiting(!isOrbiting);
  };

  // Reset Camera View to Universe Overview
  const handleResetCamera = () => {
    if (stateRef.current.camera) {
      stateRef.current.targetCameraPos.copy(stateRef.current.defaultCameraPos);
      stateRef.current.targetLookAt.set(0, 0, 0);
      stateRef.current.isZooming = false;
      setIsWarping(false);
    }
  };

  // Direct Planet Focus from Controls or Pill
  const focusPlanet = useCallback((portal) => {
    const mesh = stateRef.current.planetMeshes.find(m => m.userData.id === portal.id);
    if (!mesh || !stateRef.current.camera) return;

    stateRef.current.isZooming = true;
    setIsWarping(true);

    const pPos = new THREE.Vector3();
    mesh.getWorldPosition(pPos);

    stateRef.current.targetLookAt.copy(pPos);
    stateRef.current.targetCameraPos.set(
      pPos.x * 0.7,
      pPos.y + 2.5,
      pPos.z * 0.7 + 6.0
    );

    setTimeout(() => {
      onSelectPortal(portal);
    }, 450);
  }, [onSelectPortal]);

  return (
    <div ref={containerRef} className="relative w-full h-[650px] sm:h-[740px] lg:h-[800px] bg-[#000000] rounded-3xl overflow-hidden border border-[#292929] shadow-2xl select-none group">
      
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-default" />

      {/* Central 3D HUD Header Plaque */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center text-center">
        <div className="px-3.5 py-1 rounded-full bg-[#0D0D0D]/80 border border-[#292929] backdrop-blur-md text-[11px] font-mono text-[#FF453A] flex items-center gap-2 shadow-lg mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
          <span className="tracking-widest uppercase font-bold">INTERACTIVE 3D GALAXY</span>
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wider uppercase drop-shadow-[0_2px_15px_rgba(255,69,58,0.4)]">
          ABEETH'S <span className="text-[#FF453A]">SKILL UNIVERSE</span>
        </h3>
      </div>

      {/* Holographic Tooltip HUD (Tracks hovered planet in 3D) */}
      {hudPosition.visible && hoveredPlanet && (
        <div
          className="absolute z-30 pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-full mb-4"
          style={{ left: `${hudPosition.x}px`, top: `${hudPosition.y}px` }}
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0D0D0D]/95 border border-[#FF453A] shadow-[0_0_25px_rgba(255,69,58,0.35)] backdrop-blur-md max-w-xs text-left animate-fadeIn">
            <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#292929]">
              <span className="font-mono text-[10px] text-[#FF453A] font-bold">
                PLANET {hoveredPlanet.number} // {hoveredPlanet.planetName}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#171717] text-[#FF453A] border border-[#FF453A]/40 font-bold">
                PORTAL GATEWAY
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-extrabold text-white mt-1.5 tracking-wide">
              {hoveredPlanet.title}
            </h4>
            <p className="text-[11px] text-[#B3B3B3] font-mono mt-1 leading-snug">
              "{hoveredPlanet.tagline}"
            </p>

            <div className="mt-2.5 pt-2 border-t border-[#292929] flex items-center justify-between text-[10px] font-mono text-[#FF453A]">
              <span className="font-bold">[CLICK TO ENTER]</span>
              <span>Warp In &rarr;</span>
            </div>
          </div>
        </div>
      )}

      {/* Universe View Controls (Top-Right) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={handleToggleOrbit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D0D0D]/80 hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-white text-xs font-mono transition-all backdrop-blur-md shadow-lg"
          title={isOrbiting ? "Pause Planetary Orbit" : "Resume Planetary Orbit"}
        >
          <Compass className={`w-3.5 h-3.5 text-[#FF453A] ${isOrbiting ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          <span className="hidden sm:inline">{isOrbiting ? 'ORBIT: ON' : 'ORBIT: PAUSED'}</span>
        </button>

        <button
          onClick={handleResetCamera}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D0D0D]/80 hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-white text-xs font-mono transition-all backdrop-blur-md shadow-lg"
          title="Reset Universe Perspective"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#FF453A]" />
          <span className="hidden sm:inline">RESET VIEW</span>
        </button>
      </div>

      {/* Subtle Glowing Portal Gateways Dock (Direct Planetary Gateway Navigation) */}
      <div className="absolute bottom-4 left-3 right-3 sm:bottom-5 sm:left-4 sm:right-4 z-20 flex flex-col items-center pointer-events-none">
        <div className="w-full max-w-6xl 2xl:max-w-7xl overflow-x-auto no-scrollbar py-1 pointer-events-auto">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-2">
            {portals.map((portal) => {
              const isHovered = hoveredPlanet?.id === portal.id;
              return (
                <button
                  key={portal.id}
                  onClick={() => focusPlanet(portal)}
                  onMouseEnter={() => {
                    const mesh = stateRef.current.planetMeshes.find(m => m.userData.id === portal.id);
                    if (mesh) {
                      mesh.userData.targetScale = 1.35;
                    }
                    setHoveredPlanet(portal);
                  }}
                  onMouseLeave={() => {
                    const mesh = stateRef.current.planetMeshes.find(m => m.userData.id === portal.id);
                    if (mesh) {
                      mesh.userData.targetScale = 1.0;
                    }
                    setHoveredPlanet(null);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all duration-300 border flex items-center gap-2 backdrop-blur-md ${
                    isHovered
                      ? 'bg-[#FF453A] text-black border-[#FF453A] font-bold shadow-[0_0_20px_rgba(255,69,58,0.6)] scale-105'
                      : 'bg-[#0D0D0D]/90 text-[#B3B3B3] hover:text-white border-[#292929] hover:border-[#FF453A] shadow-[0_0_12px_rgba(255,69,58,0.15)]'
                  }`}
                  title={`Enter ${portal.title}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-black animate-ping' : 'bg-[#FF453A]'}`} />
                  <span className={isHovered ? 'text-black' : 'text-[#FF453A] font-bold'}>
                    {portal.number}
                  </span>
                  <span className="tracking-wide">
                    {portal.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Warp Transition Effect Flash */}
      {isWarping && (
        <div className="absolute inset-0 z-40 bg-[#FF453A]/10 pointer-events-none animate-pulse transition-opacity duration-300" />
      )}

    </div>
  );
}

