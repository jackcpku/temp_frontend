import React from "react";

import { /*Typography,*/ Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#443c3e",
    color: "white",
    padding: "20px",
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="xl">
        <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" m={1}>
          Web3 News
        </Box>
        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" m={1}>
          {"Attention is all you need."}
        </Box>
      </Container>
    </React.Fragment>
  );
};
