import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { AuthorImage, ImageClick, Author, Article, TitleArticle } from "./StyleCMS.js";
import '../index.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        {slug}
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div></div>;

  return (
    <div>
      <a href="/" className="link">Back</a>
        <Article>
          <Author>
            <AuthorImage src={urlFor(postData.authorImage).url()} alt="Sebastian Tarka Author"/>
            <h4>{postData.name}</h4>
          </Author>
          <TitleArticle>{postData.title}</TitleArticle>
            <BlockContent
              className="content"
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
            <ImageClick src={urlFor(postData.mainImage).url()} alt="" />
        </Article>
    </div>
  );
}