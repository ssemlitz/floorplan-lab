import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div className="kitchen">
      Kitchen
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen