import { darken } from "polished";
import styled from "styled-components";

interface IProps {
  socialColor: string;
}

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
  flex-shrink: 0;

  &:hover {
    background: rgb(230, 230, 230);
  }

  h6 {
    font-size: 1.6em;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 370px;
    margin-left: 1rem;
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

    &:first-child {
      display: none;
    }

    @media screen and (min-width: 768px) {
      &:first-child {
        display: block;
      }
    }

    #boxFixed {
      position: sticky;
      top: 0px;
      padding: 24px 16px;
      margin-right: 7rem;
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
        font-weight: bold;
        font-family: "Lato", sans-serif;
        &:hover {
          background-color: rgb(230, 230, 230);
        }
      }
    }
  }
`;

export const PostLayoutContent = styled.div`
  margin-bottom: 2rem;

  p {
    font-size: 1.1rem;
  }
`;

export const PostLayoutTitle = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;

export const ShareButton = styled.button<IProps>`
  max-width: 100%;
  min-width: 150px;
  background: ${props => (props.socialColor ? props.socialColor : "#eee")};
  cursor: pointer;
  height: 45px;
  margin-right: 5px;
  border: 2px solid ${props => (props.socialColor ? props.socialColor : "#eee")};
  border-radius: 4px;
  color: ${props => props.color};
  transition: 0.3s ease background;
  margin-bottom: 1rem;
  &:hover {
    border-color: ${props =>
      props.socialColor ? darken(0.1, props.socialColor) : "#eee"};
    background: ${props =>
      props.socialColor ? darken(0.1, props.socialColor) : "#eee"};
  }
`;
