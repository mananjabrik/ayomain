import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

export interface CardProps {
  tittle: string;
  // img: string;
  color?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const router = useRouter();

  return (
    <Box width="100%" onClick={() => router.push("/place")}>
      <Box
        bgGradient={props.color}
        bg={props.color}
        p="1rem"
        color="white"
        textAlign="center"
        height="15rem"
        borderRadius="1rem"
      >
        <Text fontSize="xl">{props.tittle}</Text>
        <Box display="flex" justifyContent="center">
          <Box>
            <Image
              src="../images/bola/pemain2.png"
              objectFit="cover"
              position="relative"
              top="20px"
            />
          </Box>
          <Box position="absolute" mt="83" width="51px">
            <Image src="https://img.icons8.com/doodle/96/000000/football2--v1.png" />
          </Box>
          <Box>
            <Image
              src="../images/bola/pemain1.png"
              objectFit="cover"
              position="relative"
              top="30px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
Card.defaultProps = {
  color: "linear(to-r, #f95b5b, #d53f62)",
};
