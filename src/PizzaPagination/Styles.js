import styled from "styled-components";

export default styled.div`
  display: flex;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    height: 75px;
    margin: 0 2px;
    width: 75px;

    &:hover:not(:disabled) {
      text-decoration: underline;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &.PizzaPagination__item {
      background-image: url("./pepperoni.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 100%;
    }

    &.PizzaPagination__navigation {
      &--previous {
        font-size: 2em;
        transform: rotate(115deg) perspective(0);
      }

      &--next {
        font-size: 2em;
        transform: rotate(-65deg) perspective(0);
      }
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
