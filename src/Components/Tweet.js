export const Tweet = ({ tweet, date, handleDelete, handleLike, likes }) => {
  return (
    <div className="Tweet-body">
      <span id="Tweet-msg">{tweet}</span>
      <br />
      <span className="Tweet-date" id="Tweet-info">
        {date}
        <button className="Twitter-button" onClick={handleDelete}>
          {" "}
          Delete{" "}
        </button>
        <button className="Twitter-button" onClick={handleLike}>
          {" "}
          {likes ? `${likes} Likes` : "Like"}{" "}
        </button>
      </span>
    </div>
  );
};
