import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const PostItem = ({ post, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body} numberOfLines={1}>
        {post.body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});

export default PostItem;
