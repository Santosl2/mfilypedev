import styled from "styled-components";

export const Container = styled.section`
  max-width: var(--layout-size);
  margin: 0 auto;
`;

export const Project = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  background: white;
  box-shadow: 0px 4px 10px rgb(187 225 250 / 75%);
  margin-bottom: 1rem;
  flex-shrink: 0;
  flex-grow: 1;

  &:hover {
    background: rgb(230, 230, 230);
  }

  @media screen and (min-width: 768px) {
    flex-basis: 370px;
    margin-left: 1rem;
  }
`;

export const ProjectTitle = styled.div`
  width: 100%;
  min-height: 90px;
`;
