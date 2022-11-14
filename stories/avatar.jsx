import * as React from "react";
import "./avatar.css";

/**
 * Primary UI component for user presentation
 */
export default function Avatar(props) {
  return <img className="avatar" {...props} />;
}
