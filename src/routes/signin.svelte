<script>
   import Text from "$lib/components/form/input/text.svelte";
   import Password from "$lib/components/form/input/password.svelte";
   import Submit from "$lib/components/form/button/submit.svelte";
import { supabase } from "$lib/db";
   let email, password;

   async function handleSignIn() {
      const {error} = await supabase.auth.signIn({
         email,
         password
      })   
      if(error) alert(error.message);
   }
</script>

<div
   class="
      flex flex-col items-center
   "
>
   <form on:submit|preventDefault={handleSignIn}
         class="
            flex flex-col items-center justify-center
            md:w-3/12
            gap-3 mt-[15%]
         "
      >
         <h2
            class="
               font-semibold tracking-wide
               text-2xl
            "
         >Sign in to Bees</h2>
         <Text bind:value={email} placeholder="email" />
         <Password bind:value={password} placeholder="password" />
         <Submit text="Buzz!"/>
   </form>
   <p class="mt-3">
      Need an Account? 
      <a 
         class="
            text-yellow-500
         " 
      href="/signup"> Become a Bee </a>
   </p>
</div>