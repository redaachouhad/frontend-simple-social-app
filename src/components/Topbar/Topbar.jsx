import "./topbar.css";

import { Chat, Notifications, Person, Search, Spa } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Spa className="topbarLeftIcon" />
          <span className="topbarLogo">Social App</span>
          <Spa className="topbarLeftIcon" />
        </div>
        <div className="topbarCenter">
          <div className="topbarCenterSearch">
            <Search className="topbarCenterSearchIcon" />
            <input
              type="text"
              className="topbarCenterSearchInput"
              placeholder="Searching friends, posts and videos"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarRightLinks">
            <a className="topbarRightLink" href="/">
              Homepage
            </a>
            <a className="topbarRightLink" href="/profile">
              Timeline
            </a>
          </div>
          <div className="topbarRightIcons">
            <div className="topbarRightIconItem">
              <Person className="topbarRightIcon" />
              <span className="topbarRightLinkTag">3</span>
            </div>
            <div className="topbarRightIconItem">
              <Chat className="topbarRightIcon" />
              <span className="topbarRightLinkTag">4</span>
            </div>
            <div className="topbarRightIconItem">
              <Notifications className="topbarRightIcon" />
              <span className="topbarRightLinkTag">2</span>
            </div>
          </div>
          <div className="topbarRightProfile">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="topbarRightProfileImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
