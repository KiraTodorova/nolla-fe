export const Tweet = ({ tweet, date, deleteTweet, likeTweet, like }) => {
  return (
    <div className="Tweet-body">
      {tweet} {date}, {deleteTweet} {deleteTweet}
      <br />
      <br />
      <div className="Tweet-date">{date}</div>
      <button className="Twitter-button" onClick={deleteTweet}>
        {" "}
        Delete{" "}
      </button>
      <button className="Twitter-button" onClick={likeTweet}>
        {" "}
        {like ? `${like}` : "Like"}
        Like
      </button>
    </div>
  );
};
