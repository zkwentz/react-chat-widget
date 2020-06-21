import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from 'src/store/types';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
}

function Sender({ sendMessage, placeholder, disabledInput, onTextInputChange, buttonAlt }: Props) {
  // @ts-ignore

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <input
        type="text"
        className="rcw-new-message"
        name="message"
        placeholder={placeholder}
        disabled={disabledInput}
        autoComplete="off"
        onChange={onTextInputChange}
      />
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
