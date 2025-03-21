import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Xstate } from "~/Xstate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <Xstate />
    </div>
  );
}
