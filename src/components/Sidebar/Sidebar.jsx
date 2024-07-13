import {
  Bookmark,
  Chat,
  Event,
  Help,
  People,
  PlayCircle,
  RssFeed,
  School,
  Work,
} from "@mui/icons-material";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarListOptions">
          <li className="sidebarOption">
            <RssFeed className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Feed</span>
          </li>
          <li className="sidebarOption">
            <Chat className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Chats</span>
          </li>
          <li className="sidebarOption">
            <PlayCircle className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Videos</span>
          </li>
          <li className="sidebarOption">
            <People className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Groups</span>
          </li>
          <li className="sidebarOption">
            <Bookmark className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Bookmarks</span>
          </li>
          <li className="sidebarOption">
            <Help className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Questions</span>
          </li>
          <li className="sidebarOption">
            <Work className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Jobs</span>
          </li>
          <li className="sidebarOption">
            <Event className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Events</span>
          </li>
          <li className="sidebarOption">
            <School className="sidebarOptionIcon" />
            <span className="sidebarOptionName">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <div className="sidebarListFriends">
          <div className="sidebarFriend">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Samanta</span>
          </div>
          <div className="sidebarFriend">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">helina</span>
          </div>
        </div>
      </div>
    </div>
  );
}
