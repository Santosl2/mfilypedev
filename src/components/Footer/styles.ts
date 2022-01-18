import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  color: var(--gray-400);

  ul {
    display: flex;

    li {
      margin-left: 1rem;
    }
  }

  p {
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
      padding-right: 1rem;
      margin-right: 1rem;
      border-right: 1px solid var(--gray-400);
      margin-bottom: 0;
    }
  }
`;

export const FooterContent = styled.div`
  max-width: var(--layout-size);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
