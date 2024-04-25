"use client";

import { Input, Button, Textarea, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "../common/FormButton";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        {/* <form action={actions.createTopic}> */}
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-200 rounded-lg text-slate-500">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}
            <FormButton>Add Topic</FormButton>
            {/* <Button type="submit"></Button> */}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
