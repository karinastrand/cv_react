import React from 'react';

function TextWithLines(props) {
  const textWithBreaks = props.text.split('*').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  return <div>{textWithBreaks}</div>;
}

export default TextWithLines;