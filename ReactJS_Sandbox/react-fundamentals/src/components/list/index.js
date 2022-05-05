import React from 'react'
import { Container, Input, Item, Label } from './styles/list'

export default function List({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
  
}

List.Item= function ListItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

List.Input= function ListInput({children, ...restProps}){
    return <Input {...restProps}/>
}
List.Label= function ListLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}