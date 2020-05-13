import React, { useState } from "react";

import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Button, Block, Text } from "../components";
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
    <KeyboardAvoidingView style={style.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot
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
});

export default Forgot;
