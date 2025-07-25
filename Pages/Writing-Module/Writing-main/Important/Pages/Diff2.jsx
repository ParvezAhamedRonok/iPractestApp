
import React, { useEffect } from "react";
import { Text, StyleSheet } from 'react-native';
import * as diff from "diff";
import PropTypes from "prop-types";

const styles = {
  added: {
    textAlign: 'center',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: "green",
    backgroundColor: "#b5efdb"
  },
  removed: {
    color: "red",
    backgroundColor: "#fec4c0"
  }
};

const Diff = ({ string1 = "", string2 = "", mode = "characters" }) => {
  let groups = [];



  if (mode === "characters") groups = diff.diffChars(string1, string2);
  if (mode === "words") groups = diff.diffWords(string1, string2);

  const mappedNodes = groups.map((group, index) => {
    const { value, added, removed } = group;
    let nodeStyles;
    if (added) nodeStyles = styles.added;
    if (removed) nodeStyles = styles.removed;

    if (added) return <Text
      style={nodeStyles}
      className="mb-2"
      key={index}
    >{value}</Text>;
    if (removed) return <Text
      style={nodeStyles}
      className="mb-2"
      key={index}
    >{added}</Text>;
    return <Text
      style={nodeStyles}
      className="mb-2"
      key={index}
    >{value}</Text>;

  });

  return <Text>{mappedNodes}</Text>;
};

Diff.propTypes = {
  string1: PropTypes.string,
  string2: PropTypes.string,
  mode: PropTypes.oneOf(["characters", "words"])
};

export default Diff;
