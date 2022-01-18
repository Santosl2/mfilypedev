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
