import React, { ChangeEvent, useState } from "react";
import { Textbox } from "@/styles/Textbox";
import { CommonButton } from "@/styles/CommonButton";
import styled from "styled-components";
const PostReply: React.FC<{
  setReplying: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setReplying }) => {
  const [replyContent, setReplyContent] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (replyContent.length) {
      setReplying(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <ReplyForm onSubmit={onSubmit}>
      <InputWrapper>
        {" "}
        <Textbox
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setReplyContent(e.target.value)
          }
          placeholder="Type your reply here"
          value={replyContent}
          isError={isError}
        />
        {isError && <ErrorMessage>Reply can't be empty</ErrorMessage>}
      </InputWrapper>

      <SubmitBtn type="submit">Post Reply</SubmitBtn>
    </ReplyForm>
  );
};
const ReplyForm = styled.form`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
  gap: 16px;
  @media (max-width: 767.68px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
export const SubmitBtn = styled(CommonButton)`
  background: var(--button-color);
  &:hover {
    background: #c75af6;
  }
`;
export const ErrorMessage = styled.span`
  color: var(--error-color);
  @media (max-width: 767.68px) {
    font-size: var(--body3-size);
    line-height: var(--body3-line);
  }
`;
export default PostReply;
