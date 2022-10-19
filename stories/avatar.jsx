import * as React from "react";
import * as PropTypes from "prop-types";
import "./avatar.css";

/**
 * Primary UI component for user presentation
 */
export default function Avatar(props) {
  return <img {...props} data-avatar />;
}

// 🎪 DEMO controls:
// src: https://ui-avatars.com/api/?name=Jane+Doe
// alt: Jane Doe

Avatar.propTypes = {
  /**
   * The web address where the image is served
   */
  src: PropTypes.string.isRequired,
  /**
   * Text for screen readers and failed loads
   */
  alt: PropTypes.string.isRequired,
};

// Avatar.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: "medium",
//   onClick: undefined,
// };
