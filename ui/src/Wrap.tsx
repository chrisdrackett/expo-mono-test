import React from "react";
import { StatusBar } from "react-native";

export const Wrap: React.FC = ({ children }) => (
  <>
    <StatusBar barStyle="dark-content" />
    {children}
  </>
);
