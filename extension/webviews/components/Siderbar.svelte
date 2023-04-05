<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "../types";
  import Todos from "./Todos.svelte";

  // Component logic here
  let accessToken = "";
  let loading = true;
  let user: User | null = null;
  let page: "todos" | "contact" = tsvscode.getState()?.page || "todos";

  $:{
    tsvscode.setState({ page });
  }

  onMount(async () => {
    window.addEventListener("message", async (event) => {
      const message = event.data;
      switch (message.type) {
        case "token":
          accessToken = message.value;
          const reponse = await fetch(`${apiBaseUrl}/me`, {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await reponse.json();
          user = data.user;
          loading = false;
      }
    });

    tsvscode.postMessage({ type: "get-token", value: undefined });
  });
</script>

{#if loading}
  <div>Loading...</div>
{:else if user}
  <!-- <pre>{JSON.stringify(user, null, 2)}</pre> -->
  {#if page === "todos"}
    <Todos {user} {accessToken} />
    <button
      on:click={() => {
        page = "contact";
      }}>Contact Me</button
    >
  {:else}
    <div>contact me here</div>
    <button
      on:click={() => {
        page = "todos";
      }}>Go Back</button
    >
  {/if}

  <!-- svelte-ignore missing-declaration -->
  <button
    on:click={() => {
      accessToken = "";
      user = null;
      tsvscode.postMessage({ type: "logout", value: undefined });
    }}
    >logout
  </button>
{:else}
  <!-- svelte-ignore missing-declaration -->
  <button
    on:click={() => {
      tsvscode.postMessage({ type: "authenticate", value: undefined });
    }}>login with Github</button
  >
{/if}
