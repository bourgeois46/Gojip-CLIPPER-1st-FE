import React from "react";

function GuestSidebarItem({ menu }) {
  return (
    <div className="Guestsidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default GuestSidebarItem;
