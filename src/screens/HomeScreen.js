import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import PostItem from "../components/PostItem";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const retry = () => {
    setPosts([]);
    setLoading(true);
    setError(false);
    fetchPosts();
  };

  if (loading) {
    return <Loader retry={retry} error={error} />;
  }

  if (error) {
    return <Loader retry={retry} error={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onPress={() => navigation.navigate("Ver Post", { postId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  listContent: {
    padding: 10,
  },
});

export default HomeScreen;
