import Head from 'next/head';
import React, { useRef } from 'react';
import { imageList } from './places/tattoo-places-v.js';

export default function Home() {

    var containerBox = useRef(null);
    var dropDown = useRef(null);
    var rotateArrowDropDown = useRef(null);

    function rolagem(e) {
        if (e.deltaY > 0) {
            containerBox.current.scrollLeft += 400;
        }
        else {
            e.preventDefault();
            containerBox.current.scrollLeft -= 400;
        }
    }

    function openDropDown() {
        var a = dropDown.current.classList.toggle('close');
        var rotate = 0;
        if (a !== true) {
            rotate = -180;
        }
        rotateArrowDropDown.current.style.transform = `rotate(${rotate}deg)`;

    }

    return (
        <>
            <Head>
                <link rel="icon" href="/images/logo/Icone branco sem fundo.png" />
                <title>Tak Ghoul</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Neue&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mandali&display=swap" rel="stylesheet"></link>

                <link rel="stylesheet" href="/styles/navbar.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/grid.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/modal.css" type="text/css" media="all" />
            </Head>

            <body>
                <header>
                    <nav className="navbar">
                        <div className="navBarLeft">
                            <div className="logo">
                                <img src="/images/logo/Logo 2 dragão branca sem fundo.png" alt="logo" width="98" height="53" />
                            </div>
                            <div className="search-box">
                                <input className="search-bar" type="text" placeholder="Localidade" />
                                <a className="btn-location" href="">
                                    <img src="/icon/cursor.svg" alt="location-icon" />
                                </a>
                                <p className="btn-down-list" onClick={() => openDropDown()}>
                                    <img src="/icon/arrow-down-sign-to-navigate.svg" alt="dopdown-arrow-btn" ref={rotateArrowDropDown} />
                                </p>
                                <ul className="dropdown close" ref={dropDown}>
                                    <li className="itemdropdown">Lista</li>
                                    <li className="itemdropdown">Listax</li>
                                    <li className="itemdropdown">Listac</li>
                                    <li className="itemdropdown">Listaa</li>
                                    <li className="itemdropdown">Lista</li>
                                    <li className="itemdropdown">Listd</li>
                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li><a>Início</a></li>
                            <li><a>Estilos</a></li>
                            <li><a>Explorar</a></li>
                        </ul>
                    </nav>
                </header>
                  
                <br /><br />

                <h3 className="subtitle1"> Estúdios populares em . . . </h3>
                <div class="container-box" ref={containerBox} onWheel={(e) => rolagem(e)}>
                    <div class="boxes">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>
                </div>

                <br /><br />

                <h3 className="subtitle1"> Postagens de tattoo recentes em . . . </h3>
                <div>
                    <section className="layout-grid">
                        {imageList.map((item, key) => {
                            return (
                                <div className="img-content" key={key}>
                                    <img id="i-tattoo" className="img-tattoo" src={item} />
                                    <div className="who-posted">
                                        <foto />
                                        <p href="">Fulano Studio</p>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </div>

                <div id="modal-conectar" className="modal-container">
                    <div className="modal">
                        <button className="close-login">x</button>
                        <h4 className="frase-login">Conecte-se ao universo</h4>
                        <img className="logo-title" src="/images/logo/Logo 2 dragão sem fundo.png" alt="" />
                        <form action="">
                            <div>
                                <label className="label-email-login" for="email">Email</label><br />
                                <input type="text" className="input-email-login" />
                            </div>
                            <div>
                                <label className="label-senha-login" for="senha">Senha</label><br />
                                <input type="text" className="input-password-login" />
                            </div>
                        </form>
                        <p className="link-recupera-senha">Esqueçeu sua senha?<a href="">Recupere-a</a></p><br />
                        <button className="btn-conectar-login" type="submit">Conectar</button>
                        <p className="link-criar-conta">Não tem uma conta?<a href="">Crie uma!</a></p><br />
                    </div>
                </div>
            </body>
        </>
    )
}