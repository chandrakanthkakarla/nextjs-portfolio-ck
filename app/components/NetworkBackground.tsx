export default function NetworkBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 15%, rgba(249,115,22,0.15), transparent 18%)," +
          "radial-gradient(circle at 85% 25%, rgba(59,130,246,0.12), transparent 20%)," +
          "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,0.92) 100%)",
        opacity: 0.92,
      }}
    />
  );
}
