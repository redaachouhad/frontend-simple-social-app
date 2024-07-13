import {
  Close,
  ModeComment,
  MoreVert,
  Send,
  ThumbUpAlt,
} from "@mui/icons-material";
import "./post.css";
import { useState } from "react";

export default function Post() {
  const [isVisEmoji, setIsVisEmoji] = useState(true);
  const [isClosedComments, setIsClosedComments] = useState(false);

  function handleClick() {
    setIsVisEmoji((prevValue) => {
      return !prevValue;
    });
  }

  function handleClickComments() {
    setIsClosedComments((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <>
      <div
        className="windowOfComments"
        style={{
          visibility: isClosedComments ? "visible" : "hidden",
          opacity: isClosedComments ? 1 : 0,
        }}
      >
        <div className="windowOfCommentsClose">
          <div className="windowOfCommentsCloseText">
            <b>Publication of Helina Haris</b>
          </div>
          <div
            className="windowOfCommentsCloseButton"
            onClick={handleClickComments}
          >
            <Close className="windowOfCommentsCloseIcon" />
            <span className="windowOfCommentsCloseButtonText">close</span>
          </div>
        </div>
        <div className="windowOfCommentsWrapper">
          <div className="postWrapperTop">
            <div className="postWrapperTopLeft">
              <img
                src="assets/person/11.jpeg"
                alt=""
                className="postWrapperTopLeftProfileImg"
              />
              <span className="postWrapperTopLeftUsername">Helina Haris</span>
              <span className="postWrapperTopLeftTime"> 3 mins ago</span>
            </div>
            <MoreVert className="postWrapperTopRight" />
          </div>
          <div className="postWrapperCenter">
            <span className="postWrapperCenterText">
              Hello! This is my first post.
            </span>
            <img
              src="assets/post/1.jpeg"
              alt=""
              className="postWrapperCenterImg"
            />
          </div>
          <div className="postWrapperBottom">
            <div className="postWrapperBottomReactionsAndComments">
              <div className="postWrapperBottomReactions">
                <img
                  src="assets/like.png"
                  alt=""
                  className="postWrapperBottomReactionsImg"
                />
                <img
                  src="assets/heart.png"
                  alt=""
                  className="postWrapperBottomReactionsImg"
                />
                <span className="postWrapperBottomReactionsNumber">32</span>
              </div>
              <div className="postWrapperBottomComments">
                <span className="postWrapperBottomCommentsText">
                  9 comments
                </span>
              </div>
            </div>
            <hr className="postWrapperBottomHr" />
            <div className="postWrapperBottomReactingCommentingSharing">
              <div className={isVisEmoji ? "emojis" : "emojis emojisVis"}>
                <img
                  src="assets/emojis/like.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/love.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/solider.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/haha.gif"
                  alt=""
                  className="emojiItem"
                />
                <img src="assets/emojis/wow.gif" alt="" className="emojiItem" />
                <img src="assets/emojis/sad.gif" alt="" className="emojiItem" />
                <img
                  src="assets/emojis/angry.gif"
                  alt=""
                  className="emojiItem"
                />
              </div>
              <div
                className="postWrapperBottomReactingCommentingSharingItem"
                onClick={handleClick}
              >
                <ThumbUpAlt className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Like
                </span>
              </div>
              <div className="postWrapperBottomReactingCommentingSharingItem">
                <ModeComment className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Comment
                </span>
              </div>
              <div className="postWrapperBottomReactingCommentingSharingItem">
                <Send className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Share
                </span>
              </div>
            </div>
            <hr className="postWrapperBottomHr" />
            <div className="postWrapperBottomListPersonsCommenting">
              <div className="postWrapperBottomPersonCommenting">
                <img
                  src="assets/person/11.jpeg"
                  alt=""
                  className="postWrapperBottomPersonCommentingImg"
                />
                <div className="postWrapperBottomPersonCommentingComment">
                  <span className="postWrapperBottomPersonCommentingCommentUsername">
                    Ahmed Ali
                  </span>
                  <span className="postWrapperBottomPersonCommentingCommentText">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups. Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing
                    industries for previewing layouts and visual mockups. Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.
                  </span>
                </div>
              </div>
              <div className="postWrapperBottomPersonCommenting">
                <img
                  src="assets/person/11.jpeg"
                  alt=""
                  className="postWrapperBottomPersonCommentingImg"
                />
                <div className="postWrapperBottomPersonCommentingComment">
                  <span className="postWrapperBottomPersonCommentingCommentUsername">
                    Ahmed Ali
                  </span>
                  <span className="postWrapperBottomPersonCommentingCommentText">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups. Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing
                    industries for previewing layouts and visual mockups. Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personalCommentField">
          <img
            src="assets/person/11.jpeg"
            alt=""
            className="personalCommentFieldImg"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            className="personalCommentFieldTextArea"
            placeholder="What is your opinion about this publication ?"
          ></textarea>
          <Send className="personalCommentFieldPublishIcon" />
        </div>
      </div>

      <div className="post">
        <div className="postWrapper">
          <div className="postWrapperTop">
            <div className="postWrapperTopLeft">
              <img
                src="assets/person/11.jpeg"
                alt=""
                className="postWrapperTopLeftProfileImg"
              />
              <span className="postWrapperTopLeftUsername">Helina Haris</span>
              <span className="postWrapperTopLeftTime"> 3 mins ago</span>
            </div>
            <MoreVert className="postWrapperTopRight" />
          </div>
          <div className="postWrapperCenter">
            <span className="postWrapperCenterText">
              Hello! This is my first post.
            </span>
            <img
              src="assets/post/1.jpeg"
              alt=""
              className="postWrapperCenterImg"
            />
          </div>
          <div className="postWrapperBottom">
            <div className="postWrapperBottomReactionsAndComments">
              <div className="postWrapperBottomReactions">
                <img
                  src="assets/like.png"
                  alt=""
                  className="postWrapperBottomReactionsImg"
                />
                <img
                  src="assets/heart.png"
                  alt=""
                  className="postWrapperBottomReactionsImg"
                />
                <span className="postWrapperBottomReactionsNumber">32</span>
              </div>
              <div className="postWrapperBottomComments">
                <span className="postWrapperBottomCommentsText">
                  9 comments
                </span>
              </div>
            </div>
            <hr className="postWrapperBottomHr" />
            <div className="postWrapperBottomReactingCommentingSharing">
              <div className={isVisEmoji ? "emojis" : "emojis emojisVis"}>
                <img
                  src="assets/emojis/like.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/love.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/solider.gif"
                  alt=""
                  className="emojiItem"
                />
                <img
                  src="assets/emojis/haha.gif"
                  alt=""
                  className="emojiItem"
                />
                <img src="assets/emojis/wow.gif" alt="" className="emojiItem" />
                <img src="assets/emojis/sad.gif" alt="" className="emojiItem" />
                <img
                  src="assets/emojis/angry.gif"
                  alt=""
                  className="emojiItem"
                />
              </div>
              <div
                className="postWrapperBottomReactingCommentingSharingItem"
                onClick={handleClick}
              >
                <ThumbUpAlt className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Like
                </span>
              </div>
              <div
                className="postWrapperBottomReactingCommentingSharingItem"
                onClick={handleClickComments}
              >
                <ModeComment className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Comment
                </span>
              </div>
              <div className="postWrapperBottomReactingCommentingSharingItem">
                <Send className="postWrapperBottomReactingCommentingSharingItemIcon" />
                <span className="postWrapperBottomReactingCommentingSharingItemText">
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
