import React, { Component } from "react";
import ModalVideo from "react-modal-video";


export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="O6AxxYhCxeQ"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Open</button>
        </div>
      </div>
    );
  }
}

export default Modal;