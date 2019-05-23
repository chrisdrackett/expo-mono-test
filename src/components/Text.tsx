import React from "react";
import { Text as NativeText } from "react-native";

export const Text: React.FC = ({ children }) => {
  return <NativeText children={children} />;
};
