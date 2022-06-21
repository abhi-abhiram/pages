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
  setPassword :React.Dispatch<React.SetStateAction<string>>
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
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         name="password"
        type={show ? 'text' : 'password'}
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