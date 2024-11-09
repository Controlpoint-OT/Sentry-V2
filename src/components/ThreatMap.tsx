import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AttackLine {
  line: THREE.Line;
  progress: number;
  speed: number;
  color: THREE.Color;
}

export function ThreatMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({
    totalAttacks: 0,
    activeThreats: 0,
    criticalAlerts: 0
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Earth setup
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
      bumpMap: new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
      bumpScale: 0.05,
      specularMap: new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'),
      specular: new THREE.Color('grey'),
      shininess: 10
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(5.1, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        glowColor: { value: new THREE.Color(0x6699ff) },
        viewVector: { value: camera.position }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPositionNormal = normalize(normalMatrix * position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform vec3 viewVector;
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(glowColor, intensity * 0.3);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 10;

    // Attack lines
    const attackLines: AttackLine[] = [];
    const maxAttackLines = 50;

    const threatColors = {
      critical: new THREE.Color(0xff0000),
      high: new THREE.Color(0xff6600),
      medium: new THREE.Color(0xffcc00),
      low: new THREE.Color(0x00ff00)
    };

    function getRandomThreatColor() {
      const rand = Math.random();
      if (rand < 0.2) return threatColors.critical;
      if (rand < 0.4) return threatColors.high;
      if (rand < 0.7) return threatColors.medium;
      return threatColors.low;
    }

    function createAttackLine() {
      const radius = 5;
      const start = new THREE.Vector3();
      const end = new THREE.Vector3();

      // Random spherical coordinates for start and end points
      const phi1 = Math.random() * Math.PI * 2;
      const theta1 = Math.random() * Math.PI;
      start.setFromSphericalCoords(radius, theta1, phi1);

      const phi2 = Math.random() * Math.PI * 2;
      const theta2 = Math.random() * Math.PI;
      end.setFromSphericalCoords(radius, theta2, phi2);

      // Create curved path
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(radius * 1.5);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const color = getRandomThreatColor();
      const material = new THREE.LineBasicMaterial({
        color: color,
        opacity: 0,
        transparent: true,
        linewidth: 2
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      const attackLine: AttackLine = {
        line,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
        color
      };

      attackLines.push(attackLine);

      if (attackLines.length > maxAttackLines) {
        const oldLine = attackLines.shift();
        if (oldLine) {
          scene.remove(oldLine.line);
          oldLine.line.geometry.dispose();
          (oldLine.line.material as THREE.Material).dispose();
        }
      }

      // Update stats
      setStats(prev => ({
        totalAttacks: prev.totalAttacks + 1,
        activeThreats: attackLines.length,
        criticalAlerts: Math.floor(attackLines.filter(l => l.color.equals(threatColors.critical)).length)
      }));
    }

    // Animation
    let frame = 0;
    const animate = () => {
      frame++;
      requestAnimationFrame(animate);

      earth.rotation.y += 0.001;
      atmosphere.rotation.y += 0.001;

      // Add new attack line every 60 frames
      if (frame % 60 === 0) {
        createAttackLine();
      }

      // Update attack lines
      attackLines.forEach(attackLine => {
        attackLine.progress += attackLine.speed;
        
        if (attackLine.progress <= 1) {
          // Fade in
          attackLine.line.material.opacity = Math.min(attackLine.progress * 2, 1);
        } else if (attackLine.progress > 2) {
          // Fade out
          attackLine.line.material.opacity = Math.max(0, 3 - attackLine.progress);
        }

        if (attackLine.progress >= 3) {
          // Remove completed lines
          scene.remove(attackLine.line);
          attackLine.line.geometry.dispose();
          (attackLine.line.material as THREE.Material).dispose();
          attackLines.splice(attackLines.indexOf(attackLine), 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="w-full h-[600px] bg-slate-900 rounded-lg overflow-hidden" />
      <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">Total Attacks:</span>
          <span className="text-cyan-500 font-mono">{stats.totalAttacks.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">Active Threats:</span>
          <span className="text-yellow-500 font-mono">{stats.activeThreats.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">Critical Alerts:</span>
          <span className="text-red-500 font-mono">{stats.criticalAlerts.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}