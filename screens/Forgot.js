import React, { useState } from "react";

import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = () => {
    Keyboard.dismiss();
    if (!email.length) {
      setError("Please type a valid email.");
      return;
    } else {
      setLoading(true);
      setError("");
      setTimeout(() => {
        setLoading(false);
        setSuccess("Good job, please check your email.");
      }, 1500);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[ theme.sizes.base, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot Password
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={styles.input}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text color="red" center>
            {error && error}
          </Text>
          <Text color="green" center>
            {success && success}
          </Text>
          <Button gradient onPress={handleForgot}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Recover Password
              </Text>
            )}
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default Forgot;
