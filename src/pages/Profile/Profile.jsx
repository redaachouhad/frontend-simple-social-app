import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./profile.css";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
export default function Profile() {
  return (
    <div className="profile">
      <Topbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileWrapperSub">
          <div className="profileWrapperSubUser">
            <img
              src="assets/person/11.jpeg"
              alt=""
              className="profileWrapperSubUserImg1"
            />
            <img
              src="assets/post/11.png"
              alt=""
              className="profileWrapperSubUserImg2"
            />

            <div className="profileWrapperSubUserDesc">
              <h3>Reda Achouhad</h3>
              <p>Hello World !</p>
            </div>
          </div>
          <div className="profileWrapperSubSub">
            <Feed profile />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
