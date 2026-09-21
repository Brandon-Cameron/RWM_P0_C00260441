<script>
    export let id; // callback prop, not a dispatched event
    export let label;
    export let done = false;
    export let onToggle;

    function handleChange() {
         onToggle?.({ id, done });
         console.log("compo test");
    }
    
</script>


<label>
 <input
   type="checkbox"
   bind:checked={done}
   on:change={handleChange}
   data-testid="checkbox-{id}"
 />
 {label}
</label>
