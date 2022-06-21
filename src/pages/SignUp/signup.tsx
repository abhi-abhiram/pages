import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { useNavigate} from 'react-router-dom';
  import { OAuthButtonGroup } from './authButton'
  import  PasswordInput  from './PasswordField'
  import {users} from '../../models'

  interface Props {
    heading: string
    name: string
    setName:  React.Dispatch<React.SetStateAction<string>>
    emailAddress: string
    setEmailAddress:  React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword:  React.Dispatch<React.SetStateAction<string>>
    users: users[]
    setUsers:React.Dispatch<React.SetStateAction<users[]>>
    handleAdd : ()=> void
    link?: string
  }
  
  export const SignUp = ({heading,link,name,handleAdd,setName,emailAddress,setEmailAddress,password,setPassword,users,setUsers}:Props) => {
    const navigate = useNavigate();
    const navigateSignin = () => {
      navigate('/user/signin');
    };

    return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}  >
              {heading}
            </Heading>
            
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl onSubmit={(e)=>{
                e.preventDefault()
               
              }}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input 
                id="name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                id="email"
                value={emailAddress}
                onChange={(e)=>setEmailAddress(e.target.value)} 
                type="email" />
              </FormControl>
              <PasswordInput password={password} setPassword={setPassword} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button 
              variant="primary"
              onClick={()=>{
                handleAdd()
              }}
              >Sign up</Button>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button variant="link" colorScheme="blue" onClick={navigateSignin} >
                Sign In
              </Button>
            </HStack>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
    }