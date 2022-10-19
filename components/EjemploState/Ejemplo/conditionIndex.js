import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons";

const ConditionIndex = () => {
  //const [condition, setCondicion] = useState(true)
  const [condition, setCondicion] = useState(true)
  return (
    <>
      {/* <div>
        <button onClick={() => setCondicion(!condition)}>toggle</button>
        {
          condition
            ? <h1> true </h1>
            : <h1> false </h1>
        }

      </div> */}
      <div>
        <button onClick={() => setCondicion(!condition)}>toggle</button>
        {
          condition
            ? <i><FontAwesomeIcon icon={faAngleUp} />  </i>
            : <i><FontAwesomeIcon icon={faAngleDown} />  </i>
        }

      </div>
    </>

  )
}

export default ConditionIndex;