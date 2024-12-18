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
<div class="flex w-full sm:basis-1/4 flex-col p-4 mx-4 my-0 sm:my-4 sm:items-start sm:justify-start">
  <div class="hidden text-2xl sm:block"><p>Hi, I'm</p></div>
  <div class="text-wrap sm:text-nowrap text-2xl sm:text-4xl md:text-6xl"><b><a href="/">Farhan Sanukri!</a></b></div>


  <div class="sm:my-4 sm:space-y-4">
    <p class="hidden text-balance sm:block text-lg">
      I'm an undergrad at <b class="underline decoration-4 decoration-[#4B9CD3]">UNC Chapel Hill</b> pursuing a double major in <b>Mathematics</b> and <b>Computer Science.</b>
    </p>
  </div>

  <!-- Navbar List -->
  <ul class="flex flex-row gap-x-4 sm:my-4 sm:flex-col sm:space-y-1">
    {#each links as link}
      <li class="font-mono  text-xl hover:text-amber-200 hover:underline {$page.url.pathname === link.path ? `font-medium text-amber-200 underline decoration-2 font-semibold` : `font-medium`}">
        <a href="{link.path}">{link.name}/</a>
      </li>
    {/each}
  </ul>
</div>
