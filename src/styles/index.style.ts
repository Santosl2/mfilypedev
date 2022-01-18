import styled from "styled-components";

export const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MyPicture = styled.img`
  width: 16em;
  height: 16em;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: -5px 10px 0 0 var(--blue-500);
`;

export const LeftContent = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 60%;
  }

  p {
    font-size: 1.1rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  order: -1;

  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

export const RecentPosts = styled.div`
  max-width: var(--layout-size);
  margin: 0 auto;
`;

export const RecentPostsHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: none;
    color: #00a8cc;
    font-size: 0.9rem;
    cursor: pointer;
    transition: filter 0.3s ease 0s;
    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (min-width: 768px) {
    & {
      justify-content: space-between;
      align-items: center;
    }

    a {
      display: block;
    }
  }
`;
