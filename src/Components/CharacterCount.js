export const CharacterCounter = ({ counter, limit, color, shadowColor }) => {
  return (
    <div className="Twitter-counter">
      {counter} / {limit - counter} {color} {shadowColor}
    </div>
  );
};
