import React from "react";
import { useHistory } from "react-router-dom";
import "./SideBarOption.css";

const SideBarOption = (props) => {
  const { Icon, title, channalId, addingChannal } = props;
  const history = useHistory();

  const selectChannal = () => {
    if (channalId) {
      history.push(`/room/${channalId}`);
    } else {
      history.push("title");
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addingChannal ? addingChannal : selectChannal}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channal">
          <span className="sidebarOption__hashtag">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};
export default SideBarOption;
