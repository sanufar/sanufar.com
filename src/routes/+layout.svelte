<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte'
	let { children } = $props();
</script>


<div class="font-ibm flex min-h-screen overflow-auto flex-col sm:flex-row bg-[#304FA5] text-[#EFF2FA]">
	  <Sidebar />

	<div class="mx-4 p-4 sm:pt-16">
    <slot />
	</div>
</div>
