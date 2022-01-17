import React from "react";
import styled from "styled-components";

function Messages() {
  return (
    <Wrapper>
      <ChatBoxes>
        <Button>on off</Button>
        <Plus>+</Plus>
        <SearchMessage type="text"></SearchMessage>
        <Person>
          <Image url="" />
          <Name>Elmer Laverty</Name>
          <MessageDemo>haha oh man</MessageDemo>
          <TimeOfMsg>12m</TimeOfMsg>
        </Person>
      </ChatBoxes>
      <SelectedMessage>
        <SMHeader>
          <SelectedImg url="" />
          <StatusIcon>blue</StatusIcon>
          <Status>Online</Status>
          <SearchText>lupa icon</SearchText>
        </SMHeader>
        <SMBody>
          <SendTextIcon>icon</SendTextIcon>
          <TextBox type="text" placeholder="Type a message"></TextBox>
          <FilesIcon></FilesIcon>
        </SMBody>
      </SelectedMessage>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const ChatBoxes = styled.div``;
const Button = styled.button``;
const Plus = styled.div``;
const SearchMessage = styled.input``;
const Person = styled.div``;
const Image = styled.img``;
const Name = styled.h3``;
const MessageDemo = styled.p``;
const TimeOfMsg = styled.h3``;
const SelectedMessage = styled.div``;
const SMHeader = styled.div``;
const SelectedImg = styled.img``;
const StatusIcon = styled.div``;
const Status = styled.p``;
const SearchText = styled.input``;

const SMBody = styled.div``;
const SendTextIcon = styled.div``;
const TextBox = styled.input``;
const FilesIcon = styled.div``;

export default Messages;
