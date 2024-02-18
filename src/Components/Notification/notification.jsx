import React from "react";
import "./notification.css";
import { MdCancel } from "react-icons/md";

const Notification = () => {
  return (
    <div className="notif">
      <div className="notification">
        <h4>NOTIFICATIONS</h4>
        <a href="http://localhost:3000/page"><MdCancel /></a>
      </div>
      <div className="content">
        <div className="message">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="mess1">
            <h5 className="title"> Finish work before sunday  </h5>
            <div className="mess2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, dignissimos adipisci. Eligendi explicabo laudantium
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
              repellat quos, vero cum dignissimos assumenda illum aliquam
              corporis nulla adipisci obcaecati nam enim blandi
            </div>
          </div>
          <p className="time">One hour ago</p>
        </div>
        <div className="message">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="mess1">
            <h5 className="title"> Finish work before sunday  </h5>
            <div className="mess2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, dignissimos adipisci. Eligendi explicabo laudantium
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
              repellat quos, vero cum dignissimos assumenda illum aliquam
              corporis nulla adipisci obcaecati nam enim blandi
            </div>
          </div>
          <p className="time">One hour ago</p>
        </div>
        <div className="message">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="mess1">
            <h5 className="title"> Finish work before sunday  </h5>
            <div className="mess2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, dignissimos adipisci. Eligendi explicabo laudantium
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
              repellat quos, vero cum dignissimos assumenda illum aliquam
              corporis nulla adipisci obcaecati nam enim blandi
            </div>
          </div>
          <p className="time">One hour ago</p>
        </div>
        <div className="message">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="mess1">
            <h5 className="title"> Finish work before sunday  </h5>
            <div className="mess2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, dignissimos adipisci. Eligendi explicabo laudantium
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
              repellat quos, vero cum dignissimos assumenda illum aliquam
              corporis nulla adipisci obcaecati nam enim blandi
            </div>
          </div>
          <p className="time">One hour ago</p>
        </div>
      </div>
    </div>
  );
};
export default Notification;
