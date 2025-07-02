"use client"
import React, { useEffect } from "react";
import * as diff from "diff";
import PropTypes from "prop-types";


const styles = {
  added: {
    color: "green",
    backgroundColor: "#b5efdb"
  },
  removed: {
    textAlign: 'center',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: "red",
    backgroundColor: "#fec4c0"
  }
};

const Diff = ({ string1 = "", string2 = "", mode = "characters" }) => {
  let groups = [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.diff = diff; // Assign diff to the window object on the client side
    }
  }, []);

  if (mode === "characters") groups = diff.diffChars(string1, string2);
  if (mode === "words") groups = diff.diffWords(string1, string2);

  const mappedNodes = groups.map((group, index) => {
    const { value, added, removed } = group;
    let nodeStyles;
    if (added) nodeStyles = styles.added;
    if (removed) nodeStyles = styles.removed;

    if (added) return <span
      style={nodeStyles}
      className="mb-2"
      key={index}
    >{removed}</span>;
    // if ( removed) return <span style={nodeStyles} className="mb-2">{value}</span>;
    return <span
      style={nodeStyles}
      className="mb-2"
      key={index}
    >{value}</span>;

  });

  return <span>{mappedNodes}</span>;
};

Diff.propTypes = {
  string1: PropTypes.string,
  string2: PropTypes.string,
  mode: PropTypes.oneOf(["characters", "words"])
};

export default Diff;


