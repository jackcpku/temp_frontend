import React, { useState, useEffect } from "react";
//import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, Container, Divider } from "@material-ui/core";
import { Post } from "./Post";
import axios from "axios";

/*const useStyles = makeStyles((theme: Theme) =>
  createStyles({
	    root: {
	    	backgroundColor: '#fff',
	    	padding: '5px 20px',
	    	border: "1px",
	    	borderColor: "#ccc",
	    },
	}),
);*/

export const Feed: React.FC = () => {
  let [posts, setPosts] = useState([]);
  let [fetching, setFetch] = useState(false);

  let url = "http://localhost:8000/feeds";

  async function fetchPosts() {
    const response = await axios.get(url);
    console.log(response.data);
    setPosts(response.data.feeds);
  }

  useEffect(() => {
    (async () => {
      if (!fetching) {
        setFetch(true);
        await fetchPosts();
      }
    })();
  });

  const handleDelete = async (_id: string) => {
    const response = await axios.delete(url + _id);
    console.log(response);
    setPosts(posts.filter((post: any) => post._id !== _id));
  };

  const showDate = (dateTime: string) => {
    const date = new Date(dateTime);
    const today = new Date();
    if (date.getDate() === today.getDate()) {
      return date.getHours() + ":" + date.getMinutes();
    } else if (date.getDate() === today.getDate() - 1) {
      return "Yesterday";
    }
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    return formatter.format(date) + " " + date.getDate();
  };

  if (!fetching) {
    return <div>Fetching News....</div>;
  } else {
    // Order by Date
    posts.sort(function (a: any, b: any) {
      return (
        new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
      );
    });

    const listItems = posts.map((post: any) => (
      <Post
        _id={post._id}
        link={post.link}
        onClickAction={handleDelete}
        title={post.title}
        author={post.author}
        created_at={showDate(post.created_at)}
        tags={post.tags}
      />
    ));
    return (
      <React.Fragment>
        <Container maxWidth="xl">
          <List aria-label="mailbox folders">
            {listItems}
            <Divider />
          </List>
        </Container>
      </React.Fragment>
    );
  }
};
