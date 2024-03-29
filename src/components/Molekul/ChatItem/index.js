import React from 'react'
import IsMe from "./IsMe"
import Other from './Other'

export default function ChatItem({isMe, text, time, photo}) {
    if (isMe) {
        return <IsMe text = {text} time = {time} />;
    };
    return <Other text = {text} time = {time} photo = {photo} />;
};
