import React, { useState } from "react";
import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Mentherapis() {
    const [Price, setPrice] = useState(0);
    
    const handleIt = () => {
        setPrice("");
    }

  const handleAdd = (price) => {
    let pr = "";
    for (let i = 0; i < price.length; i++) {
      if (
        price[i] == "1" ||
        price[i] === "2" ||
        price[i] === "3" ||
        price[i] === "4" ||
        price[i] === "5" ||
        price[i] === "6" ||
        price[i] === "7" ||
        price[i] === "8" ||
        price[i] === "9" ||
        price[i] === "0"
      ) {
        pr += price[i];
      }
    }

    setPrice(Price + +pr);
  };
  return (
    <Container maxW="full" p={9}>
      <Flex
        w="full"
        alignItems="center"
        gap="2"
        p={3}
        pt={0}
        pl="40px"
        pr="40px"
        justifyContent="space-between"
        textUnderlinePosition="under"
      >
        <Box>
          <Link to="/">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1648463875565-a4ce06.svg"
              w="100%"
            />
          </Link>
        </Box>
        <Spacer />
        <Show breakpoint="(min-width: 1000px)">
          <Flex gap="5">
            <Center>
              <Link>Blog</Link>
            </Center>
            <Center>
              <Link>Register As A Professional</Link>
            </Center>
          </Flex>
        </Show>

        <Box></Box>
      </Flex>
      {/* ************ */}
      <Divider />
      <Container maxW="full" p={4}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Heading>Massage for Men </Heading>
             <p>&#9733; 4.85 (156k) </p>
          </Box>
          <Box>
          <Image className="svideo"
                  rounded={"md"}
                  src="https://i.ytimg.com/vi/9N1KCVEIVEk/maxresdefault.jpg"
                  alt="logo"
                />
          </Box>
        </Grid>
        <Divider borderWidth="2px" />
      </Container>

      <Container
        maxW="full"
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
          top: "0",
        }}
        zIndex="5"
      >
        <Grid
          justifyContent="center"
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(10, 1fr)" }}
          bg="white"
          p={2}
          mt="20px"
          rounded="md"
        >
          <Link to="#bestsellerspackages" smooth>
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1626074601812-0d366b.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">BestSellers </Text>
            </Box>
          </Link>
          <Link to="#Make" smooth>
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1626257730052-f4d678.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px" noOfLines={2}>
               Stress Relief
              </Text>
            </Box>
          </Link>

          <Link to="#Facial" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1636451532779-fef9b5.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Pain Relief</Text>
            </Box>
          </Link>
          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1626072250910-fde2c1.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Back and Neck Pain</Text>
            </Box>
          </Link>

          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1626074601812-0d366b.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Relaxation</Text>
            </Box>
          </Link>

          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1626083271254-a78afd.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Sports</Text>
            </Box>
          </Link>

          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1627046567521-82da16.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Mini Massage</Text>
            </Box>
          </Link>
          
        </Grid>
        <Divider orientation="horizontal" />
      </Container>
      <Flex mt="20px">
    

        <Divider orientation="vertical" />

        <VStack w="full"> </VStack>
      </Flex>
      <Flex
        gap="50px"
        p={8}
        ml="65%"
        mt="40%"
        display={Price == 0 ? "none" : "flex"}
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "fixed",
          top: "0",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading>₹ {Price}</Heading>

     
      </Flex>
      {/* <Grid bg="black" color="white" p={6} templateColumns="repeat(4, 1fr)">
        <Box>
          <Image
            w="30%"
            src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          />
        </Box>
        <Box>
          <Text>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</Text>
        </Box>
      </Grid> */}
    </Container>
  );
}