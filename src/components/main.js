import React from "react";
import Myimg from './astronautinha.png'
import eu from './eu.png'
import habili from './habili.png'

class Main extends React.Component {
    render() {
        return (
            <div>
            <div>
                <section className="initial">
                <img src={Myimg} className="astronauta eu" alt="react" id="img-daniel" />
                <div className="inform">
                <h1 className="titles">Daniel Hott</h1>
                <h2 className="second" > Desenvolvedor FullStack</h2>
                <div className="button-contact">
                <a href="https://www.linkedin.com/in/danielhott" className="contact">Contato</a>
                </div>
                </div>
                </section>
                <section className="main-text">
                    <img height="600px"className="eu" src={eu} alt="" />
                    <div>
                    <hr/>
                    <h3 className="about-me">Sobre mim: </h3>
                    <p className="texto-me">Olá! Me chamo Daniel, tenho 22 anos, moro no Brasil na cidade de Volta Redonda/RJ.
                    Sou um desenvolvedor Fullstack em formação pela Trybe.
                    Tenho interesse por programação desde os 13 anos quando programava servers para jogos 
                    online por rede doméstica, mas foi durante minha formação em Física que tive meus primeiros 
                    contatos com python que decidi me dedicar 100% à programação e entrei para a Trybe.</p>
                    <hr/>
                    </div>
                </section>
                <section className="about-text">   
                    <div>
                        <hr />
                    <h3 className="about-me">Minha trajetória em programação:</h3>
                    <p className="texto-me2">Me formei em front-end, confira meus certificados <a className="aqui"href="https://www.credential.net/profile/danielsilvahott11961/wallet">aqui</a>, onde aprendi a programar em Javascript, 
                        React.js, controle de estado por Redux e Hooks. Tive a experiência de contribuir em vários projetos em grupo,
                         participar de DM's, fazer code reviews e isso foi muito importante para desenvolver habilidades de trabalho em grupo 
                         e ferramentas de controle de produção.
                        Estou em formação em back-end estudando sobre bancos relacionais com MySQL, não relacionais com mongoDB,
                         além de node.js, Typescript e containerização com Docker.
                    </p>
                    <hr />
                    </div>
                    <img height="600px"src={habili}alt=""/>
                </section>
                    <h3 className="about-me" id="projects">Meus projetos</h3>
                <section className="about-text2">
                <iframe title="login" src="https://giphy.com/embed/KdbwL1H0R8WzEnm745" width="233" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <iframe title="comidas" src="https://giphy.com/embed/66Woqo1ujcpH6ty2ra" width="233" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <div>
                <hr />
                <h2 className="about-me"> AppFood</h2>
                <p className="texto-me2">Aplicação para smartphones criada em grupo durante o módulo Front-end 
                    do curso de desenvolvimento full-stack organizado pela Trybe onde o usuário tem a possibilidade de pesquisar 
                    sua receita com 3 parâmetros, um pelo nome do prato, outro pelo ingrediente que o prato possui e outro pela primeira letra 
                    do prato. Possui as telas dos detalhes da receita, uma tela de explorar, uma tela de receitas sendo executadas.
                    Fornece receitas de bebidas e comidas, e recomenda pratos e bebidas que fazem sentido com cada prato!</p>
                    <a className="acesse" href="https://danielhott.github.io/food-app/#/"> <img class="emoji" alt="pizza" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/1f355.png"></img>Acesse o projeto no ar </a>
                <hr />
                </div>
                </section>
                <section className="project-text">
                <div>
                <hr />
                <h2 className="about-me">Beto Hott</h2>
                <p className="texto-me2">Esta aplicação é um portfólio de um músico que reúne todas suas redes sociais e um vídeo demonstrando sua performance.
                     Desenvolvido em React.js.</p>
                <a className="acesse2" href="https://danielhott.github.io/betohott/">Acesse esta aplicação aqui</a>
                <hr />
                </div>
                <div className="beto">
                <iframe title="beto" src="https://giphy.com/embed/LGyjlK12ZZifxjw5qK" width="800" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                </section>
                <section className="redes-text">
                    <h3 id="contact">Minhas redes sociais:</h3>
                    <a className="icons" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/danielhott"><svg width="3em" 
                    height="3em" 
                    viewBox="0 0 24 24"
                    ><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"></path></svg></a>
                    <a className="icons" rel="noreferrer" target="_blank" href="https://github.com/DanielHott"><svg width="3em" height="3em" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"></path></svg></a>
                    <h3>Email: daniel_hott@outlook.com</h3>
                </section>
            </div>
        </div>
        )
    }
}

export default Main;