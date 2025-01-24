import { Text, YStack } from "tamagui";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";

type SectionTitleProps = {
  title: string;
  children: ReactNode;
  flex?: number;
};

export default function SectionTitle({ title,flex, children }: SectionTitleProps) {
  const styles = createStyles();
  return (
    <YStack flex={0}>
      <Text color="grey" fontSize={14} style={styles.sectionTitle}   >
        {title}
      </Text>
      {children}
    </YStack>
  );
} 
function createStyles() {
  return StyleSheet.create({
    sectionTitle: {
      marginBottom:15,
    },
  });
}