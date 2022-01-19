import styled from "styled-components";

export const Post = styled.div`
  background: white;
  max-width: 100%;
  flex: 1;
  min-height: 218px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.75);
  margin-bottom: 1rem;
  transition: background-color 0.3s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    background: rgb(230, 230, 230);
  }

  h6 {
    font-size: 1.6em;
  }

  @media screen and (min-width: 768px) {
    & + div {
      margin-left: 1rem;
    }
  }
`;

export const PostContent = styled.div`
  padding: 2rem;

  h6 {
    margin-bottom: 1.1rem;
  }
`;

export const PostInfo = styled.div`
  margin: 0 0 1rem 0;
  color: var(--gray-400);

  span {
    font-size: 0.9rem;
  }

  span:first-child {
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid var(--gray-400);
  }
`;

export const PostDescription = styled.div`
  font-size: 1.1rem;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
`;

export const PostArticleLayout = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  .box {
    width: 100%;
    color: rgb(94, 94, 94);
    min-height: 100px;
    font-family: "Lato", sans-serif;

    #boxFixed {
      position: sticky;
      top: 0px;
      padding: 24px 16px;
    }

    & + div {
      margin-left: 7rem;
    }

    span {
      margin: 1rem 0 1rem 0;
      font-family: "Heebo", sans-serif;
      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      li {
        padding: 1rem;
        transition: background-color 0.3s ease-in-out 0s;
        cursor: pointer;
        text-transform: capitalize;
        font-weight: bold;
        font-family: "Lato", sans-serif;
        &:hover {
          background-color: rgb(230, 230, 230);
        }
      }
    }
  }
`;

export const PostLayoutContent = styled.div``;
