import React, { useRef } from "react";
import PropTypes from "prop-types";
import { NoWaypoints, WaypointsSidebar, WaypointsSidebarItem, WaypointsToolbarButton } from "./WaypointsSidebar";
import { List } from "../layout/List";

export function WaypointsSidebarContainer({ scene, onClose }) {
  const listRef = useRef();
  const waypoints = scene.systems["hubs-systems"].waypointSystem.ready;

  return (
    <WaypointsSidebar waypointCount={waypoints.length} onClose={onClose}>
      {waypoints.length > 0 ? (
        <List ref={listRef}>
          {waypoints.map((waypoint, index) => (
            <WaypointsSidebarItem
              waypoint={waypoint.el}
              key={index}
              onClick={() => (window.location.hash = "#" + waypoint.el.className)}
            />
          ))}
        </List>
      ) : (
        <NoWaypoints />
      )}
    </WaypointsSidebar>
  );
}

WaypointsSidebarContainer.propTypes = {
  scene: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export function WaypointsToolbarButtonContainer(props) {
  return <WaypointsToolbarButton {...props} />;
}
