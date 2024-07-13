import {
  KeyboardDoubleArrowRight,
  LocationOn,
  School,
} from "@mui/icons-material";
import "./rightbar.css";

export default function Rightbar({ profile }) {
  function rightbarHomePage() {
    return (
      <>
        <h3>Birthday</h3>
        <div className="rightbarWrapperBirthday">
          <img
            src="assets/gift.png"
            alt=""
            className="rightbarWrapperBirthdayImg"
          />
          <span className="rightbarWrapperBirthdayText">
            <b>Ahmed</b> and <b>3 other friends have</b> a birthday today.
          </span>
        </div>
        <hr className="rightbarWrapperHr" />
        <h3>Sponsored</h3>
        <img src="assets/pepsi.png" alt="" className="rightbarWrapperAdImg" />
        <hr className="rightbarWrapperHr" />
        <h3>Contacts</h3>
        <div className="rightbarWrapperListContacts">
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
          <div className="rightbarWrapperFriend">
            <div className="rightbarWrapperListFriendProfileImgOnline">
              <img
                src="assets/person/9.jpeg"
                alt=""
                className="rightbarWrapperListFriendProfileImgOnlineImg"
              />
              <span className="rightbarWrapperListFriendProfileImgOnlineTag"></span>
            </div>
            <span className="rightbarWrapperListFriendUsername">
              Katti Sirou
            </span>
          </div>
        </div>
      </>
    );
  }

  function rightbarProfilePage() {
    return (
      <>
        <div className="rightbarWrapperUserInformation">
          <h3 className="rightbarWrapperUserInformationH3">Intro</h3>
          <div className="rightbarWrapperUserInformationItem">
            <School className="rightbarWrapperUserInformationItemIcon" />
            <span className="rightbarWrapperUserInformationItemText">
              Student at School X
            </span>
          </div>
          <div className="rightbarWrapperUserInformationItem">
            <LocationOn className="rightbarWrapperUserInformationItemIcon" />
            <span className="rightbarWrapperUserInformationItemText">
              Agadir
            </span>
          </div>
          <div className="rightbarWrapperUserInformationShowMore">
            <div className="rightbarWrapperUserInformationShowMoreDiv">
              <span className="rightbarWrapperUserInformationShowMoreText">
                Show More
              </span>
              <KeyboardDoubleArrowRight />
            </div>
          </div>
        </div>
        <div className="rightbarUserPhoto">
          <h3 className="rightbarUserPhotoH3">Photos</h3>
          <div className="rightbarUserPhotoListOfItemPhotos">
            <img
              src="assets/photoProfile/1.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/2.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/3.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/4.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/5.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/6.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/7.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
            <img
              src="assets/photoProfile/8.jpg"
              alt=""
              className="rightbarUserPhotoItemPhoto"
            />
          </div>
          <div className="rightbarWrapperUserInformationShowMoreDiv">
            <span className="rightbarWrapperUserInformationShowMoreText">
              Show More
            </span>
            <KeyboardDoubleArrowRight />
          </div>
        </div>
        <div className="rightbarWrapperUserListOfOnlineFriends">
          <h3 className="rightbarWrapperUserListOfOnlineFriendsText">
            User Friends
          </h3>
          <div className="rightbarWrapperUserListOfOnlineFriendsItems">
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                ali Ahmed
              </span>
            </div>
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/2.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                Mohmmed Hassan
              </span>
            </div>
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                Abdelaali jgjkkk
              </span>
            </div>
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/4.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                Abdelaali jgjkkk
              </span>
            </div>
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/8.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                Abdelaali jgjkkk
              </span>
            </div>
            <div className="rightbarWrapperUserOnlineFriend">
              <img
                src="assets/person/6.jpeg"
                alt=""
                className="rightbarWrapperUserOnlineFriendImg"
              />
              <span className="rightbarWrapperUserOnlineFriendText">
                Abdelaali jgjkkk
              </span>
            </div>
          </div>
          <div className="rightbarWrapperUserInformationShowMoreDiv">
            <span className="rightbarWrapperUserInformationShowMoreText">
              Show More
            </span>
            <KeyboardDoubleArrowRight />
          </div>
        </div>
        <hr className="lastProfileHr" />
        <h3>Online Friends</h3>
        <div className="listOnlineFriendsList">
          <div className="lastOnlineFriendItem">
            <div className="lastOnlineFriendItemProfile">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="lastOnlineFriendItemProfileImg"
              />
              <span className="lastOnlineFriendItemProfileTag"></span>
            </div>
            <span className="lastOnlineFriendItemUsername">Ahmed Ahmed</span>
          </div>
          <div className="lastOnlineFriendItem">
            <div className="lastOnlineFriendItemProfile">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="lastOnlineFriendItemProfileImg"
              />
              <span className="lastOnlineFriendItemProfileTag"></span>
            </div>
            <span className="lastOnlineFriendItemUsername">Ahmed Ahmed</span>
          </div>
          <div className="lastOnlineFriendItem">
            <div className="lastOnlineFriendItemProfile">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="lastOnlineFriendItemProfileImg"
              />
              <span className="lastOnlineFriendItemProfileTag"></span>
            </div>
            <span className="lastOnlineFriendItemUsername">Ahmed Ahmed</span>
          </div>
          <div className="lastOnlineFriendItem">
            <div className="lastOnlineFriendItemProfile">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="lastOnlineFriendItemProfileImg"
              />
              <span className="lastOnlineFriendItemProfileTag"></span>
            </div>
            <span className="lastOnlineFriendItemUsername">Ahmed Ahmed</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? rightbarProfilePage() : rightbarHomePage()}
      </div>
    </div>
  );
}
