import "./App.css";
import estrela from "./img/estrela.jpg";
import estrelaEdge from "./img/estrelaEdge.png";
import profile from "./img/profile.jpg";
import wpp from "./img/wpp1.png";

function App() {
  return (
    <div className="app">
      <header>
        <div className="main-title">
          <h1>JOANI DOS SANTOS RABELO</h1>
          <h3>24 anos, estudante</h3>
        </div>
        <img className="profile-picture" src={profile} />
      </header>

      <div className="info">
        <div className="sub-info">
          <h3>Contato</h3>
          <p>joanirabelo@gmail.com</p>
        </div>
        <div className="sub-info">
          <h3>Número Celular</h3>
          <div className="content-wpp">
            <p>+55 (31) 98732 6189</p>
            <img className="img-wpp" src={wpp} />
          </div>
        </div>
        <div className="sub-info">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/joani-rabelo-83403092/"
            target="_blank"
          >
            Joani Rabelo
          </a>
          <p>joani-rabelo-83403092</p>
        </div>
        <div className="sub-info">
          <h3>Endereço</h3>
          <p>Rua Visconde de Taunay, Santa Mônica</p>
          <p>Belo Horizonte - MG</p>
        </div>
      </div>

      <div className="row profile">
        <div className="title">
          <h2>Perfil</h2>
        </div>
        <div className="content profile">
          <p>
            Sou uma pessoa que ama aprender coisas novas e me sinto motivada a
            cada desafio. Sou determinada, focada, dedicada e tenho a habilidade
            de aprender rapidamente novos assuntos. Tenho um bom raciocínio
            lógico.
          </p>
          <p>
            Sou tranquila e calma, fácil de conviver. Busco ser sempre justa e
            empática.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="title">
          <h2>Experiência</h2>
        </div>
        <div className="content">
          <h3>Estagiária formação profissional complementar</h3>
          <p>
            Pró–Reitoria de Recursos Humanos da Universidade Federal de Minas
            Gerais, Divisão de Arquivo - Belo Horizonte / Brasil
          </p>
          <span>Nov 2018 - Nov 2020</span>
          <p className="description">
            Desenvolvimento de atividades de administração de documentos.
          </p>
          <p className="description">
            Organização, digitalização, armazenamento, uploads e downloads de
            arquivos e processos internos à Universidade.
          </p>

          <h3>Estagiária técnica mecânica</h3>
          <p>Fiat Chrysler Automobiles - Betim / Brasil</p>
          <span>Fev 2017 - Fev 2018</span>
          <p className="description">
            Benchmarking por meio de testagem, desmontagem, e análise de motor e
            peças de motores de outros fabricantes.
          </p>
        </div>
      </div>

      <div className="row degree">
        <div className="title">
          <h2>Formação Acadêmica</h2>
        </div>
        <div className="content">
          <h3>Graduação em Engenharia Mecânica</h3>
          <p>Universidade Federal de Minas Gerais - Belo Horizonte / Brasil</p>
          <span>Ago 2017 - Jul 2023 (Em andamento)</span>
          <p className="description">
            Aquisição e desenvolvimento de habilidades de projetar, fabricar,
            montar, manter e operacionalizar dispositivos mecânicos.
          </p>
          <p className="description">
            Estudo de matemática e suas aplicações para engenharia, desenho
            mecânico, ciências dos materiais, termodinâmica, mecânica
            estrutural, processos de fabricação,manutenção, eletrônica e
            automação.
          </p>

          <h3>Mobilidade interncional</h3>
          <p>Instituo Politécnico de Setúbl (IPS) / Portugal</p>
          <span>Out 2021 - Jul 2022 </span>
          <p className="description">Intercâmbio proporcionado pela UFMG</p>
          <p className="description">Estudo de programação de computadores</p>

          <h3>Desenvolvimento de Software FullStack</h3>
          <p>
            Cubos Academy Treinamentos Profissionais - Salvador / Brasil
            (remoto)
          </p>
          <span>Jun 2021 - Dez 2021</span>
          <p className="description">
            Curso intensivo de 750 horas com foco em aquisição e desenvolvimento
            deconhecimentos técnicos e habilidades para atuação como
            desenvolvedora fullstack júnior.
          </p>
          <p className="description">
            Estudo de Lógica de programação, HTML, CSS, DOM, Node.js, SQL,
            React,Banco de dados, JavaScript e Metodologias ágeis.
          </p>

          <h3>Ensino médio profissionalizante</h3>
          <p>
            Centro Federal de Educação Tecnológica de Minas Gerais - Belo
            Horizonte /Brasil
          </p>
          <span>Jan 2014 - Dez 2016</span>
          <p className="description">
            Aquisição e desenvolvimento de conhecimentos e habilidades da área
            técnica/gerencial de processos industriais que envolvem projetos,
            desenho técnico(CAD), conformação mecânica, ciência dos materiais,
            soldagem, gestão da qualidade, ensaios mecânicos, automação,
            manutenção de máquinas eequipamentos, sistemas hidráulicos e
            pneumáticos.
          </p>
        </div>
      </div>

      <div className="row new-degree">
        <div className="title">
          <h2>Atividades Acadêmicas</h2>
        </div>
        <div className="content">
          <h3>Desenvolvimentode torno de vidro</h3>
          <p>Universidade Federal de Minas Gerais - Belo Horizonte / Brasil</p>
          <span>Mar 2021 - Jul 2022</span>
          <p className="description">
            Projeto de extensão: desenvolvimento completo de torno de vidro.
          </p>
          <p className="description">
            Criação e dimensionamento de componentes para a confecção do torno
            por meio de cálculos de resistência dos materiais e análise
            estrutural, considerando a seleção de materiais e processos de
            fabricação.
          </p>
          <p className="description">Desenho e montagem de cada componente.</p>

          <h3>Iniciação científica</h3>
          <p>Universidade Federal de Minas Gerais - Belo Horizonte / Brasil</p>
          <span>Mar 2021 - Mai 2021</span>
          <p className="description">
            Atuação no projeto "Desenvolvimento de materiais didáticos em
            impressora 3D para alunos com deficiências” como desenhista de
            soluções em 3D.
          </p>

          <h3>Monitoria em desenho mecânico</h3>
          <p>Universidade Federal de Minas Gerais - Belo Horizonte / Brasil</p>
          <span>Mai 2020 - Mar 2021</span>
          <p className="description">
            Acompanhamento e auxílio a estudantes do primeiro ano da disciplina
            de desenho técnico.
          </p>
        </div>
      </div>

      <div className="row abilities">
        <div className="title">
          <h2>Aptidões</h2>
        </div>
        <div className="content abilities">
          <div className="content-abilities">
            <div className="itens">
              <p>Excel</p>
              <p className="description">Avançado</p>
            </div>
            <div className="itens">
              <p>AutoCad</p>
              <p className="description">Intermediário</p>
            </div>
            <div className="itens">
              <p>SolidWorks</p>
              <p className="description">Intermediário</p>
            </div>
          </div>
          <div className="content-abilities">
            <div className="itens">
              <p>JavaScript</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>Java</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>SQL</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>VBA</p>
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
          </div>
          <div className="content-abilities">
            <div className="itens">
              <p>React</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>HTML</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>CSS</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>GIT</p>
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
          </div>
          <div className="content-abilities">
            <div className="itens">
              <p>C+</p>
              <img src={estrela} />
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
            <div className="itens">
              <p>Phyton</p>
              <img src={estrela} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
              <img src={estrelaEdge} />
            </div>
          </div>
        </div>
      </div>

      <div className="row languages">
        <div className="title">
          <h2>Idiomas</h2>
        </div>
        <div className="content languages">
          <div className="content-languages">
            <p>Português</p>
            <p className="description">Nativa</p>
          </div>
          <div className="content-languages">
            <p>Inglês</p>
            <p className="description">Intermediário</p>
          </div>
        </div>
      </div>

      <div className="row certifications">
        <div className="title">
          <h2>Certificados</h2>
        </div>
        <div className="content">
          <h3>
            Participação em iniciação científica em matemática pura e aplicada
            por 5 anos, concedido como prêmio pela conquista de medalhas
          </h3>
          <span>2009, 2011, 2013, 2015</span>

          <h3>
            Medalhista de bronze na Olimpíada Brasileira de Matemática de
            Escolas Públicas por quatro vezes
          </h3>
          <span>2009, 2011, 2013, 2015</span>

          <h3>
            Medalhista de ouro na Olimpíada Brasileira de Matemática de Escolas
            Públicas
          </h3>
          <span>2012</span>

          <h3>Aluna destaque de Minas Gerais em Matemática</h3>
          <span>2009</span>
        </div>
      </div>

      <div className="row cursos">
        <div className="title">
          <h2>Cursos</h2>
        </div>
        <div className="content">
          <h3>Desenvolvimento Web</h3>
          <p>Fundação de Educação para o trabalho de Minas Gerais</p>
          <span>Mai 2021 - 50 horas</span>
          <p className="description">
            Estudo de HTML e suas aplicações: formatação, estruturas e sintaxe
            da linguagem,formulários, imagem, botão, atributos e tags.
          </p>

          <h3>Lógica e técnicas de programação</h3>
          <p>Fundação de Educação para o trabalho de Minas Gerais</p>
          <span>Abr 2021 - 84 horas</span>
          <p className="description">
            Estudo de algoritmo e seus tipos, fluxograma, base estrutural do
            algoritmo, variáveis e constantes, regras de sintaxe e
            nomenclaturas, linhas de comando e expressões aritméticas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
