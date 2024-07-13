import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeWrapper">
        <Sidebar />
        <div className="homeWrapperSub">
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
