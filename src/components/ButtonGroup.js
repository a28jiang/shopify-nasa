import React from "react";
import { Button, ButtonGroup, Caption } from "@shopify/polaris";

const Options = ({ setPage, page }) => {
  const handlePageChange = (step) => {
    setPage(page + step);
  };
  return (
    <ButtonGroup>
      <Button
        onClick={() => handlePageChange(-1)}
        disabled={page === 1}
      >{`<`}</Button>
      <Caption>{page}</Caption>
      <Button onClick={() => handlePageChange(1)}>{`>`}</Button>
    </ButtonGroup>
  );
};
export default Options;
