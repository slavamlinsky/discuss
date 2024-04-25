"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import * as actions from "@/actions";

const SearchInput = () => {
  const searchTerm = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name="term" placeholder="Search for a topic or post ..." defaultValue={searchTerm.get("term") || ""} />
    </form>
  );
};

export default SearchInput;
