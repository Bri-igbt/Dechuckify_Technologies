const shapes = [
  // Floating orbs
  { type: "orb", x: 10, y: 15, size: 300, color: "#3d1fa8", delay: 0, duration: 8 },
  { type: "orb", x: 75, y: 60, size: 200, color: "#1a4adb", delay: 2, duration: 10 },
  { type: "orb", x: 50, y: 80, size: 250, color: "#6d28d9", delay: 1, duration: 12 },
  { type: "orb", x: 85, y: 10, size: 180, color: "#0e7490", delay: 3, duration: 9 },

  // Rings
  { type: "ring", x: 80, y: 20, size: 220, color: "#7c3aed", delay: 0.5, duration: 14 },
  { type: "ring", x: 15, y: 70, size: 160, color: "#4f46e5", delay: 2.5, duration: 11 },
  { type: "ring", x: 60, y: 40, size: 130, color: "#2563eb", delay: 4, duration: 13 },

  // Triangles
  { type: "triangle", x: 20, y: 30, size: 80, color: "#7c3aed", delay: 1, duration: 15 },
  { type: "triangle", x: 70, y: 75, size: 60, color: "#6366f1", delay: 3, duration: 10 },
  { type: "triangle", x: 45, y: 10, size: 50, color: "#818cf8", delay: 0, duration: 12 },

  // Squares / diamonds
  { type: "diamond", x: 88, y: 55, size: 70, color: "#7c3aed", delay: 2, duration: 9 },
  { type: "diamond", x: 5,  y: 85, size: 50, color: "#4338ca", delay: 0.5, duration: 13 },
  { type: "diamond", x: 55, y: 90, size: 40, color: "#818cf8", delay: 3.5, duration: 11 },

  // Plus / cross
  { type: "plus", x: 30, y: 55, size: 40, color: "#a78bfa", delay: 1.5, duration: 16 },
  { type: "plus", x: 92, y: 80, size: 30, color: "#60a5fa", delay: 4, duration: 10 },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-300 to-purple-500" />

      {/* Shapes */}
      {shapes.map((shape, i) => (
        <ShapeItem key={i} shape={shape} index={i} />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0f0640_100%)] opacity-60" />
    </div>
  );
}

function ShapeItem({ shape, index }: { shape: typeof shapes[0]; index: number }) {
  const style: React.CSSProperties = {
    position: "absolute",
    left: `${shape.x}%`,
    top: `${shape.y}%`,
    animationDelay: `${shape.delay}s`,
    animationDuration: `${shape.duration}s`,
  };

  if (shape.type === "orb") {
    return (
      <div
        style={{
          ...style,
          width: shape.size,
          height: shape.size,
          borderRadius: "50%",
          background: shape.color,
          filter: "blur(80px)",
          opacity: 0,
          animation: `floatOrb ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  if (shape.type === "ring") {
    return (
      <div
        style={{
          ...style,
          width: shape.size,
          height: shape.size,
          borderRadius: "50%",
          border: `1.5px solid ${shape.color}`,
          opacity: 0,
          animation: `floatRing ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 20px ${shape.color}40, inset 0 0 20px ${shape.color}20`,
        }}
      />
    );
  }

  if (shape.type === "triangle") {
    return (
      <div
        style={{
          ...style,
          width: 0,
          height: 0,
          borderLeft: `${shape.size / 2}px solid transparent`,
          borderRight: `${shape.size / 2}px solid transparent`,
          borderBottom: `${shape.size * 0.9}px solid ${shape.color}`,
          opacity: 0,
          filter: "drop-shadow(0 0 8px " + shape.color + "80)",
          animation: `floatSpin ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  if (shape.type === "diamond") {
    return (
      <div
        style={{
          ...style,
          width: shape.size,
          height: shape.size,
          border: `1.5px solid ${shape.color}`,
          opacity: 0,
          animation: `floatDiamond ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          transform: "translate(-50%, -50%) rotate(45deg)",
          boxShadow: `0 0 12px ${shape.color}60`,
        }}
      />
    );
  }

  if (shape.type === "plus") {
    return (
      <div
        style={{
          ...style,
          opacity: 0,
          animation: `floatOrb ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Horizontal bar */}
        <div style={{
          position: "absolute",
          width: shape.size,
          height: 2,
          background: shape.color,
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          boxShadow: `0 0 8px ${shape.color}`,
        }} />
        {/* Vertical bar */}
        <div style={{
          position: "absolute",
          width: 2,
          height: shape.size,
          background: shape.color,
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          boxShadow: `0 0 8px ${shape.color}`,
        }} />
      </div>
    );
  }

  return null;
}