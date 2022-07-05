import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <container className="kitchen">
      <span className="kitchen-text">
        Kitchen
      </span>
      <Oven />
      <Sink />
    </container>
  )
}

export default Kitchen