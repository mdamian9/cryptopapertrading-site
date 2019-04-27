import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignupForm from './SignupForm';

class SignupModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen
        }));
    };

    render = () => {
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}>Create Account</Button>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Create Account</ModalHeader>
                    <ModalBody>
                        <SignupForm />
                    </ModalBody>
                    <ModalFooter>
                        <div className="text-center">
                            Already have an account? Log in&nbsp;<Link to="/login">here</Link>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        );
    };

};

export default SignupModal;
