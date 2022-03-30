<script>
  import "../app.css";
  import { supabase } from "$lib/db";
  import { user } from "$lib/components/stores/user";
  import Signout from "./signout.svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";
  import { session } from "$app/stores";

  if(browser){
    $session = supabase.auth.session()
    $user = supabase.auth.user()
    setTimeout(() => $session ? goto("/") : goto("/signin"))
    supabase.auth.onAuthStateChange((event, sesh) => {  
      $session = sesh
      if($session){
        $user = sesh.user;
      }
      setTimeout(() => $session ? goto("/") : goto("/signin"))
    })
  }

</script>

<header>
  <h1
    class="
      dark:bg-header-gray bg-light-header
      text-white
      flex justify-end
      pt-2 pl-3 pb-2
      text-2xl
    "
  >
    <span class="mr-auto">Bees</span>
    <div
      class="pr-3" 
    >
    {#if $session}
      <Signout />
    {/if}
    </div>
  </h1>
</header>

<slot />
