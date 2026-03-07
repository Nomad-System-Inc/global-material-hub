interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: keyof typeof wavePaths;
  flip?: boolean;
  className?: string;
}

const wavePaths = {
  // Custom inline paths
  smooth:
    "M0,64 C320,128 480,0 720,64 C960,128 1200,0 1440,64 L1440,320 L0,320 Z",
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

  // From SVG assets
  heroWave:
    "M0,320L205.7,160L411.4,96L617.1,160L822.9,128L1028.6,128L1234.3,64L1440,192L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z",
  accentBottom:
    "M0,320L205.7,160L411.4,96L617.1,160L822.9,128L1028.6,128L1234.3,64L1440,192L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z",
  waveSharp:
    "M0,96L205.7,160L411.4,0L617.1,192L822.9,160L1028.6,128L1234.3,160L1440,160L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z",
  waveSmooth:
    "M0,320L34.3,293.3C68.6,267,137,213,206,176C274.3,139,343,117,411,117.3C480,117,549,139,617,144C685.7,149,754,139,823,133.3C891.4,128,960,128,1029,117.3C1097.1,107,1166,85,1234,96C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
  waveJagged:
    "M0,64L160,256L320,160L480,224L640,224L800,160L960,192L1120,128L1280,64L1440,192L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z",
};

const WaveDivider = ({
  topColor,
  bottomColor,
  variant = "smooth",
  flip = false,
  className = "",
}: WaveDividerProps) => {
  // heroWave fills from top, all others fill from bottom
  const isTopFill = variant === "heroWave";

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{
        backgroundColor: isTopFill ? bottomColor : topColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePaths[variant]} fill={isTopFill ? topColor : bottomColor} />
      </svg>
    </div>
  );
};

export default WaveDivider;
