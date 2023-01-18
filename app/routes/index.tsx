import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.library.scotterickson.io");

export async function loader() {
    return json(await pb.collection("pets").getFullList());
}

export default function Index() {
    const pets = useLoaderData();
    return (
        <>
            <h1>Hello remix!</h1>
            <p>Here are some of my pets...</p>
            <ul>
                {pets.map(pet => (
                    <li key={pet.name}>{pet.name}</li>
                ))}
            </ul>
        </>
    );
}
