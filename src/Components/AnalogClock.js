export const AnalogClock = ({ clock }) => {
  let options = {
    useCustomTime: true,
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff",
    },
    seconds: 1,
    minutes: 44,
    hours: 19,
  };

  return (
    <div className="Analog-clock">
      <AnalogClock {...options} />
    </div>
  );
};
