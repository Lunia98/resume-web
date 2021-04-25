import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import UIfx from "uifx";
import coinSound from "../../../images/mario_coin.mp3";
import useLongPress from "../../Hooks/useLongPress";
export default function ButtonMobile({
  pos,
  setPos,
  setCountIcon,
  countIcon,
  setUp,
  up,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const coin = new UIfx(coinSound);
  const handleOnClick = (e) => {
    if (e.target.value === "right") {
      setPos(pos !== 4 ? pos + 1 : 4);
    } else if (e.target.value === "left") {
      setPos(pos !== 0 ? pos - 1 : 0);
    } else if (e.target.value === "up" && countIcon < 14) {
      setUp(!up);
      setCountIcon(countIcon + 1);
      coin.setVolume(0.05).play();
    }
  };
  const handleOnMouseDown = (e) => {
    if (countIcon < 14) {
      setUp(!up);
      setCountIcon(countIcon + 1);
      coin.setVolume(0.05).play();
    }
  };
  const handleOnMouseUp = (e) => {
    if (countIcon < 14) {
      setUp(!up);
    } else if (countIcon === 14) {
      setUp(false);
    }
  };
  const reset = (e) => {
    setScrollPosition(0);
  };

  const handleClickScrollBottom = () => {
    setScrollPosition(scrollPosition + 2);
    window.scrollBy(0, scrollPosition);
  };

  const handleClickScrollUp = () => {
    setScrollPosition(scrollPosition - 2);
    window.scrollBy(0, scrollPosition);
  };

  const longPressBottom = useLongPress(handleClickScrollBottom, 40);
  const longPressUp = useLongPress(handleClickScrollUp, 40);

  return (
    <div className="container_button_gameboy">
      <div className="container_buttons_horizontal">
        <button
          className="gameboy_button horizontal"
          value="left"
          onClick={(e) => handleOnClick(e)}
        />
        <button
          className={pos === 1 ? "gameboy_button horizontal gameboy_button_animation" : "gameboy_button horizontal"}
          value="right"
          onClick={(e) => handleOnClick(e)}
        />
      </div>
      <div className="container_buttons_vertical">
        {pos === 3 ? (
          <button
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onTouchStart={handleOnMouseDown}
            onTouchEnd={handleOnMouseUp}
            className={
              countIcon === 0
                ? "gameboy_button vertical gameboy_button_animation"
                : "gameboy_button vertical"
            }
            value="up"
          />
        ) : (
          <button
            value="up"
            className="gameboy_button vertical"
            {...longPressUp}
            onClick={reset}
          />
        )}

        <button
          className="gameboy_button vertical"
          {...longPressBottom}
          onClick={reset}
          value="bottom"
        />
      </div>
      {pos === 0 && <Redirect to="/resume-web/" />}
      {pos === 1 && <Redirect to="/resume-web/home" />}
      {pos === 2 && <Redirect to="/resume-web/projects" />}
      {pos === 3 && <Redirect to="/resume-web/skills" />}
      {pos === 4 && <Redirect to="/resume-web/contact" />}
    </div>
  );
}
