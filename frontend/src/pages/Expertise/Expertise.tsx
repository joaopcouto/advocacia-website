import React from 'react'
import './styles.css'

export function Expertise() {
  return (
    <>
    <h1 className='expertise-title'>Especialidades</h1>
    <main>
        <section className="secao-esquerda">
            <div className='especialidade'>
                <h2>Arbitragem</h2>
                <ul>
                    <li>» Atuação em processos arbitrais nacionais e internacionais.</li>
                    <li>» Consultoria na elaboração de convenções de arbitragem.</li>
                
                </ul>
            </div>
            <div className="especialidade">
                <h2>Direito Ambiental e Agonegócios</h2>
                <ul>
                    <li>» Atuação em processos judiciais envolvendo Direito Ambiental, com destaque para ações civis públicas.</li>
                    <li>» Consultoria em matéria de legislação ambiental.</li>
                    <li>» Atuação em órgãos governamentais.</li>
                    <li>» Elaboração de compromissos de ajustamento de conduta.</li>
                    <li>» Consultoria em contratos e análise de risco relacionado ao agronegócio.</li>
                </ul>
            </div>
            <div className="especialidade">
                <h2>Direito Civil</h2>
                <ul>
                    <li>» Atuação em processos judiciais e arbitrais envolvendo direito das obrigações e direito das coisas, com ênfase em adimplemento e inadimplemento das obrigações, contratos em geral, responsabilidade civil, posse e direitos reais.</li>
                    <li>» Consultoria em contratos civis.</li>
                    <li>» Família e Sucessões.</li>
                </ul>
            </div>
            
        </section>
        <section className="secao-direita">
            <div className="especialidade">
                <h2>Direito Bancário</h2>
                <ul>
                    <li>» Atuação em processos judiciais e arbitrais envolvendo Direito Bancário, representando instituições financeiras ativa ou passivamente.</li>
                    <li>» Elaboração e Análise de Títulos de Crédito e Contratos Bancários.</li>
                    <li>» Assessoria em renegociação e reestruturação de dívidas.</li>
                    <li>» Pareceres e Opiniões Legais sobre estruturação de operações, constituição de garantias, validade e eficácia de negócios jurídicos financeiros.</li>
                </ul>
            </div>
            <div className="especialidade">
                <h2>Direito do Consumidor</h2>
                <ul>
                    <li>» Atuação em processos judiciais e arbitrais envolvendo direito das obrigações e direito das coisas, com ênfase em adimplemento e inadimplemento das obrigações, contratos em geral, responsabilidade civil, posse e direitos reais.</li>
                    <li>» Consultoria em contratos civis.</li>
                    <li>» Família e Sucessões.</li>
                </ul>
            </div>
            <div className="especialidade">
                <h2>Direito Empresarial e Societário</h2>
                <ul>
                    <li>» Atuação em processos judiciais e arbitrais envolvendo questões empresariais e societárias, como dissolução de sociedades, apuração de haveres, exclusão de sócios.</li>
                    <li>» Atuação em processos judiciais e arbitrais envolvendo questões de mercado de capitais.</li>
                    <li>» Assessoria para a constituição de sociedades, desde a formação até a participação e a condução de assembleias e reuniões.</li>
                    <li>» Assessoria em fusões e aquisições (M&A), identificando, medindo e prevenindo os riscos jurídicos das operações.</li>
                </ul>
            </div>
        </section>
    </main>
    </>
  )
}
