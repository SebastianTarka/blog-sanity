import styled from 'styled-components';

const AuthorImage = styled.img`
    border-radius: 50px;
    width:40px;
    height:40px;
    padding: 1px;
`
const ImageArticle = styled.img`
    width:500px;
    height:320px;
    padding: 20px;
    @media (max-width: 1015px) {
        width: 70%;
        height: auto;
    }
`
const ImageClick = styled.img`
    width:100%;
    height:auto;
`
const AllPostsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1015px) {
        grid-template-columns: 1fr;
    }
`
const CenterContent = styled.div`
    display: flex;
    justify-items:center;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`
const Author = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const Article = styled.article`
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
`
const TitleArticle = styled.h1`
    font-size: 40px;
    padding: 15px;
`
const TitleAllPosts = styled.h3`
    font-size: 20px;
    padding: 0px;
    line-height: 30px;
    letter-spacing: .5px;
`
export {AuthorImage, ImageArticle, ImageClick, AllPostsBox, CenterContent, Content, 
    Author, Article, TitleArticle, TitleAllPosts}
