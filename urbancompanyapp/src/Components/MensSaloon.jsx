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

export default function MenSaloon() {
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
            <Heading> Salon for Men </Heading>
          </Box>
          <Box>
          <Image className="svideo"
                  rounded={"md"}
                  src="https://blog.urbancompany.com/wp-content/uploads/2020/02/MG_Haircut_3x-512x281.png"
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
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1646814042922-25f8f1.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px"> Packages</Text>
            </Box>
          </Link>
          <Link to="#Make" smooth>
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189933595-01692d.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px" noOfLines={2}>
                Hair Cut
              </Text>
            </Box>
          </Link>

          <Link to="#Facial" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189857376-d49e47.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Facial & Cleanup</Text>
            </Box>
          </Link>

          
          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189857376-d49e47.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Detan & Facials </Text>
            </Box>
          </Link>

          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1631189957304-ea2a7b.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Shave /Beard Groomimg </Text>
            </Box>
          </Link>

          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1634131290225-3f0d71.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Manicure</Text>
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