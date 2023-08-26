import { Styled } from "./GrandOpening.styled";
import { useEffect, useState } from "react";

const CountDown = ({ date }: { date: string }) => {
  const [countdownDate] = useState(new Date(date).getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (!countdownDate) return;

    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceToDate / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distanceToDate / (1000 * 60)) % 60);
    const seconds = Math.floor((distanceToDate / 1000) % 60);

    const zeroPad = (num: any) => (num < 10 ? `0${num}` : num);

    setState({
      days: zeroPad(days),
      hours: zeroPad(hours),
      minutes: zeroPad(minutes),
      seconds: zeroPad(seconds),
    });
  };
  return (
    <div>
      <Styled.Countdown>
        <div className="bloc-time" data-init-value="0">
          <span className="count-title">Days</span>
          <div className="figure">
            <span className="top">{state.days.toString()[0] || "0"}</span>
          </div>
          <div className="figure">
            <span className="top">{state.days.toString()[1] || "0"}</span>
          </div>
        </div>
        <div className="bloc-time" data-init-value="0">
          <span className="count-title">Hours</span>
          <div className="figure">
            <span className="top">{state.hours.toString()[0] || "0"}</span>
          </div>
          <div className="figure">
            <span className="top">{state.hours.toString()[1] || "0"}</span>
          </div>
        </div>
        <div className="bloc-time" data-init-value="0">
          <span className="count-title">Minutes</span>
          <div className="figure">
            <span className="top">{state.minutes.toString()[0] || "0"}</span>
          </div>
          <div className="figure">
            <span className="top">{state.minutes.toString()[1] || "0"}</span>
          </div>
        </div>
        <div className="bloc-time" data-init-value="0">
          <span className="count-title">Seconds</span>
          <div className="figure">
            <span className="top">{state.seconds.toString()[0] || "0"}</span>
          </div>
          <div className="figure">
            <span className="top">{state.seconds.toString()[1] || "0"}</span>
          </div>
        </div>
      </Styled.Countdown>
    </div>
  );
};

export default CountDown;
