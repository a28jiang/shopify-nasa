import React from "react";
import { Button, ButtonGroup, Subheading } from "@shopify/polaris";

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
      <Subheading>{page}</Subheading>
      <Button onClick={() => handlePageChange(1)}>{`>`}</Button>
    </ButtonGroup>
  );
};
export default Options;
