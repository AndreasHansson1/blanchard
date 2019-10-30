import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Form = () => {
  const context = useThemeUI();
  const {
    theme: { borderRadius, boxshadow }
  } = context;

  const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    background: #ecf5eb;
    padding: 2rem;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 14px;
  `;

  const HiddenInput = styled.input`
    display: none;
  `;

  const Label = styled.label`
    width: 100%;
  `;

  const Textarea = styled.textarea`
    width: 100%;
    height: auto;
    text-align: left;
    margin-bottom: 10px;
    font-size: 14px;
  `;
  const Button = styled.button`
    background-color: rgba(0, 173, 158, 1);
    color: #fff;
    padding: 10px 20px;
    border: none;
    font: 16px georgia, serif;
    ${borderRadius};
    ${boxshadow};
    margin-left: auto;
    :hover {
      background-color: rgba(0, 173, 158, 0.8);
    }
  `;

  return (
    <StyledForm
      name='contact'
      method='POST'
      data-netlify='true'
      action='https://formspree.io/info.blanchard@mail.com'
    >
      <Label htmlFor='name'>
        Your Name:
        <Input type='text' name='name' id='name' />
      </Label>

      <Label htmlFor='email'>
        Your Email:
        <Input type='email' name='_replyto' id='email' />
      </Label>

      <Label htmlFor='message'>
        Message:
        <Textarea name='message' rows='10' cols='100' id='message' />
      </Label>

      <HiddenInput type='text' name='_gotcha' />

      <Button type='submit'>Send</Button>
    </StyledForm>
  );
};

export default Form;
