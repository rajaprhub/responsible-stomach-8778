import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    PinInputField,
    HStack,
    PinInput,
    Container
  } from "@chakra-ui/react";
  import React,{Component} from "react";


  
  export default function Login() {
      let { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();
      const [loginPage, setLoginPage] = React.useState(false);
    const [mobile, setMobile] = React.useState("");
  
    const handleInput = (e) => {
      setMobile(e.target.value);
  }
  
  
    const handleLogin = () => {
 
          
      };
    
      return  (<>

              <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
                  Login
              </Button>
              <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
              >
                  <DrawerOverlay />
                  <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Please Login to Continue</DrawerHeader>
  
                      <DrawerBody>
                       
                          <FormLabel> Enter Mobile Number </FormLabel>
                          <InputGroup>
                              <InputLeftAddon children="+91" />
                              <Input type="tel" placeholder=" Enter Mobile number" value={mobile}  onChange={handleInput}  />
                          </InputGroup>
                      </DrawerBody>
  
                      <DrawerFooter>
                          <Button variant="outline" mr={3} onClick={onClose}>
                              Cancel
                          </Button>
                          <Button colorScheme="blue" onClick={() => handleLogin}>
                            Get Otp
                          </Button>
                      </DrawerFooter>
                  </DrawerContent>
              </Drawer>
          </>
      )
  
      
  }
  