import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, marginLeft: 80, marginRight: 80 },
  margin: {
    height: theme.spacing(3),
  },
}));

export const Controller: React.FC = () => {
  const classes = useStyles();

  const tags = [
    "Tech",
    "Music",
    "Health",
    "Financial",
    "Entertainment",
    "Sports",
  ];

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <div className={classes.margin} />
      <div className={classes.margin} />
      <div className={classes.margin} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h1" component="h2" gutterBottom>
            {"Set Your Interests, Freely"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {tags.map((tag) => (
            <>
              <Typography gutterBottom>{tag}</Typography>
              <PrettoSlider
                valueLabelDisplay="on"
                aria-label="pretto slider"
                defaultValue={20}
              />
              <div className={classes.margin} />
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
