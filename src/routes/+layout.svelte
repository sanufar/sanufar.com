<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte'
	let { children } = $props();
</script>


<div class="flex min-h-screen  flex-col sm:flex-row bg-[#304FA5] text-[#EFF2FA]">
	<div class=" sticky top-0">
	  <Sidebar />
	</div>

	<div class="font-extralight overflow-auto mx-4 p-4 sm:pt-16">
    <slot />
	</div>
</div>
