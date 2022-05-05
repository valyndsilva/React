import React from 'react'
import { Button, Container, Input, Label } from './styles/add'

export default function Add({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Add.Label = function AddLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
  }

Add.Input = function AddInput({children, ...restProps}) {
    return <Input {...restProps}/>
  }

  Add.Button = function AddButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
  }