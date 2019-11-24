import styled from "styled-components";

export default styled.div`
  display: flex;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin: 0 2px;

    &:hover:not(:disabled) {
      text-decoration: underline;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .PizzaPagination__item {
    &--active {
      text-decoration: underline;
    }

    &--break {
      cursor: default;
      padding: 0.5em;
    }
  }
`;
