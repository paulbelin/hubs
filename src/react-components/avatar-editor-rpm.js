import React, { Component } from "react";
import PropTypes from "prop-types";
// import { defineMessage, FormattedMessage, injectIntl } from "react-intl";
import classNames from "classnames";
// import { replaceHistoryState } from "../utils/history";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { CloseButton } from "./input/CloseButton";
import styles from "../assets/stylesheets/avatar-editor.scss";

export default class AvatarEditorRPM extends Component {
  state = {
    url: ""
  };

  static propTypes = {
    history: PropTypes.object,
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string
  };

  componentDidMount = async () => {
    window.addEventListener("message", this.setRPMAvatarUrl);
  };

  setRPMAvatarUrl = e => {
    if (e.origin === "https://vr.readyplayer.me") {
      this.setState({
        url: e.data
      });
      if (this.state.url) {
        document.querySelector(".rpm-editor-frame").remove();
        this.props.onSave(this.state.url);
        // replaceHistoryState(this.props.history, this.props.history.location.state.key, "profile", {
        //   avatarId: this.state.url
        // });
      }
    }
  };

  componentWillUnmount = async () => {
    window.removeEventListener("message", this.setRPMAvatarUrl);
  };

  render() {
    return (
      <div className={classNames(styles.avatarEditor, this.props.className)}>
        {this.props.onClose && <CloseButton onClick={this.props.onClose} />}
        <iframe className="rpm-editor-frame" src="https://vr.readyplayer.me" allow="camera *; microphone *" />
      </div>
    );
  }
}
