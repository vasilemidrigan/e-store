import ControlBtn from "./ControlBtn"

export default function ControlsWrapper() {
  return (
    <div className="ControlsWrapper">
     <ControlBtn isActive={true}/> 
     <ControlBtn/> 
     <ControlBtn/> 
    </div>
  )
}