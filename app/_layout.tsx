import { Stack } from 'expo-router';
import React, { useContext } from "react";
import 'react-native-reanimated';
import { UserContext, UserProvider } from "../contexts/UserContext";


export const unstable_settings = {
  anchor: '(tabs)',
};

function Navigator() {
  const userCtx = useContext(UserContext)

  if (!userCtx) return null;

  return (
    <Stack>
      {userCtx.user ? (

        <Stack.Screen name="Index" options={{ title: 'Index' }} />
      ) :
      (
          <Stack.Screen name="Auth" options={{ headerShown: false}} />
        )

      }
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>
  );
}
