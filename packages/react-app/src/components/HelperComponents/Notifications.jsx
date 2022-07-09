import React from "react";

const Notifications = ({ notifications = [] }) => {
  return (
    <div>
      <div>
        <span>Notifications</span>
      </div>
      <div>
        {notifications.length > 0 ? (
          notifications.map((item, index) => {
            return <div></div>;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
