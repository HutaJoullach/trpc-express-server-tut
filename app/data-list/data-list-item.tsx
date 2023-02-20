import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "../../server/routers"

import Link from "next/link";
import React from "react";
import { Item } from "../../typings";

// const fetchItems = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const items: Item[] | undefined = await res.json();
//     return items;
//   } catch (err) {
//     console.log(err);
//   }
// };

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
})

const DataListItem = async () => {
  // const items = await fetchItems();
  const newUser = await client.users.create.mutate({ name: "John", age: 12 })
  console.log(newUser)

  const newUserGot = await client.users.byId.query(newUser.id)
  console.log(newUserGot)

  return (
    // <>
    //   {items?.map((item) => (
    //     <p key={item.id}>
    //       <Link href={`/items/${item.id}`}>Item: {item.id}</Link>
    //     </p>
    //   ))}
    // </>
  );
};

export default DataListItem;
