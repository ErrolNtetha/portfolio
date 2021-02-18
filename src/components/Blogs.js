import React, { Component } from "react";
import BlogItems from "./BlogItems";
import { blogData } from "./blogsData"

export default class Blog extends Component {
  state = {
    title: "8 Things You Should Know Before Starting A New Business",
    date: "17 Feb 2021",
    blogPost: "Starting a business especially in a pandemic era is never an easy thing."
  }

  render() {

    console.log(blogData)

    return (
      <>
        <div style={{ margin: "5rem" }}>
          <h1> Blogs </h1>
          <BlogItems title={this.state.title} blogPost={this.state.blogPost} date={this.state.date} />
          <BlogItems title={this.state.title} blogPost={this.state.blogPost} date={this.state.date} />
          <BlogItems title={this.state.title} blogPost={this.state.blogPost} date={this.state.date} />
          <BlogItems title={this.state.title} blogPost={this.state.blogPost} date={this.state.date} />
        </div>
        
      </>
    );
  }
}
