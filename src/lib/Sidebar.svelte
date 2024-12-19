<!-- Sidebar.svelte -->
<script lang="ts">
  import { page } from '$app/stores'; // Import the page store

  const links = [
    { name: "~", path: "/" },
    { name: "about", path: "/about" },
    { name: "now", path: "/now" },
    { name: "til", path: "/til" },
    //{ name: "contact", path: "/contact" }
  ];
</script>

<!-- Sidebar -->
<div class="flex-initial h-full w-full sm:w-64 flex-col px-8 py-4 sm:p-4 sm:mx-4 my-0 sm:my-4 sm:items-start sm:justify-start backdrop-blur-lg bg-[#304FA5]/70">
<div>	
  <div class="hidden text-lg sm:block"><p>Hi, I'm</p></div>
  <div class="text-wrap w-fit font-bold sm:text-nowrap text-xl sm:text-3xl md:text-4xl group"><a href="/">Farhan Sanukri</a> 

		<img src="/headshot.png" class="hidden my-4 sm:group-hover:block rounded-full w-28 aspect-square">

		<p class="hidden sm:block -mt-3 group-hover:hidden text-end text-[0.6875rem]">*hover me!</p>
	</div>


  <div class="sm:mb-2 -mt-2 sm:space-y-4">
    <p class="hidden text-balance sm:block text-[0.9735rem] font-light">
      I'm an undergrad at <b class="underline decoration-4 decoration-[#4B9CD3] font-bold">UNC Chapel Hill</b> pursuing a double major in <b class="font-semibold">Mathematics</b> and <b class="font-semibold">Computer Science.</b>
    </p>
  </div>

	<div class="sm:flex-row my-4 hidden sm:flex">
  <a href="mailto:farsan@unc.edu" target="_blank" rel="noopener noreferrer" aria-label="Email (opens in a new tab)" class="hover:bg-zinc-800/80 py-1 px-2 rounded-md bg-sky-200/30 font-semibold text-xs mr-2">EMAIL</a>


  <a href="https://github.com/sanufar" target="_blank" rel="noopener noreferrer" aria-label="Github (opens in a new tab)" class="hover:bg-black/80 py-1 px-2 rounded-md bg-sky-200/30 font-semibold text-xs mr-2">GITHUB</a>

  <button class="hover:bg-white hover:text-black py-1 px-2 rounded-md bg-sky-200/30 font-semibold text-xs mr-2">RESUME ↓</button>
			</div>

</div>

  <!-- Navbar List -->
  <ul class="flex align-middle flex-row gap-x-4 sm:mt-20 sm:flex-col sm:space-y-1">
    {#each links as link}
      <li class="font-mono text-lg {$page.url.pathname === link.path ? `font-semibold text-amber-200 underline decoration-2` : `font-light`}">
        <a href="{link.path}" class=" {$page.url.pathname === link.path ? `` : `hover:text-amber-200 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-amber-200 before:absolute before:left-0 before:bottom-0`}">{link.name}/</a>
      </li>
    {/each}
  </ul>




</div>
