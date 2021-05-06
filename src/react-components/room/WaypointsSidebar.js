import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./WaypointsSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as GoToIcon } from "../icons/GoTo.svg";
import { CloseButton } from "../input/CloseButton";
import { ButtonListItem } from "../layout/List";
import { FormattedMessage } from "react-intl";

export function WaypointsSidebarItem({ waypoint, ...rest }) {
  return (
    <ButtonListItem {...rest} className={classNames(styles.object)} type="button" aria-label={waypoint.className}>
      <p>{waypoint.className}</p>
    </ButtonListItem>
  );
}

WaypointsSidebarItem.propTypes = {
  waypoint: PropTypes.object
};

export function NoWaypoints() {
  return (
    <li className={styles.noObjects}>
      <p>
        <FormattedMessage id="waypoints-sidebar.no-waypoints" defaultMessage="There are no waypoints in the room." />
      </p>
    </li>
  );
}

export function WaypointsSidebar({ children, waypointCount, onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="waypoints-sidebar.title"
          defaultMessage="Waypoints ({waypointCount})"
          values={{ waypointCount }}
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <ul>{children}</ul>
    </Sidebar>
  );
}

WaypointsSidebar.propTypes = {
  waypointCount: PropTypes.number.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func
};

WaypointsSidebar.defaultProps = {
  waypointCount: 0
};

export function WaypointsToolbarButton(props) {
  return (
    <ToolbarButton
      {...props}
      icon={<GoToIcon />}
      preset="accent3"
      label={<FormattedMessage id="content-menu.waypoints-menu-button" defaultMessage="Waypoints" />}
    />
  );
}
