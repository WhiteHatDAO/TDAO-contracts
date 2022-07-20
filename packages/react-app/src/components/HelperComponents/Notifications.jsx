import axios from "axios";
import React, { lazy, useEffect, useState } from "react";

const NotificationCard = lazy(() => import("./NotificationCard.jsx"));

const server = "http://localhost:4001";

const Notifications = ({ address }) => {
  const [notifications, setNotifications] = useState([{ id: 1, message: "this is a test notification!" }]);

  // get the notifs on page load
  useEffect(() => {
    const getNotificationsForUser = async () => {
      try {
        const response = await axios.get(`${server}/api/notifications/`, {
          walletId: address,
        });
        if (response?.data?.success) {
        } else {
          //
          setNotifications(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // getNotificationsForUser();
  }, [address]);

  return (
    <div className="flex flex-col p-8 bg-white space-y-4">
      <div className="ml-1 -mt-1 font-bold cursor-pointer text-xl text-left">Notifications</div>
      {/* <div>
        {notifications.length > 0 ? (
          notifications.map((item, index) => {
            return (
              <div>
                <div>
                  ID: {item.id} Message: {item.message}
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div> */}

      <NotificationCard state={"Published"}></NotificationCard>
      <NotificationCard state={"Comment"}></NotificationCard>
      <NotificationCard state={"Rejected"}></NotificationCard>
    </div>
  );
};

export default Notifications;
