import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
export default function Feed({ profile }) {
  return (
    <div className="feed">
      {profile ? <></> : <Share />}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
