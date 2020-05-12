import React, { useState } from "react";

import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Validation and Authentication process here
    if (!email || !password) {
      setError("Please type your email and password");
    } else {
      setError("");
    }
    setLoading(false);
    if (!error) navigation.navigate("Browse");
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={styles.input}
            placeholder="example@example.com"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            secure
            label="Password"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <Text color="red" center>
            {error && error}
          </Text>
          <Button gradient onPress={handleLogin}>
            <Text bold white center>
              Login
            </Text>
          </Button>
          <Button
            style={{ backgroundColor: "transparent" }}
            onPress={() => navigation.navigate("Forgot")}
          >
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Forgot your password
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Login;
