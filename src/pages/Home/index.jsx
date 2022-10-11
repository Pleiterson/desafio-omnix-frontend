import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Footer, NavBar } from '../../components';
import mixin from '../../helpers/styles';

const Main = styled.main`
  ${mixin.flexCenter};
  margin: 5em 1em 17.3em 1em;
  padding: 1em;
  
  section {
    text-align: center;
    
    h1 {
      padding: 1em;
    }
  }
  
  section, article {
    margin: 1em;
    padding: 1em;
  }

  form {
    ${mixin.flexCenter};
    flex-direction: column;

    input {
      border: .1em solid var(--color-ln-three);
      border-radius: .5em;
      background-color: transparent;
      color: var(--color-txt-two);
      width: 100%;
      margin: .6em;
      padding: .3em;
    }

    a {
      ${mixin.button};
      text-align: center;
      margin: 1.5em;
      width: 50%;
    }
  }

  /* Versão para Mobile */
  @media only screen and (max-width: 600px) {
    ${mixin.flexCenter};
    flex-direction: column;
    margin: 1em;
    padding: 1em;
  }

  /* Versão para Tablet */
  @media only screen and (max-width: 768px) {}

  /* Versão para Laptop */
  @media only screen and (max-width: 992px) {}

  /* Versão para Large Screen */
  @media only screen and (max-width: 1280px) {}  
`;

const Home = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const sendData = (e) => {
    const zipCode = {
      cep: e.cep,
      address: e.address,
      district: e.district,
      city: e.city,
      state: e.state,
      addressnumber: e.addressnumber 
    };
    // export const ZipCode = React.createContext(zipCode.cep);
    console.log(zipCode);
  }
  
  const searchCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    //verifica se campo cep possui valor informado
    if (cep !== "") {
      let validatecep = /^[0-9]{8}$/; //expressão regular para validar o CEP
      
      //valida o formato do CEP
      if(validatecep.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          // console.log(data);
          
          setValue('address', data.logradouro);
          setValue('district', data.bairro);
          setValue('city', data.localidade);
          setValue('state', data.uf);
          setFocus('addressnumber');
        });
      } else { //cep é inválido
        // limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } else { //cep sem valor, limpa formulário
      // limpa_formulário_cep();
    }
  }

  return (
    <>
      <NavBar />

      <Main>
        <section>
          <h1>Olá, seja bem vindo</h1>
          <p>Aqui você encontrará os melhores planos para sua internet!</p>
        </section>
        <article>
          <form onSubmit={ handleSubmit(sendData) } className="searchZipCode">
            <input type="text" { ...register("cep") } maxLength="9" placeholder="Digite o seu CEP" onBlur={ searchCEP } required/>
            <input type="text" { ...register("address") } />
            <input type="text" { ...register("addressnumber") } placeholder="Digite o Número" required/>
            <input type="text" { ...register("district" ) } />
            <input type="text" { ...register("city") } />
            <input type="text" { ...register("state") } />
            {/* <button type="submit">Enviar</button> */}
            <a type="submit" href="/offers">Enviar</a>
          </form>
        </article>
      </Main>

      <Footer />
    </>
  )
}

export default Home;
