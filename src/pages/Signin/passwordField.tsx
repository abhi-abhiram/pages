import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'

  interface props {
    password?:string
    setPassword?:any
  }
  
  function PasswordInput({password,setPassword}:props) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup size='md'>
        <Input
           id="password"
           autoComplete="current-password"
           name="password"
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement >
        <IconButton
              variant="link"
              aria-label={show ? 'Mask password' : 'Reveal password'}
              icon={show ? <HiEyeOff /> : <HiEye />}
              onClick={handleClick}
            />
        </InputRightElement>
      </InputGroup>
      </FormControl>
    )
  }
  
  export default PasswordInput