import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './ContactElements'

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">home</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Contact
