import texts from "../../../common/texts.js";
import { Fragment, useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import actions from "../../../common/actions";

export default function EmptyList() {
  const { dispatch } = useContext(StateContext);
  return (
    <Fragment>
      <div >
        <div>
          <h1>{texts["empty-list-title"]}</h1>
          <p>{texts["empty-list-description"]}</p>
        </div>
        <div>
          <button
            data-testid="add-message"
            onClick={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
          >
            {texts["add-message"]}
          </button>
        </div>
      </div>
    </Fragment>
  );
}
