import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Stack, Heading } from "@chakra-ui/react";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Stack
      boxShadow="lg"
      width="100%"
      py="15px"
      borderBottom="2px"
      borderColor="gray.200"
      textAlign="center"
      position="sticky"
      top={visible ? "0" : "-80px"}
      left="0"
      right="0"
      margin="auto"
      zIndex="1"
      background="white"
      transition="ease-out 0.3s"
      px={4}
      align="center"
      justify="center"
    >
      <Box w="180px">
        <Link href="/">
          <a aria-label="lapak temen">
            <Heading>Ayomain</Heading>
          </a>
        </Link>
      </Box>
    </Stack>
  );
};
