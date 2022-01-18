import styled from "styled-components";

export const Container = styled.main`
  max-width: var(--layout-size);
  margin: 0 auto;
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;

export const Box = styled.section`
  max-width: 100%;
  background: var(--blue-500);
  min-height: 17em;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  max-width: var(--layout-size);
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
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
