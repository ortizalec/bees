<script>
   export let placeholder;
   export let value;
   export let disabled = false;
</script>

<input
   class="
      w-full
      text-lg font-thin
      px-3 py-1
      dark:text-white dark:bg-transparent
      rounded-md border dark:border-white" 
   type="password"
   placeholder={placeholder} 
   bind:value={value}
>