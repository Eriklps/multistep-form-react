import React from 'react'

import "./Thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Almost there!</h2>
      <p>Your opinion is very important to us</p>
      <p>To complete your review, click the Submit button below</p>
      <h3>Here is the resume of your review {data.name}:</h3>
      <p className="review-data">
        <span>Satisfaction:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comments:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;