import React from 'react';
import ChatMessage from './ChatMessage'

export default function LiveChatContainer({videoId}) {
  return (
    <div><ChatMessage videoId={videoId}/></div>
  )
}
