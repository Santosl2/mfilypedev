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
