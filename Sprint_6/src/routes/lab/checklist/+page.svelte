<script>
    import ChecklistItem from "$lib/checklistItem.svelte";

    function handleItemChange() {
        console.log("test");
    }

</script>


<h1 data-testid="title">Progress Checklist</h1>


<ChecklistItem
    id="1"
    label="Test"
    onToggle={handleItemChange}
/>
