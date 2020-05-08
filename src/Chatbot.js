import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { msgChatMessageRequest } from "./store/actions";

class Chatbot extends Component {
    state = {
        textToBeSent: "",
        nombre: 'Cliente'
    };

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    handleChange = e => {
        this.setState({ textToBeSent: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { textToBeSent } = this.state;
        const { sendMessage } = this.props;
        if (textToBeSent.trim() === "") {
            alert("No se puede enviar vacio! ");
            return;
        }
        sendMessage(textToBeSent);
        this.setState({ textToBeSent: "" });
    }

    render() {
        const { textToBeSent } = this.state;
        const { messages, onProcess } = this.props;
        console.log(messages);
        console.log(textToBeSent);
        return (
            <Fragment>
                <h1 className="heading">React Chat Bot With DialogFlow</h1>

                <ul className="listStyle">
                    {messages.map(({ text, sender, isErrorMessage }, index) => (
                        <li
                            key={index}
                            style={{ color: isErrorMessage ? "crimson" : "dodgerblue" }}
                        >
                            [{sender === 'Bot' ? '@cucamarieta' : this.state.nombre}]: {text === 'Welcome! Any questions?' ? 'Bienvenido a nuestra web' : text}
                        </li>
                    ))}
                </ul>

                <form onSubmit={this.handleSubmit} className="formPosStyle">
                    <input
                        className="form-group"
                        ref={input => input && input.focus()}
                        type="text"
                        value={onProcess ? "Waiting..." : textToBeSent}
                        onChange={this.handleChange}
                        placeholder="Pregunta aquí..."
                        disabled={onProcess}
                    />
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => state;
const mapActionToProps = { sendMessage: msgChatMessageRequest };

export default connect(mapStateToProps, mapActionToProps)(Chatbot);
