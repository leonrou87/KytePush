"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  A living sheet of iridescent silk in a dusk sky. The cursor presses into it;
  holding (pointer or space bar) pushes wind through it until it lifts off.
  As the page scrolls the sky falls to night and the silk takes on the colours
  of whichever section is in view ([data-silk] attributes).
*/

const PALETTES: Record<string, { a: string; b: string; hue: number }> = {
  hero: { a: "#a9b8ff", b: "#ffc4dc", hue: 0.0 },
  statement: { a: "#c3b4ff", b: "#ffd6c2", hue: 0.12 },
  sports: { a: "#6f8dff", b: "#9ff0ff", hue: 0.55 },
  media: { a: "#ff8f72", b: "#ffd77a", hue: 0.04 },
  life: { a: "#71e6c9", b: "#d2f7ad", hue: 0.36 },
  golf: { a: "#9fe07c", b: "#f4f0a2", hue: 0.26 },
  markets: { a: "#ffc95c", b: "#ff9d72", hue: 0.1 },
  tools: { a: "#b89dff", b: "#ff9ff0", hue: 0.78 },
  platform: { a: "#c9d3ff", b: "#ffffff", hue: 0.62 },
  rules: { a: "#ffd0b0", b: "#c8b8ff", hue: 0.3 },
  access: { a: "#ffb3cb", b: "#ffe3b2", hue: 0.9 },
};

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const SILK_VERT = /* glsl */ `
${NOISE}
uniform float uT, uPush, uLift, uSeed, uMouseOn;
uniform vec2 uMouse;
varying vec3 vN; varying vec3 vPos; varying vec2 vUv; varying float vD;

float disp(vec2 p){
  float hold = smoothstep(-3.4, 2.6, p.x);           // the left hem is held; the free edge flies
  float n = snoise(vec3(p*0.32 + uSeed, uT*0.2))*0.7
          + snoise(vec3(p*0.7 + 7.0 + uSeed, uT*0.33))*0.2
          + snoise(vec3(p*1.4 + 13.0, uT*0.5))*0.03*(0.3+uPush);
  float wave = sin(p.x*1.15 - uT*1.25 + p.y*0.55)*(0.16 + uPush*0.34);
  float crease = (1.0 - abs(snoise(vec3(p*vec2(0.5,0.9) + 21.0 + uSeed, uT*0.18))))*0.22;  // satin folds
  float billow = (0.22 + uPush*0.95) * (1.0 - pow(p.y/2.3, 2.0)) * hold;
  float d = (n + wave + crease)*mix(0.35, 1.0, hold) + billow;
  vec2 dm = p - uMouse;
  d -= uMouseOn*0.5*exp(-dot(dm,dm)*0.85);           // a fingertip pressing in
  return d;
}

void main(){
  vUv = uv;
  vec3 p = position;
  float e = 0.025;
  float d = disp(p.xy);
  float dx = disp(p.xy + vec2(e,0.0)) - d;
  float dy = disp(p.xy + vec2(0.0,e)) - d;
  vec3 n = normalize(vec3(-dx/e, -dy/e, 1.0));
  p.z += d;
  p.y += uPush*0.32*pow(max(p.x+3.2,0.0)/6.4, 2.0) + uLift;
  vD = d;
  vec4 wp = modelMatrix*vec4(p,1.0);
  vPos = wp.xyz;
  vN = normalize(mat3(modelMatrix)*n);
  gl_Position = projectionMatrix*viewMatrix*wp;
}
`;

const SILK_FRAG = /* glsl */ `
${NOISE}
uniform vec3 uA, uB;
uniform float uHue, uT, uDim, uAlpha, uPush, uFilm;
varying vec3 vN; varying vec3 vPos; varying vec2 vUv; varying float vD;

void main(){
  vec3 V = normalize(cameraPosition - vPos);
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  float ndv = clamp(dot(N,V), 0.0, 1.0);

  // thin-film interference: colour follows film thickness and viewing angle
  float thick = snoise(vec3(vUv*vec2(2.2,1.6), uT*0.06))*0.5 + 0.5;
  float ph = thick*1.4 + (1.0-ndv)*1.25 + uHue + vD*0.35;
  vec3 film = 0.5 + 0.5*cos(6.28318*(ph + vec3(0.0,0.33,0.67)));

  vec3 base = mix(uA, uB, smoothstep(0.0, 1.0, vUv.x*0.6 + thick*0.4));
  vec3 col = mix(base, film, uFilm);

  vec3 L = normalize(vec3(-0.4, 0.8, 0.6));
  float lam = max(dot(N,L), 0.0);
  col *= mix(0.32, 0.6, 1.0 - uFilm*2.0) + 0.78*lam;
  float fres = pow(1.0-ndv, 2.4);
  vec3 H = normalize(L+V);
  float spec = pow(max(dot(N,H), 0.0), 22.0);
  col += fres*0.6*mix(base, film, min(1.0, uFilm*2.2)) + spec*(0.32 + uPush*0.3);
  col += (sin(vUv.y*900.0)*0.5+0.5)*0.014;           // the weave

  float edge = smoothstep(0.0,0.035,vUv.x)*smoothstep(1.0,0.86,vUv.x)
             * smoothstep(0.0,0.05,vUv.y)*smoothstep(1.0,0.95,vUv.y);
  // a hairline of light along the hems
  float hem = (1.0 - smoothstep(0.0, 0.012, min(vUv.y, 1.0 - vUv.y))) * smoothstep(0.0,0.1,vUv.x)*smoothstep(1.0,0.75,vUv.x);
  col += hem*0.6;
  float a = (0.36 + fres*0.42 + spec*0.2 + hem*0.5 + (0.36 - uFilm)*0.9) * edge * uAlpha;
  gl_FragColor = vec4(col*uDim, a);
}
`;

const MOTE_VERT = /* glsl */ `
uniform float uT, uPush, uBurst, uPx;
attribute float aR;
varying float vA;
void main(){
  vec3 p = position;
  p.x = mod(p.x + uT*(0.3 + aR*0.55) + 9.0, 18.0) - 9.0;
  p.y += sin(uT*0.6 + aR*20.0)*0.25 + uPush*0.7*sin(p.x*0.5 + aR*6.0);
  p.y += uBurst*(aR - 0.25)*3.4;
  vec4 mv = modelViewMatrix*vec4(p,1.0);
  gl_Position = projectionMatrix*mv;
  gl_PointSize = (1.6 + aR*3.4)*(1.0 + uPush*0.9 + uBurst*1.6)*uPx*2.6/(-mv.z);
  vA = (0.22 + aR*0.6)*(0.55 + uPush*0.7 + uBurst*1.2);
}
`;
const MOTE_FRAG = /* glsl */ `
uniform float uDim;
varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(1.0, 0.92, 0.8, a*a*vA*uDim);
}
`;

export function Silk() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const el = canvas.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // no WebGL: the CSS sky alone still carries the page
    }
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0, 0, 8);

    const common = {
      uT: { value: 0 }, uPush: { value: 0 }, uLift: { value: 0 },
      uMouse: { value: new THREE.Vector2(99, 99) }, uMouseOn: { value: 0 },
      uA: { value: new THREE.Color(PALETTES.hero.a) }, uB: { value: new THREE.Color(PALETTES.hero.b) },
      uHue: { value: 0 }, uDim: { value: 1 }, uFilm: { value: 0.36 },
    };
    const sheet = (seed: number, alpha: number, seg: [number, number]) => {
      const mat = new THREE.ShaderMaterial({
        vertexShader: SILK_VERT, fragmentShader: SILK_FRAG,
        uniforms: { ...common, uSeed: { value: seed }, uAlpha: { value: alpha } },
        transparent: true, depthWrite: false, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 4.6, seg[0], seg[1]), mat);
      scene.add(mesh);
      return mesh;
    };
    const back = sheet(11.3, 0.5, [110, 80]);
    const front = sheet(0, 1, [190, 130]);

    // motes of light carried on the wind
    const N = 520;
    const pos = new Float32Array(N * 3), rnd = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = -3 + Math.random() * 5;
      rnd[i] = Math.random();
    }
    const mg = new THREE.BufferGeometry();
    mg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    mg.setAttribute("aR", new THREE.BufferAttribute(rnd, 1));
    const moteU = { uT: { value: 0 }, uPush: common.uPush, uBurst: { value: 0 }, uPx: { value: 1 }, uDim: common.uDim };
    const motes = new THREE.Points(mg, new THREE.ShaderMaterial({
      vertexShader: MOTE_VERT, fragmentShader: MOTE_FRAG, uniforms: moteU,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    scene.add(motes);

    let w = 0, h = 0, mobile = false;
    function resize() {
      w = window.innerWidth; h = window.innerHeight;
      mobile = w < 760;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      moteU.uPx.value = h * dpr / 900;
    }
    resize();

    // ── interaction state ──
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const plane = new THREE.Plane();
    const hitPt = new THREE.Vector3();
    const mouseTarget = new THREE.Vector2(99, 99);
    let pointerIn = false, holding = false, holdStart = 0, charge = 0, push = 0, liftAt = -1, burst = 0;
    let night = 0, windT = 0, last = performance.now(), raf = 0, running = true;
    const born = performance.now();
    const title = document.getElementById("lift-title");
    let ringX = w / 2, ringY = h * 0.78;
    const target = { a: new THREE.Color(PALETTES.hero.a), b: new THREE.Color(PALETTES.hero.b), hue: 0 };

    const interactive = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest("a,button,input,textarea,select,label,[data-nopush]");

    function onMove(e: PointerEvent) {
      pointerIn = true;
      ndc.set((e.clientX / w) * 2 - 1, -(e.clientY / h) * 2 + 1);
      ringX = e.clientX; ringY = e.clientY;
    }
    function startPush(x?: number, y?: number) {
      if (holding) return;
      holding = true;
      holdStart = performance.now();
      if (x !== undefined && y !== undefined) { ringX = x; ringY = y; }
      ringRef.current?.setAttribute("data-on", "1");
    }
    function endPush() {
      if (!holding) return;
      holding = false;
      ringRef.current?.removeAttribute("data-on");
      if (performance.now() - holdStart >= 1700) { liftAt = performance.now(); burst = 1; } // lift-off
      charge = 0;
    }
    function onDown(e: PointerEvent) {
      if (e.button !== 0 || interactive(e.target)) return;
      // on touch, only the open sky of the hero pushes, so reading and scrolling stay normal
      if (e.pointerType === "touch" && night > 0.35) return;
      startPush(e.clientX, e.clientY);
    }
    function onKey(e: KeyboardEvent) {
      if (e.code !== "Space") return;
      const t = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(t.tagName) || t.isContentEditable) return;
      if (night > 0.5) return; // let space scroll the page once past the sky
      e.preventDefault();
      if (e.type === "keydown" && !e.repeat) startPush(w / 2, h * 0.78);
      if (e.type === "keyup") endPush();
    }
    function onVis() { running = !document.hidden; if (running) { last = performance.now(); raf = requestAnimationFrame(frame); } }

    // which section is the silk dressed for?
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-silk]"));
    function pickPalette() {
      let best = "hero", bd = Infinity;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) continue;
        const d = Math.abs((r.top + r.bottom) / 2 - h / 2) - r.height / 2;
        if (d < bd) { bd = d; best = s.dataset.silk!; }
      }
      const p = PALETTES[best] ?? PALETTES.hero;
      target.a.set(p.a); target.b.set(p.b); target.hue = p.hue;
    }

    function frame(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      night = Math.min(1, window.scrollY / (h * 0.85));
      document.documentElement.style.setProperty("--night", night.toFixed(3));
      pickPalette();

      if (holding) charge = Math.min(1, (now - holdStart) / 1700);
      const intro = reduce ? 1 : 1 - Math.pow(1 - Math.min(1, (now - born) / 2800), 3);
      const want = Math.max(holding ? 0.3 + charge * 0.7 : 0, (1 - intro) * 0.9);
      push += (want - push) * (holding ? 0.06 : 0.025);
      windT += dt * (1 + push * 2.6);

      // lift-off: the silk soars up out of frame, then drifts back down to rest
      let lift = 0;
      if (liftAt >= 0) {
        const ph = (now - liftAt) / 3400;
        if (ph >= 1) liftAt = -1;
        else lift = Math.sin(Math.PI * Math.pow(ph, 0.7)) * (mobile ? 2.6 : 3.4);
      }
      burst *= 0.965;

      // pointer → silk-local coordinates
      if (pointerIn) {
        ray.setFromCamera(ndc, camera);
        front.updateMatrixWorld();
        const nrm = new THREE.Vector3(0, 0, 1).applyQuaternion(front.quaternion);
        plane.setFromNormalAndCoplanarPoint(nrm, front.position);
        if (ray.ray.intersectPlane(plane, hitPt)) {
          const local = front.worldToLocal(hitPt.clone());
          mouseTarget.set(local.x, local.y);
        }
      }
      common.uMouse.value.lerp(mouseTarget, 0.12);
      common.uMouseOn.value += ((pointerIn && night < 0.6 ? 1 : 0) - common.uMouseOn.value) * 0.06;

      common.uT.value = windT;
      moteU.uT.value = windT;
      common.uPush.value = push;
      common.uLift.value = lift;
      moteU.uBurst.value = burst;
      common.uA.value.lerp(target.a, 0.04);
      common.uB.value.lerp(target.b, 0.04);
      common.uHue.value += (target.hue - common.uHue.value) * 0.04;
      common.uDim.value = 1 - night * (mobile ? 0.6 : 0.12);

      // composition: low and wide beneath the hero headline; once you're reading,
      // a tall ribbon along the right edge so text sits on clear night sky
      const t = now / 1000;
      const k = night * night * (3 - 2 * night); // smoothstep
      const mix = (a: number, b: number) => a + (b - a) * k;
      common.uFilm.value = mix(0.36, 0.14);
      (front.material as THREE.ShaderMaterial).uniforms.uAlpha.value = intro;
      (back.material as THREE.ShaderMaterial).uniforms.uAlpha.value = 0.5 * intro;
      const s = mobile ? mix(0.6, 0.55) : mix(0.82, 0.56);
      front.scale.setScalar(s * (0.6 + 0.4 * intro));
      front.position.set(
        mobile ? mix(0.1, 1.75) : mix(0.35, 5.45 * camera.aspect / 1.6),
        mix(mobile ? -1.2 : -1.3, 0) + Math.sin(t * 0.3) * 0.06 - (1 - intro) * 1.6,
        mix(0, -0.6),
      );
      front.rotation.set(
        mix(-0.95, -0.25) + Math.sin(t * 0.21) * 0.05,
        mix(0.28, -0.55),
        mix(mobile ? 0.55 : 0.1, 1.45) + Math.sin(t * 0.17) * 0.04,
      );
      back.scale.setScalar(s * 0.8);
      back.position.set(front.position.x - mix(mobile ? 0.4 : 2.4, 1.3), front.position.y + mix(0.5, -0.8), -2.6);
      back.rotation.set(-0.2, -0.3, mix(mobile ? 0.8 : -0.25, 1.7) + Math.sin(t * 0.13) * 0.05);

      // the headline rides the same wind
      if (title && night < 1) {
        title.style.setProperty("--push", push.toFixed(3));
        title.style.setProperty("--lift", (lift / 3.4).toFixed(3));
        title.style.setProperty("--wt", windT.toFixed(3));
      }

      // the push ring follows the finger
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
        if (arcRef.current) arcRef.current.style.strokeDashoffset = String(150.8 * (1 - charge));
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", endPush);
    window.addEventListener("pointercancel", endPush);
    window.addEventListener("blur", endPush);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    document.addEventListener("visibilitychange", onVis);
    document.documentElement.addEventListener("pointerleave", () => { pointerIn = false; });

    if (reduce) {
      // a single still frame; the page still recolours on scroll
      const still = () => { last = performance.now(); running = true; frame(last); running = false; cancelAnimationFrame(raf); };
      still();
      window.addEventListener("scroll", still, { passive: true });
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", endPush);
      window.removeEventListener("pointercancel", endPush);
      window.removeEventListener("blur", endPush);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
      document.removeEventListener("visibilitychange", onVis);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} className="silk-canvas" aria-hidden="true" />
      <div ref={ringRef} className="push-ring" aria-hidden="true">
        <svg viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <circle ref={arcRef} cx="28" cy="28" r="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="150.8" strokeDashoffset="150.8" transform="rotate(-90 28 28)" />
        </svg>
      </div>
    </>
  );
}
