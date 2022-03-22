export const CharacterCounter = ({ counter, limit, color }) => {
  return (
    <div className="Twitter-counter">
      {counter} / {limit - counter} {color}
    </div>
  );
};
