interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: "smooth" | "jagged" | "gentle" | "layered" | "asymmetric" | "subtle" | "tilt";
  flip?: boolean;
  className?: string;
}

const wavePaths: Record<string, string> = {
  smooth:
    "M0,64 C320,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,320 L0,320 Z",
  jagged:
    "M0,160 L120,96 L240,192 L360,64 L480,160 L600,96 L720,192 L840,64 L960,160 L1080,96 L1200,192 L1320,64 L1440,160 L1440,320 L0,320 Z",
  gentle:
    "M0,224 C360,320 720,128 1080,224 C1260,272 1380,192 1440,224 L1440,320 L0,320 Z",
  layered:
    "M0,160 C240,224 480,96 720,160 C960,224 1200,128 1440,192 L1440,320 L0,320 Z",
  asymmetric:
    "M0,128 C180,256 360,64 540,160 C720,256 900,96 1080,192 C1260,288 1380,128 1440,192 L1440,320 L0,320 Z",
  subtle:
    "M0,256 C360,288 720,224 1080,256 C1260,272 1380,240 1440,256 L1440,320 L0,320 Z",
  tilt:
    "M0,288 L1440,192 L1440,320 L0,320 Z",
};

const WaveDivider = ({
  topColor,
  bottomColor,
  variant = "smooth",
  flip = false,
  className = "",
}: WaveDividerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{
        backgroundColor: topColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePaths[variant]} fill={bottomColor} />
      </svg>
    </div>
  );
};

export default WaveDivider;
