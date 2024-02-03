import "react-bootstrap";
import "./App.css";
import "./App.scss";
import "./appMobile.css";
import { Component } from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useRef } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilSpade } from "@iconscout/react-unicons";
import { UilBrain } from "@iconscout/react-unicons";
import { UilClub } from "@iconscout/react-unicons";
import { UilTimesSquare } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { UilFileCheckAlt } from "@iconscout/react-unicons";
import { UilVideo } from "@iconscout/react-unicons";
import purpleBrain from "./Assets/purple-brain.png";
import halfFaceOne from "./Assets/halfone.png";
import halfFaceTwo from "./Assets/halftwo.png";
import videoBg from "./Assets/cards-video.mp4";
import thumb from "./Assets/thumb.jpeg";
import profile from "./Assets/profile-generic.jpg";
import feature1 from "./Assets/head-side-brain.png";
import feature2 from "./Assets/pipe-smoking.png";
import feature3 from "./Assets/physics.png";
import feature4 from "./Assets/lightbulb-on.png";
import courseFeature1 from "./Assets/books-stack-of-three.png";
import courseFeature2 from "./Assets/video.png";
import courseFeature3 from "./Assets/rating.png";
import courseFeature4 from "./Assets/certificate.png";
import storm from "./Assets/storm-sound.mp3";
import carousel1 from "./Assets/carousel-1.jpg";
import carousel2 from "./Assets/carousel-1.jpg";
import carousel3 from "./Assets/carousel-1.jpg";
import profilePhoto from "./Assets/sherlock-profile.jpeg";

function App() {
  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          audioRef.current.play();
        } else {
          setIsInView(false);
          audioRef.current.pause();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value based on when you want the music to start
      }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, [playerRef, audioRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("normal-face");
        } else {
          entry.target.classList.remove("normal-face");
        }
      });
    });

    const observerEffectOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("back-one");
        } else {
          entry.target.classList.remove("back-one");
        }
      });
    });

    const observerEffectTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("back-one");
        } else {
          entry.target.classList.remove("back-one");
        }
      });
    });

    const faces = document.querySelectorAll(".half-face");
    faces.forEach((el) => observer.observe(el));

    const textOne = document.querySelectorAll(".translate-text");
    textOne.forEach((el) => observerEffectOne.observe(el));

    const textTwo = document.querySelectorAll(".translate-text-two");
    textTwo.forEach((el) => observerEffectTwo.observe(el));

    return () => {
      faces.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event handler
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty array ensures this effect only runs once, on mount and unmount

  // A variable that defines if the menu is open or not
  const [isOPen, setIsOpen] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  function handlePopup(event) {
    event.preventDefault();
    setIsPopupVisible((prev) => !prev);
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  if (windowWidth > 1000) {
    return (
      <div className="landing-container">
        {isPopupVisible && (
          <div className="popup-about">
            <div className="inside-popup">
              <div className="close-button-container">
                <button onClick={(e) => handlePopup(e)}>
                  <UilTimesSquare size="30" color="#630092" />
                </button>
              </div>
              <div className="about-content">
                <div className="about-image">
                  <img alt="" src={profilePhoto}></img>
                  <h1>Marcelo Bohler</h1>
                  <div className="social-medias">
                    <a>
                      <UilFacebook color="#630092"></UilFacebook>
                    </a>

                    <a>
                      <UilInstagram color="#630092"></UilInstagram>
                    </a>
                  </div>
                </div>
                <div className="about-text">
                  <h2>
                    Marcelo leva o amor ao conhecimento e ao desafio a outro
                    nível. Isso o fez entrar no ITA, principal faculdade de
                    engenharia e com o vestibular mais difícil do país, além de
                    diversos prêmios – desde medalhas em olimpíadas cientificas
                    até troféus de memorização em seu ensino médio. Seu
                    interesse por psicologia o fez ser chamado para a monitoria
                    da Clue Lab, empresa de referência global quanto a seu rigor
                    científico ao trabalhar com comportamento não-verbal. Com
                    isso, apresentou trabalhos acadêmicos em simpósios
                    internacionais sobre comportamento e análise de
                    credibilidade. <br></br>No ITA, ganhou o apelido de Sherlock
                    por conta de seu conhecimento em comportamento, psicologia,
                    memória, hipnose e investigação. Na faculdade, atua num
                    departamento que investiga e apura denúncias e
                    transgressões. Trouxe inovações e muitos resultados ao
                    aplicar as últimas descobertas científicas nas entrevistas
                    investigativas realizadas.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="nav-section">
          <div className="logo-header">
            <h1>SHERLOGIC</h1>
            <h3>DERROTANDO FANTASMAS MENTAIS</h3>
          </div>
          <div className="nav-buttons">
            <ul>
              <li>
                <a href="#" onClick={() => scrollToSection("inicio")}>
                  Início
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("sobre")}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("conteudo")}>
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("curso")}>
                  Curso
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("clientes")}>
                  Clientes
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("contato")}>
                  Contatos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="begin-banner" id="inicio">
          <div className="header-text">
            <h2>SEJA BEM VINDO À SHERLOGIC</h2>
            <h1>
              SUA JORNADA PARA UMA MAIOR<br></br>
              <span>INTELIGÊNCIA E RACIONALIDADE</span>
              <br></br>
              SE INICIA AQUI
            </h1>
            <h3>
              O primeiro passo para ter uma mente como a de Sherlock Holmes é
              identificar falhas lógicas que todo mundo comete e os evitar.
              Comece isso agora.
            </h3>
            <button>
              <a href="#" onClick={() => scrollToSection("comprar")}>
                Acessar Agora Mesmo
              </a>
            </button>
          </div>
          <div className="header-image"></div>
          <video className="video-header" src={videoBg} autoPlay loop muted />
          <div className="gradient-box-1"></div>
        </div>
        <div className="content-1" id="sobre">
          <img alt="" src={purpleBrain}></img>
          <div className="content-text translate-text">
            <h2>SOBRE O CURSO</h2>
            <h1>
              ESTEJA À FRENTE DE FANTASMAS QUE <span>ASSOMBRAM A MENTE</span> DA
              MAIORIA DAS PESSOAS
            </h1>
            <h3>
              A abordagem única de Sherlogic vai expor mecanismos inconscientes
              que atuam em sua intuição e raciocínio e que estiveram ocultos de
              você até este momento. É sua oportunidade única de estar à frente
              da multidão cega dos próprios vieses.
            </h3>
            <button>
              <a onClick={() => scrollToSection("comprar")}>ACESSAR AGORA</a>
            </button>
          </div>
          <div className="gradient-box-2"></div>
        </div>

        <div className="content-2" id="conteudo">
          <div className="content-text translate-text-two">
            <h2>NOSSO CURSO</h2>
            <h1>Eleve Sua Mente a Outro Nível</h1>
            <h3>
              O conteúdo de Sherlogic é inovador, único, profundo, transformador
              e respaldado cientificamente sendo um oportunidade única para ,
              seja você um fã de Sherlock Holmes ou não!
            </h3>
            <button>
              <a onClick={() => scrollToSection("comprar")}>ACESSAR AGORA</a>
            </button>
          </div>
          <div className="grid-cards translate-text">
            <div className="card">
              <div className="card-icon">
                <img alt="" src={feature1}></img>
              </div>
              <div className="card-text">
                <h2>
                  Aprenda em profundidade os mecanismos e armadilhas que você já
                  cai todos os dias e nem sequer percebe
                </h2>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img alt="" src={feature2}></img>
              </div>
              <div className="card-text">
                <h2>
                  Várias das estratégias mentais de Sherlock Holmes, o maior
                  gênio da ficção, são explicadas à luz das evidências atuais
                </h2>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img alt="" src={feature3}></img>
              </div>
              <div className="card-text">
                <h2>
                  Sem sensacionalismo que te promete virar o Sherlock Holmes ou
                  um detector de mentiras. Aqui, as paráfrases ao detetive não
                  comprometem o rigor científico
                </h2>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img alt="" src={feature4}></img>
              </div>
              <div className="card-text">
                <h2>
                  Além dos inúmeros conceitos de psicologia cognitiva, são
                  abordadas diversas falácias lógicas ao longo do curso
                </h2>
              </div>
            </div>
          </div>
          <div className="gradient-box-2"></div>
        </div>

        <div className="content-3">
          <div>
            <img alt="" src={courseFeature1}></img>
            <h1>50+</h1>
            <h2>Materiais</h2>
          </div>
          <div>
            <img alt="" src={courseFeature2}></img>
            <h1>200+</h1>
            <h2>Horas Aula</h2>
          </div>
          <div>
            <img alt="" src={courseFeature3}></img>
            <h1>500+</h1>
            <h2>Clientes Felizes</h2>
          </div>
          <div>
            <img alt="" src={courseFeature4}></img>
            <h1>10+</h1>
            <h2>Certificações</h2>
          </div>
        </div>

        <div className="content-4" id="curso">
          <h1>
            VEJA POR DENTRO DE<br></br>
            <span>NOSSO CURSO</span>
          </h1>
          <h2>MÓDULOS E AULAS</h2>
          <div class="container">
            <div class="product-card">
              <img src={carousel1} alt="" />
            </div>

            <div class="product-card">
              <img src={carousel2} alt="" />
            </div>

            <div class="product-card">
              <img src={carousel3} alt="" />
            </div>
          </div>
          <div className="gradient-box-3"></div>
        </div>

        <div className="content-5">
          <div className="popup-about"></div>
          <div className="block">
            <h2>SOBRE O MARCELO</h2>
            <h1>
              UMA DAS MENTES MAIS <br></br> DIFERENCIADAS DO PAÍS<br></br>
              <span>AGORA AO SEU LADO</span>
            </h1>
            <button onClick={(e) => handlePopup(e)}>
              <a href="#">LER MAIS</a>
            </button>
          </div>
          <div className="block">
            <h3>
              Um jovem com resultados acadêmicos brilhantes e uma mente fora do
              comum desenvolveu um curso com uma metodologia única baseada em
              evidências científicas e inspirada em Sherlock Holmes. O conteúdo
              te fará desenvolver o pensamento lógico e a racionalidade.
              Destaque-se em sua vida pessoal e profissional ao ver as
              armadilhas mentais óbvias para você, mas ocultas para todos
              outros.
            </h3>
            <ul>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Didática única
              </li>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Melhore
                diversas esferas da vida
              </li>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Liberdade e
                autonomia intelectual
              </li>
            </ul>
          </div>
          <div className="gradient-box-4"></div>
        </div>

        <div className="content-6" id="clientes">
          <img
            alt=""
            className="half-face"
            id="face-one"
            src={halfFaceOne}
          ></img>
          <div className="center-block">
            <h1>
              O QUE DIZEM <br></br>
              <span>AS MAIORES AUTORIDADES DO PAÍS</span>
              <br></br>EM PSICOLOGIA E COMPORTAMENTO
            </h1>
            <div ref={playerRef}>
              <audio ref={audioRef} src={storm}></audio>
            </div>
            <div className="comment-block">
              <div className="comment-video">
                <img alt="" src={thumb}></img>
              </div>
              <div className="comment-text">
                <h3>
                  Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet.
                </h3>
                <div className="user-block">
                  <img alt="" src={profile}></img>
                  <h2>
                    Amarildo Amaral<br></br>
                    <span>amarildoamaral@gmail.com</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="half-face"
            id="face-two"
            src={halfFaceTwo}
          ></img>
        </div>

        <div className="pricing" id="comprar">
          <h2>REALIZAR COMPRA</h2>
          <h1>Adquira nosso curso agora mesmo!</h1>

          <div className="inner-pricing">
            <video src={videoBg} controls></video>
            <div className="course-description">
              <h1>R$200,00</h1>
              <h2>Em até 12x no cartão</h2>
              <button>Ir para o carrinho</button>
              <div className="course-goods">
                <div>
                  <UilCheck></UilCheck> <h2>Garantia de 7 dias</h2>
                </div>
                <div>
                  <UilFileCheckAlt></UilFileCheckAlt>{" "}
                  <h2>Certificado de conclusão</h2>
                </div>
                <div>
                  <UilVideo></UilVideo>
                  <h2>+200 horas de aulas gravadas</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-box-pricing"></div>
        </div>

        <div className="content-7" id="contato">
          <div className="block">
            <h1>
              ENTRE EM <span>CONTATO</span>
            </h1>
            <h2>
              Pronto para dar o próximo passo? Entre em contato conosco hoje e
              descubra como podemos ajudá-lo a alcançar seus objetivos!
            </h2>
            <ul>
              <li>
                <UilMapMarker color="#630092" size="40"></UilMapMarker>
                <h2>
                  Endereço<br></br>
                  <span>Rua h8D, 106</span>
                </h2>
              </li>
              <li>
                <UilPhone color="#630092" size="40"></UilPhone>
                <h2>
                  Telefone<br></br>
                  <span>(00) 99999-9999</span>
                </h2>
              </li>
              <li>
                <UilEnvelope color="#630092" size="40"></UilEnvelope>
                <h2>
                  Email<br></br>
                  <span>sherlogic@example.com</span>
                </h2>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="mail-block">
              <form>
                <label for="name">SEU NOME</label>
                <input type="text" id="name"></input>
                <label for="name">SEU EMAIL</label>
                <input type="mail" id="email"></input>
                <label for="message">SUA MENSAGEM</label>
                <textarea id="message"></textarea>
                <button>ENVIAR</button>
              </form>
            </div>
          </div>
          <div className="gradient-box-5"></div>
        </div>
        <div className="footer">
          <div className="footer-content">
            <h1>SHERLOGIC</h1>
            <h2>DERROTANDO FANTASMAS MENTAIS</h2>
            <div className="navigate">
              <ul>
                <li>
                  <a onClick={() => scrollToSection("inicio")}>Início</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("sobre")}>Sobre</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("conteudo")}>Conteúdo</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("curso")}>Curso</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("clientes")}>Clientes</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("contato")}>Contatos</a>
                </li>
              </ul>
            </div>
            <h3>
              Até que você torne o inconsciente consciente, ele irá direcionar
              sua vida e você o chamará de destino.
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mobile-container">
        <div className="mobile-nav">
          <div className="mobile-logo">
            <h1>SHERLOGIC</h1>
            <h2>LEITURA REVELADORA</h2>
          </div>
          <div className="hamburger-menu">
            <Hamburger toggled={isOPen} toggle={setIsOpen} color="#630092" />
          </div>
        </div>
        <div
          className={`nav-mobile-box ${!isOPen ? "nav-mobile-box-hidden" : ""}`}
        >
          <ul>
            <li>
              <a onClick={() => scrollToSection("inicio")}>Início</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("sobre")}>Sobre</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("conteudo")}>Conteúdo</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("curso")}>Curso</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("clientes")}>Clientes</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contato")}>Contatos</a>
            </li>
          </ul>
        </div>
        <div className="mobile-header">
          <div className="mobile-header-info">
            <UilSpade color="#630092" size="60"></UilSpade>
            <h2>SEJA BEM VINDO À SHERLOGIC</h2>
            <h1>
              SUA JORNADA PARA UMA MAIOR<br></br>
              <span>INTELIGÊNCIA E RACIONALIDADE</span>
              <br></br>
              SE INICIA AQUI
            </h1>
            <h3>
              O primeiro passo para ter uma mente como a de Sherlock Holmes é
              identificar falhas lógicas que todo mundo comete e os evitar.
              Comece isso agora.
            </h3>
          </div>
          <video
            className="mobile-video-header video-mobile"
            src={videoBg}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="mobile-section-1">
          <h2>NOSSO CURSO</h2>
          <h1>Conheça um pouco mais!</h1>
          <video src={videoBg} controls></video>
        </div>
        <div className="mobile-section-2">
          <div className="mobile-card-2">
            <UilBrain color="#630092" size="60"></UilBrain>
            <h2>SOBRE O CURSO</h2>
            <h1>ESTEJA À FRENTE DE FANTASMAS MENTAIS</h1>
            <h3>
              A abordagem única de Sherlogic vai expor mecanismos inconscientes
              que atuam em sua intuição e raciocínio e que estiveram ocultos de
              você até este momento. É sua oportunidade única de estar à frente
              da multidão cega dos próprios vieses.
            </h3>
            <button>LER MAIS</button>
          </div>
        </div>
        <div className="mobile-section-3">
          <div className="mobile-card-2">
            <UilClub color="#630092" size="60"></UilClub>
            <h2>NOSSO CURSO</h2>
            <h1>Eleve A Sua Mente A Outro Nível</h1>
            <h3>
              O conteúdo de Sherlogic é inovador, único, profundo, transformador
              e respaldado cientificamente sendo um oportunidade única para ,
              seja você um fã de Sherlock Holmes ou não!
            </h3>
            <button>SABER MAIS</button>
            <div className="card mobile-type">
              <div className="card-icon">
                <img alt="" src={feature1}></img>
              </div>
              <div className="card-text">
                <h2>
                  Aprenda em profundidade os mecanismos e armadilhas que você já
                  cai todos os dias e nem sequer percebe
                </h2>
              </div>
            </div>
            <div className="card mobile-type">
              <div className="card-icon">
                <img alt="" src={feature2}></img>
              </div>
              <div className="card-text">
                <h2>
                  Várias das estratégias mentais de Sherlock Holmes, o maior
                  gênio da ficção, são explicadas à luz das evidências atuais
                </h2>
              </div>
            </div>
            <div className="card mobile-type">
              <div className="card-icon">
                <img alt="" src={feature3}></img>
              </div>
              <div className="card-text">
                <h2>
                  Sem sensacionalismo que te promete virar o Sherlock Holmes ou
                  um detector de mentiras. Aqui, as paráfrases ao detetive não
                  comprometem o rigor científico
                </h2>
              </div>
            </div>
            <div className="card mobile-type">
              <div className="card-icon">
                <img alt="" src={feature4}></img>
              </div>
              <div className="card-text">
                <h2>
                  Além dos inúmeros conceitos de psicologia cognitiva, são
                  abordadas diversas falácias lógicas ao longo do curso
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-section-4"></div>
        <div className="mobile-section-5">
          <h1>
            VEJA POR DENTRO DE<br></br>
            <span>NOSSO CURSO</span>
          </h1>
          <h2>MÓDULOS E AULAS</h2>
          <div class="container">
            <div class="product-card">
              <img alt="" src={carousel1} />
            </div>

            <div class="product-card">
              <img alt="" src={carousel2} />
            </div>

            <div class="product-card">
              <img alt="" src={carousel3} />
            </div>
          </div>
        </div>
        <div className="mobile-section-6">
          <div className="mobile-card-2">
            <UilBrain color="#630092" size="60"></UilBrain>
            <h2>SOBRE O MARCELO</h2>
            <h1>
              UMA DAS MENTES MAIS <br></br> DIFERENCIADAS DO PAÍS<br></br>
              <span>AGORA AO SEU LADO</span>
            </h1>

            <button>LER MAIS</button>
            <h3>
              Um jovem com resultados acadêmicos brilhantes e uma mente fora do
              comum desenvolveu um curso com uma metodologia única baseada em
              evidências científicas e inspirada em Sherlock Holmes. O conteúdo
              te fará desenvolver o pensamento lógico e a racionalidade.
              Destaque-se em sua vida pessoal e profissional ao ver as
              armadilhas mentais óbvias para você, mas ocultas para todos
              outros.
            </h3>
            <ul>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Didática única
              </li>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Melhore
                diversas esferas da vida
              </li>
              <li>
                <UilCheckCircle color="#630092"></UilCheckCircle>Liberdade e
                autonomia intelectual
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-section-7">
          <div className="content-section-7">
            <div className="center-block">
              <h1>
                O QUE DIZEM <br></br>
                <span>AS MAIORES AUTORIDADES DO PAÍS</span>
                <br></br>EM PSICOLOGIA E COMPORTAMENTO
              </h1>
              <div ref={playerRef}>
                <audio ref={audioRef} src={storm}></audio>
              </div>
              <div className="comment-block">
                <div className="comment-video">
                  <img alt="" src={thumb}></img>
                </div>
                <div className="mobile-comment">
                  <h3>
                    Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia
                    dolor sit amet.
                  </h3>
                  <div className="user-block">
                    <img alt="" src={profile}></img>
                    <h2>
                      Amarildo Amaral<br></br>
                      <span>amarildoamaral@gmail.com</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing pricing-mobile" id="comprar">
          <h2>REALIZAR COMPRA</h2>
          <h1>Adquira nosso curso agora mesmo!</h1>

          <div className="inner-pricing mobile-inner">
            <video src={videoBg} controls></video>
            <div className="course-description">
              <h1>R$200,00</h1>
              <h2>Em até 12x no cartão</h2>
              <button>Ir para o carrinho</button>
              <div className="course-goods">
                <div>
                  <UilCheck></UilCheck> <h2>Garantia de 7 dias</h2>
                </div>
                <div>
                  <UilFileCheckAlt></UilFileCheckAlt>{" "}
                  <h2>Certificado de conclusão</h2>
                </div>
                <div>
                  <UilVideo></UilVideo>
                  <h2>+200 horas de aulas gravadas</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-box-pricing"></div>
        </div>

        <div className="content-7 mobile-contato" id="contato">
          <div className="block">
            <h1>
              ENTRE EM <span>CONTATO</span>
            </h1>
            <h2>
              Pronto para dar o próximo passo? Entre em contato conosco hoje e
              descubra como podemos ajudá-lo a alcançar seus objetivos!
            </h2>
            <ul>
              <li>
                <UilMapMarker color="#630092" size="40"></UilMapMarker>
                <h2>
                  Endereço<br></br>
                  <span>Rua h8D, 106</span>
                </h2>
              </li>
              <li>
                <UilPhone color="#630092" size="40"></UilPhone>
                <h2>
                  Telefone<br></br>
                  <span>(00) 99999-9999</span>
                </h2>
              </li>
              <li>
                <UilEnvelope color="#630092" size="40"></UilEnvelope>
                <h2>
                  Email<br></br>
                  <span>sherlogic@example.com</span>
                </h2>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="mail-block">
              <form>
                <label for="name">SEU NOME</label>
                <input type="text" id="name"></input>
                <label for="name">SEU EMAIL</label>
                <input type="mail" id="email"></input>
                <label for="message">SUA MENSAGEM</label>
                <textarea id="message"></textarea>
                <button>ENVIAR</button>
              </form>
            </div>
          </div>
          <div className="gradient-box-5"></div>
        </div>
      </div>
    );
  }
}

export default App;
