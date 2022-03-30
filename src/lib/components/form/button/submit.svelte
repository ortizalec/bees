<script>
	import { createEventDispatcher } from 'svelte';
   export let text;

   const dispatch = createEventDispatcher();

   function submit() {
		dispatch('submit');
	}
</script>


<button
   class="
      px-5 py-1
    bg-yellow-500 
    text-white
      rounded-md
   "
   type="submit"
   on:click={submit}
>
{text}
</button>