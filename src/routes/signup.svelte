<script>
   import Text from "$lib/components/form/input/text.svelte";
   import Password from "$lib/components/form/input/password.svelte";
   import Submit from "$lib/components/form/button/submit.svelte";
import { supabase } from "$lib/db";
import { goto } from "$app/navigation";
import { session } from "$app/stores";
   let email, password, confirm;
   let match;

   $: {
      match = password === confirm; 
   }

   async function handleSignUp() {
      if(!match){
         alert("Passwords do not match")
         return
      }
      const {session: sesh, error} = await supabase.auth.signUp({
         email,
         password
      })   
      if(error) alert(error.message);
   }
</script>

<div
   class="
      flex flex-col items-center
      h-screen w-screen
   "
>
   <form on:submit|preventDefault={handleSignUp}
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
         >Become a Bee!</h2>
         <Text bind:value={email} placeholder="email" />
         <Password bind:value={password} placeholder="password"/>
         <Password bind:value={confirm} placeholder="confirm" />
         <Submit text="Get Your Wings"/>
   </form>
   <p class="mt-3">
      Already have an Account? 
      <a 
         class="
            text-yellow-500
         " 
      href="/"> Sign In Here </a>
   </p>
</div>