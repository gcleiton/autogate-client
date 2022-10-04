import React from 'react'
import { MessageListProps } from '../../types'
import { Message } from '../../feedback'

import * as S from './message-list.styles'

const MessageList: React.FC<MessageListProps> = ({ items, ...rest }) => {
  return (
    <Message {...rest}>
      <S.List>
        {items.map((item, index) => {
          return <S.Item key={index}>{item}</S.Item>
        })}
      </S.List>
    </Message>
  )
}

export default MessageList
