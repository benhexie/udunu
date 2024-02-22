import { Fragment } from "react";
import { privacy } from "./data";
import Markdown from "react-markdown";

const Privacy = () => {
  return (
    <Fragment>
      <Markdown>{privacy}</Markdown>
    </Fragment>
  );
};

export default Privacy;
