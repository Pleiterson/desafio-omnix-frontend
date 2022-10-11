import React from 'react';
import styled from 'styled-components';
import { Footer, NavBar } from '../../components';
import { products } from '../../constants/modules';
import mixin from '../../helpers/styles';

const Title = styled.h1`
  margin: .6em;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    text-align: center;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}  
`;

const Wrapper = styled.main`
  ${mixin.flexWrapFlow};
  text-align: center;
  
  article {
    margin: .6em;
    padding: .6em;
    border-radius: .3em;
    height: 40em;
    background-color: var(--color-bg-three);
    color: var(--color-txt-three);
    margin-bottom: 7.8em;

    h2, h3 {
      font-size: 2.5em;
      padding: .6em 0 1em;
    }

    h2 {
      font-style: italic;
    }

    h3 {
      padding: .6em 0 2em;
    }

    p {
      padding: 1em .6em;
    }

    button {
      ${mixin.button};
      padding: .6em;

      &:hover {
        color: var(--color-txt-three);
      }
    }
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    article {
      height: auto;

      h2, h3 {
        font-size: 1.5em;
      }
      
      h2, h3, p {
        padding: .6em;
      }

      button {
        margin: .3em;
      }
    }
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Button = styled.a`
  ${mixin.button};
  position: absolute;
  right: 6em;
  bottom: 5em;

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    right: 2em;
    bottom: -93em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {} 
`;

const Offers = () => {
  return (
    <>
      <NavBar />

      <Title>Veja as Ofertas para a sua região!</Title>

      <Wrapper>  
        { products && products.map(({ velocidade, valor, info1, info2, info3, info4 }, i) => (
          <article key={ i } >
            <h2>{ velocidade }</h2>
            <h3>{ valor }</h3>
            <p>{ info1 }</p>
            <p>{ info2 }</p>
            <p>{ info3 }</p>
            <p>{ info4 }</p>
            <button>CONTRATAR AGORA</button>
          </article>
        )) }
      </Wrapper>
      
      <Button href="/">Ops, errei meu CEP!</Button>

      <Footer />
    </>
  );
}

export default Offers;
