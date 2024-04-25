"use client";

import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import FormButton from "../common/FormButton";

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), { errors: {} });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Post title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Post content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-200 rounded-lg text-slate-500">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
