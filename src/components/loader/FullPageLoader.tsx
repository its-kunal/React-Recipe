import FaceSVG from "../../assets/Face.svg";
import MoustacheSVG from "../../assets/Moustache.svg";

export default function FullPageLoader() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center min-w-[100%]">
      <AnimationLogo />
    </div>
  );
}

export function AnimationLogo() {
  return (
    <div className="h-24 w-24 relative animate-bounce">
      <img src={FaceSVG} alt="" className="absolute h-24 w-24" />
      <img
        src={MoustacheSVG}
        alt=""
        className="absolute h-3 w-24 bottom-[14px] animate-ping"
      />
    </div>
  );
}
