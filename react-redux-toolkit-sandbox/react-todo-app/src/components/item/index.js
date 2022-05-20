import React from 'react'
import { Container, Input, Label } from './styles/item'

export default function Item({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Item.Input= function ListInput({children, ...restProps}){
    return <Input {...restProps}/>
}
Item.Label= function ListLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}
