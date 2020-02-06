import React, { useState, useRef } from "react";
import styled from "styled-components";

import Button from "./Button";
import TextInput from "./TextInput";
import { Bold } from "./type";

// Encode -- used to turn JSON object into encoded URI
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const SponsorFeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const commentsRef = useRef(null);
  const goalsachievedRef = useRef(null);
  const meetgoalsRef = useRef(null);
  const maingoalsRef = useRef(null);

  const submitForm = async e => {
    e.preventDefault();

    const serializedBody = encode({
      "form-name": "sponsor-feedback",
      "bot-field": "",
      comments: commentsRef ? commentsRef.current.value || "" : "",
      goalsachieved: goalsachievedRef
        ? goalsachievedRef.current.value || ""
        : "",
      maingoals: maingoalsRef ? maingoalsRef.current.value || "" : "",
      meetgoals: meetgoalsRef ? meetgoalsRef.current.value || "" : ""
    });

    await fetch(e.target.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: serializedBody
    });

    setSubmitted(true);
  };

  return (
    <>
      <FeedbackForm
        name="sponsor-feedback"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submitForm}
        style={submitted ? { display: "none" } : null}
      >
        What were your main goals for sponsoring? (optional)
        <FormTextArea name="maingoals" type="text" ref={maingoalsRef} />
        Were those goals achieved? (optional)
        <FormTextArea name="goalsachieved" type="text" ref={goalsachievedRef} />
        What could we have done better to meet those goals? (optional)
        <FormTextArea name="meetgoals" type="text" ref={meetgoalsRef} />
        Other comments (optional)
        <FormTextArea
          name="comments"
          type="text"
          placeholder="Feel free to provide your email so we can follow up!"
          ref={commentsRef}
        />
        <FormButton type="submit">Submit</FormButton>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="sponsor-feedback" />
      </FeedbackForm>
      {submitted && (
        <FormSuccess>
          Your feedback has been submit! Thank you so much, and we hope to see
          you next year!
        </FormSuccess>
      )}

      <FormContext>
        Interested in getting a head start on next year? E-mail us at{" "}
        <a href="mailto:sponsorship@hacksc.com" target="_blank">
          sponsorship@hacksc.com
        </a>
        !
      </FormContext>
    </>
  );
};

const FeedbackForm = styled.form`
  display: flex;
  margin-bottom: 32px;
  margin-top: 28px;
  flex-direction: column;
  width: 100%;
  animation-name: fade;
  animation-duration: 1s;
`;

const FormTextArea = styled.textarea`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #b2b2b2;
  padding: 12px 16px;
  color: black;
  font-size: 16px;
`;

const FormButton = styled(Button)`
  cursor: pointer;
`;

const FormSuccess = styled.p`
  color: #86dcea;
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
  animation-name: fade;
  animation-duration: 1s;
`;

const FormContext = styled.p`
  color: #757575;
  font-size: 14px;
`;

export default SponsorFeedbackForm;
