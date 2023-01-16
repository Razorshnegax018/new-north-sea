import NextLink from "next/link";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function IndexPage() {
  return <Text>Yeah! I love men</Text>;
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    padding: 20,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginTop: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1977f2",
  },
  listitem: {
    marginVertical: "0.5rem",
    textAlign: "center",
  },
  pageLink: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
});
