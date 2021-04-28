import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { ImageArticle, AllPostsBox, CenterContent, Content, TitleAllPosts} from "./StyleCMS.js";
import '../index.css';
import About from "../About/About";
import Footer from "../Footer/Footer";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <About/>
      <h5 className="see">See my blog</h5>
      <CenterContent>
      <AllPostsBox>
        {allPosts &&
          allPosts.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current} className="link">
              <Content key={index}>
                <span className="title">
                  <TitleAllPosts>{post.title}</TitleAllPosts>
                </span>
                <ImageArticle src={post.mainImage.asset.url} alt=""/>
              </Content>
            </Link>
          ))}
      </AllPostsBox>
    </CenterContent>
    <Footer/>
    </div>
  );
}