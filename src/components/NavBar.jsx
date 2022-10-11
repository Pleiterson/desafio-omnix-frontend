import React from 'react';
import styled from 'styled-components';
import mixin from '../helpers/styles';

const Navbar = styled.p`
  ${mixin.flexCenter};
  background-color: var(--color-bg-two);
  color: var(--color-txt-two);
  height: 3em;
  font-weight: bold;

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

const NavBar = () => {
  return (
    <Navbar>Desafio Técnico Desenvolvedor Front-end Jr. - Omnix Digital Experience</Navbar>
  );
};

export default NavBar;
