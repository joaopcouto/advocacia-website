import React from "react";
import { Link } from "react-router-dom";
import fotoHome from "../../assets/images/fotoHome.png";
import house from "../../assets/icons/house.svg";
import "./styles.css";
import { ExpertiseCard } from "../../components/ExpertiseCard/ExpertiseCard";

export const Home: React.FC = () => {
  return (
    <>
      <img className="img-Martelo" src={fotoHome} alt="Foto Martelo" />
      <h1 className="title">Advocacia Freitas Couto</h1>
      <div className="text-resume">   
      <p className="text">
        O Escritório iniciou suas atividades no ano de 2000 e desde o princípio
        está sediado na cidade de Jacareí – SP. O perfil do escritório é voltado
        para o atendimento Jurídico-empresarial, atuando por intermédio de
        profissionais especializados na orientação e defesa dos interesses de
        nossos clientes.
        <br></br>
        Dispondo de profissionais aptos a atuar em vários ramos do Direito e
        diante da ampla experiência adquirida no decorrer destes anos,
        permite-nos assessorar clientes de grande, médio e pequeno porte, tanto
        em operações de alta complexidade quanto em atividades do cotidiano das
        empresas, atendendo aos interesses dos clientes.
      </p>
      </div>
      <h1 className="title-expertise">Áres de Atuação</h1>

      <div className="expertises">
      <ExpertiseCard icon={house} title="Direito Imobiliario" text="» Atuação em processos judiciais
      e arbitrais envolvendo Direito Imobiliário. 
      » Assessoria para a elaboração de contratos em geral, como compra e venda, locação, comodato e incorporação.
      » Assessoria a empreendimentos, como condomínios e loteamentos.
      » Consultoria em matéria de legislação imobiliária."></ExpertiseCard>
      </div>

      <div className="button-expertise">
        <Link to="/especialidades">Conferir todas as áreas</Link>
      </div>
    </>
  );
};
