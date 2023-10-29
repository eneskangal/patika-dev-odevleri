import React from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

 function EmojiResultRow({ title, symbol }) {
  const codePointHex =  symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
      data-testid="copy-title"
      id="emojiResultsRowDiv"
    >
      <img alt={title} src={src} />
      <span className="title">{title}</span>
      <span className="info" data-testid="copy">
        Click to copy emoji
      </span>
    </div>
  );
}

EmojiResultRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojiResultRow;
