import styled from "styled-components";

export const UserTodos = styled.div`
  padding: 0.5rem;
  border-radius: 0.2rem;
  width: 25rem;
  background: #171c31;
  color: #44aed7;
  margin: 0 1rem;
  margin-bottom: 1rem;

  h4 {
    color: white;
    text-align: center;
    margin-top: 0;
    font-size: 1.4rem;
  }
  ol {
    margin: 0;
    padding: 0 0.5rem;
  }
  li {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    b {
      flex-basis: 40%;
    }

    span {
      background: rgba(240, 248, 255, 0.11);
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
    }
  }
`;
