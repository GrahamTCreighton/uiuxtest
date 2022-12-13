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
          width: "590px",
          height: "314px",
          top: "297px",
          left: "425px",
          padding: "16px,24px,24px,24px",
          gap: "16px",
          display: "flex",
          felxDirection: "column",
          alignItems: "flex-start",
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
              lineHeight: "80px",
              flex: "none",
              order: "0",
              alignSelf: "stretch",
              flexGrow: "0",
            }}
          />
          <div
            css={{
              top: "192px",
              left: "24px",
              gap: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              width: "542px",
              Height: "98px",
              flex: "none",
              order: "1",
              alignSelf: "stretch",
              flexGrow: "0",
            }}
          >
            <Content
              as="div"
              size="subheader"
              css={{
                width: "542px",
                height: "26px",
                lineHeight: "26px",
                flex: "none",
                order: "0",
                alignSelf: "stretch",
                flexGrow: "0",
              }}
            >
              {texts["empty-list-description"]}
            </Content>
          </div>
          <div>
            <Button
              css={{
                top: "58px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                borderRadius: "45px",
                flex: "none",
                order: "1",
                flexGrow: "0",
              }}
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
