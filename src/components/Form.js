import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Form = () => {
  const context = useThemeUI();
  const {
    theme: { borderRadius, boxshadow },
  } = context;

  const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    background: #f8f8ff;
    padding: 2rem;
  `;
  const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 14px;
  `;
  const Textarea = styled.textarea`
    width: 100%;
    height: auto;
    text-align: left;
    margin-bottom: 10px;
    font-size: 14px;
  `;
  const Button = styled.button`
    background: lightgrey;
    padding: 10px 20px;
    border: none;
    font: 16px georgia, serif;
    ${borderRadius};
    ${boxshadow};
    margin-left: auto;
    :hover {
      background: darkgrey;
    }
  `;

  return (
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      action="https://formspree.io/info.blanchard@mail.com"
    >
      <label htmlFor="name" style={{ width: '100%' }}>
        Your Name:
        <Input type="text" name="name" id="name" />
      </label>

      <label htmlFor="email" style={{ width: '100%' }}>
        Your Email:
        <Input type="email" name="_replyto" id="email" />
      </label>

      <label htmlFor="message">
        Message:
        <Textarea name="message" rows="10" cols="100" id="message" />
      </label>

      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <Button type="submit">Send</Button>
    </StyledForm>
  );
};

export default Form;