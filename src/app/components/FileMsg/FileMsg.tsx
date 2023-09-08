import React from 'react';
import './file-msg.css';

// import arrowDown from './img/arrow_down.svg';

import docLogo from './img/draft.svg';

function convertFileSize (size: number): string {
  if (size >= 500000) {
    return (size / 1000000).toFixed(1) + 'MB';
  }

  if (size >= 1000) {
    return (size / 1000).toFixed(1) + 'kB';
  }

  return '1kB';
}

function FileMsg ({ file }: { file: File }): React.ReactElement {
  const url = URL.createObjectURL(file);

  return (
    <div className="message-file">
      <div className="message-file-logo"><img src={docLogo} /></div>
      <div className='message-file-caption'>{file.name}</div>
      <a className='btn_file-load' href={url} rel='noopener' download={file.name}>
        <span className="material-symbols-outlined">
          arrow_downward
        </span>
        <span>
          {convertFileSize(file.size)}
        </span>
      </a>
    </div>
  )
}

export default FileMsg;
