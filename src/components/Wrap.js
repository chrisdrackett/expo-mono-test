import React from "react";
import { StatusBar } from "react-native";

export const Wrap = ({ children }) => (
  <>
    <StatusBar barStyle="dark-content" />
    {children}
  </>
);
