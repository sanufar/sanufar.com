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
<div class="flex w-full sm:basis-1/4 flex-col px-8 py-4 sm:p-4 sm:mx-4 my-0 sm:my-4 sm:items-start sm:justify-start backdrop-blur-lg bg-[#304FA5]/70">
  <div class="hidden text-lg sm:block"><p>Hi, I'm</p></div>
  <div class="text-wrap font-bold sm:text-nowrap text-xl sm:text-2xl md:text-4xl"><a href="/">Farhan Sanukri</a></div>


  <div class="sm:my-2 sm:space-y-4">
    <p class="hidden text-balance sm:block text-[0.9735rem] font-light">
      I'm an undergrad at <b class="underline decoration-4 decoration-[#4B9CD3] font-bold">UNC Chapel Hill</b> pursuing a double major in <b class="font-semibold">Mathematics</b> and <b class="font-semibold">Computer Science.</b>
    </p>
  </div>

  <!-- Navbar List -->
  <ul class="flex align-middle flex-row gap-x-4 sm:my-2 sm:flex-col sm:space-y-1">
    {#each links as link}
      <li class="font-mono text-lg hover:text-amber-200 hover:underline {$page.url.pathname === link.path ? `font-semibold text-amber-200 underline decoration-2` : `font-light`}">
        <a href="{link.path}">{link.name}/</a>
      </li>
    {/each}
  </ul>
</div>
