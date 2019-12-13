import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/aika-2.png";

import { Form, Container } from "./styles";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="Aika logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/signup">Criar conta grátis</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignIn);