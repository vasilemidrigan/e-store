import controlActive from "@/public/icons/image-carousel/control-active.svg";

export default function ControlBtn({isActive}) {  
  return (
    <div className={`ControlBtn ${isActive ? 'ControlBtn--active' : ''}`} >
    </div>
  )
}