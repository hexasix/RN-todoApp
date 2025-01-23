// app/_layout.tsx
import { useEffect } from 'react'
import { Slot } from 'expo-router'
import { TamaguiProvider, Theme } from 'tamagui'
import config from '@/tamagui.config'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen
            name="addNewTask"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}
