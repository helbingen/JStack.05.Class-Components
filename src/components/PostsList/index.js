import React from "react";

import { Container } from "./styles";
import Post from "./Post";

import posts from "./posts";

export default class PostsList extends React.Component {
  render() {
    //metódo render é obrigatório ao trabalhar com classes no React
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    );
  }
}
