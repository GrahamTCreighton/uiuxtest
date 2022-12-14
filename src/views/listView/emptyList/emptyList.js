/** @jsxImportSource @emotion/react */
import texts from "../../../common/texts.js";
import { Fragment, useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import actions from "../../../common/actions";
import { Button } from "components/Button.jsx";
import { Content } from "components/TypographyContent.jsx";
import { Header } from "components/TypographyHeaders.jsx";
import { Tweets } from "common/icons/index.jsx";

export default function EmptyList() {
  const { dispatch } = useContext(StateContext);
  return (
    <Fragment>
      <div
        css={{
          width: "50%",
          top: "297px",
          left: "497px",
          display: "flex",
          felxDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <div>
          <Header
            as="h1"
            size="H1"
            dangerouslySetInnerHTML={{ __html: texts["empty-list-title"] }}
            css={{
              top: "16px",
              left: "24px",
              width: "542px",
              height: "160px",
              alignSelf: "stretch",
            }}
          />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
              lineHeight: "64px",
            }}
          >
            <Content as="div" size="subheader">
              {texts["empty-list-description"]}
            </Content>
            <Button
              data-testid="add-message"
              onClick={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
            >
              <Tweets />
              {texts["add-message"]}
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
