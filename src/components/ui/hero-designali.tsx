
"use client";

import { cn } from "@/lib/utils";
import { ReactTyped } from "react-typed";

// Polyfill for n-class
function n(e: any) {
  this.init(e || {});
}
n.prototype = {
  init: function (e: any) {
    this.phase = e?.phase || 0;
    this.offset = e?.offset || 0;
    this.frequency = e?.frequency || 0.001;
    this.amplitude = e?.amplitude || 1;
  },
  update: function () {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
  value: function () {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
};

function Node(this: any) {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

let ctx: any, f: any, pos: any = {}, lines: any[] = [];
const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function Line(this: any, e: any) {
  this.init(e || {});
}
Line.prototype = {
  init: function (e: any) {
    this.spring = e?.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let n = 0; n < E.size; n++) {
      let t = new (Node as any)();
      t.x = pos.x || 0;
      t.y = pos.y || 0;
      this.nodes.push(t);
    }
  },
  update: function () {
    let e = this.spring, t = this.nodes[0];
    t.vx += ((pos.x || 0) - t.x) * e;
    t.vy += ((pos.y || 0) - t.y) * e;
    for (let i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        let n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  },
  draw: function () {
    let e, t, n = this.nodes[0].x, i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[this.nodes.length - 2];
    t = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  }
};

function onMousemove(e: any) {
  function o() {
    lines = [];
    for (let i = 0; i < E.trails; i++)
      lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
  function c(e: any) {
    if (e.touches) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }
  function l(e: any) {
    if (e.touches && e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }
  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove);
  document.addEventListener("mousemove", c);
  document.addEventListener("touchmove", c);
  document.addEventListener("touchstart", l);
  c(e);
  o();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    for (let t = 0; t < E.trails; t++) {
      lines[t].update();
      lines[t].draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

const renderCanvas = function () {
  ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d");
  ctx.running = true;
  ctx.frame = 1;
  f = new (n as any)({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("touchstart", onMousemove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  resizeCanvas();
};

interface TypeWriterProps {
  strings: string[];
}

const TypeWriter = ({ strings }: TypeWriterProps) => {
  return (
    <ReactTyped
      loop
      typeSpeed={80}
      backSpeed={20}
      strings={strings}
      smartBackspace
      backDelay={1000}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  );
};

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      } as React.CSSProperties}
      className={cn(
        "relative grid h-full w-full place-items-center rounded-3xl bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
        } as React.CSSProperties}
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-3xl before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}

export { renderCanvas, TypeWriter, ShineBorder };
