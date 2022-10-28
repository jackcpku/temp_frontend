import React from "react";
import "./Post.css";

import { Chip } from "@material-ui/core";
import "typeface-roboto";
import {
  Box,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  _id: number;
  title: string;
  author: string;
  created_at: string;
  link: string;
  onClickAction: any;
  tags: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fff",
      padding: "5px 20px",
      border: "1px",
      borderColor: "#ccc",
    },
  })
);

export const Post: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root} button>
      <Box fontSize="13pt" color="#333" fontWeight="fontWeightBold" m={1}>
        <a className="post" href={props.link} target="__blank">
          {props.title}
        </a>
      </Box>
      <Box fontSize="13pt" color="#999" m={1}>
        - {props.author} -
      </Box>
      <ListItemSecondaryAction>
        {props.tags.map((tag) => (
          <Chip
            label={tag}
            variant="outlined"
            size="small"
            color="primary"
            style={{ margin: "2px" }}
          />
        ))}
        {`  ${props.created_at}`}
        {/* <IconButton
          onClick={() => props.onClickAction(props._id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton> */}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
