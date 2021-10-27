import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Titulo from './tituloInstagram.js';
import instagram from './instagram.png';

const App = () => {
    return (
       
        <>
        <body>
            <Container>
                <Row>
                    <Col><Image src={instagram} className="marcio" fluid /></Col>
                    <Col md={4} className=" d-flex flex-column rounded">
                        <Titulo />
                        <input type="text" placeholder="Telefone, nome de email ou usuário" className="my-2 p-2" />
                        <input type="password" placeholder="Senha" className="p-2" />
                        <Button type="button" variant="info" className="my-3">Entrar</Button>
                        <div>
                            <Row>
                                <Col md={5}>
                                    <hr></hr>
                                </Col>
                                <Col md={2}>
                                    <span className="text-center">OU</span>
                                </Col>
                                <Col>
                                    <hr></hr>
                                </Col>
                            </Row>
                        </div>
                        <br></br>

                        <div className="text-center">
                            <Image src="https://www.ifpb.edu.br/en/imagens/icones/Facebook.gif" alt="" className="facebook" fluid /><span className="entraConta">Entrar com facebook</span>
                        </div>
                        <br></br>
                        <p className="text-center">Esqueceu a senha?</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="cadastrar my-2">
                        <p className="text-center my-auto p-3">Não tem uma conta? <a href="#">Cadastre-se</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="text-center my-3"> Obtenha o aplicativo.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="aplicativo d-flex justify-content-center justify-content-around">
                        <Image className="apple " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png" alt="" fluid />
                        <Image className="googlePlay " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png" alt="" fluid />
                    </Col>
                </Row>
            </Container>
        </body>
    </>
    );
}

export default App;