import Markdown from "react-markdown";
import { terms } from "./data";
import { Fragment } from "react";

const Tac = () => {
  return (
    <Fragment>
      <Markdown>{terms}</Markdown>
    </Fragment>
  );
};

export default Tac;
