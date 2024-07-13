import "./share.css";
import { Label, PermMedia, Place, EmojiEmotions } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="assets/person/11.jpeg"
            alt=""
            className="shareTopProfileImg"
          />
          <input
            type="text"
            className="shareTopInputText"
            placeholder="What's in you mind ?..."
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareBottomItemsList">
            <div className="shareBottomItem">
              <PermMedia
                style={{ color: "red" }}
                className="shareBottomItemIcon"
              />
              <span className="shareBottomItemTitle">Photos or video</span>
            </div>
            <div className="shareBottomItem">
              <Label
                style={{ color: "blue" }}
                className="shareBottomItemIcon"
              />
              <span className="shareBottomItemTitle">Tag</span>
            </div>
            <div className="shareBottomItem">
              <Place
                style={{ color: "green" }}
                className="shareBottomItemIcon"
              />
              <span className="shareBottomItemTitle">Location</span>
            </div>
            <div className="shareBottomItem">
              <EmojiEmotions
                style={{ color: "orangered" }}
                className="shareBottomItemIcon"
              />
              <span className="shareBottomItemTitle">Feeling</span>
            </div>
          </div>
          <button className="shareBottomButton">Share</button>
        </div>
      </div>
    </div>
  );
}
