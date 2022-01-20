import styled from "styled-components";

export const Container = styled.section`
  max-width: var(--layout-size);
  margin: 0 auto;
`;

export const Project = styled.div`
  width: 100%;
  min-height: 100px;
  margin-right: 1rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  background: white;
  box-shadow: 0px 4px 10px rgb(187 225 250 / 75%);
  margin-bottom: 1rem;

  &:hover {
    background: rgb(230, 230, 230);
  }
`;

export const ProjectTitle = styled.div`
  width: 100%;
  min-height: 90px;
`;
