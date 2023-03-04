import axios from "axios";
import React from "react";
import { useState, useEffect } from "react"

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function Effact() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
       
      <h1>{post.id}</h1>
      <p>{post.name}</p>
    </div>
  );
}