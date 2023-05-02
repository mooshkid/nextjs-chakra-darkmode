import { Box, Button, ButtonGroup, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import styles from "@/styles/Button.module.css";

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blue", "red.200");
  const color = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("olive", "gray");

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={4}
        bg={bg}
        color={color}
        borderWidth="10px"
        borderRadius="lg"
        borderColor={borderColor}
      >
        This box's style will change based on the color mode.
      </Box>
      <ButtonGroup display="flex" justifyContent="center">
        <Button bg={bg} color={color} onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </ButtonGroup>
      <div className={styles.theme_button}>testing the button.module.css</div>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </>
  );
}

import React from "react";
