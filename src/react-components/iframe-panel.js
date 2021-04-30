import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "../assets/stylesheets/iframe-panel.scss";

function CloseButton({ onClick }) {
  const intl = useIntl();
  return (
    <button
      autoFocus
      aria-label={intl.formatMessage({
        id: "preferences-screen.close-button",
        defaultMessage: "Close Embedded Link Panel"
      })}
      className={classNames(styles.closeButton)}
      onClick={onClick}
    >
      <i className={styles.flex}>
        <FontAwesomeIcon className={styles.icon} icon={faTimes} />
      </i>
    </button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func
};

function OpenNewTabButton({ src }) {
  const intl = useIntl();
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={intl.formatMessage({
        id: "preferences-screen.close-button",
        defaultMessage: "Open in a new tab"
      })}
      title={intl.formatMessage({
        id: "preferences-screen.close-button",
        defaultMessage: "Open in a new tab"
      })}
      className={classNames(styles.newTabButton)}
    >
      <FormattedMessage id="todo" defaultMessage="Open in a new tab" />
      <i className={styles.flex}>
        <FontAwesomeIcon className={styles.icon} icon={faExternalLinkAlt} />
      </i>
    </a>
  );
}

OpenNewTabButton.propTypes = {
  src: PropTypes.string
};

class IframePanel extends Component {
  static propTypes = {
    intl: PropTypes.object,
    src: PropTypes.string,
    onClose: PropTypes.func
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className={classNames(styles.iframePanel)}>
        <div className={classNames(styles.iframeHeader)}>
          <CloseButton onClick={this.props.onClose} />
          <span className={classNames(styles.iframeTitle)}>{this.props.src}</span>
          <OpenNewTabButton src={this.props.src} />
        </div>
        <div className={classNames(styles.iframeContainer)}>
          <iframe width="100%" height="100%" src={this.props.src} />
        </div>
      </div>
    );
  }
}

export default IframePanel;
