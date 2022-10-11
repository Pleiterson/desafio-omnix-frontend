import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';
import mixin from '../helpers/styles';

const Copyright = styled.footer`
  ${mixin.flexCenter};
  background-color: var(--color-bg-two);
  justify-content: space-around;
  text-align: center;
  font-size: .8em;
  height: 3em;

  a {
    text-decoration: none;
    color: var(--color-txt-five);
    font-style: italic;
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0 .6em;
    height: 8em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}
`;

const Developer = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <>
      <Copyright>
        <div>
          <p>© 2020-2022.<br/>Todos os direitos reservados.</p>
        </div>
        <Developer>
          <p>Desenvolvido por:</p>
          <a target="_blank" rel="noopener noreferrer" href="https://pleiterson.vercel.app/"><FaCode />&nbsp;Pleiterson Amorim</a>
        </Developer>
      </Copyright>
    </>
  );
};

export default Footer;
