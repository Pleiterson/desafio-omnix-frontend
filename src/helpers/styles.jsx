import { css } from 'styled-components';

const mixin = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexWrapFlow: css`
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
  `,

  button: css`
    text-decoration: none;
    color: var(--color-txt-two);
    background-color: var(--color-bg-two);
    border: .06em solid var(--color-ln-two);
    border-radius: .4em;
    margin: 4rem 0 0;
    padding: 1em;
    font-family: var(--font-details);
    font-size: .9em;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--color-bg-hover-button);
    }
  `,
};

export default mixin;
