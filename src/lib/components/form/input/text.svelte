<script>
   export let placeholder;
   export let value;
</script>

<input
   class="
      w-full
      text-lg font-thin
      px-3 py-1
      dark:text-white dark:bg-transparent 
      rounded-md border dark:border-white" 
   type="text"
   placeholder={placeholder} 
   bind:value={value}
>