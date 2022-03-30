<script>
  import { supabase } from "$lib/db";

  async function handleSignOut(){
    const { error } = await supabase.auth.signOut()
  } 
</script>

<button on:click={handleSignOut}>Log Out</button>