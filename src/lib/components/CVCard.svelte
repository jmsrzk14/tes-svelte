<script lang="ts">
  import type { Member } from '../data/types';
  import { navigate } from '../stores/router';
  
  export let member: Member;
  
  function handleClick() {
    navigate(`/members/${member.id}`);
  }
</script>

<a href={`/members/${member.id}`} on:click={(e) => { e.preventDefault(); handleClick(); }} class="block group cursor-pointer">
  <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
    <div class="p-6">
      <div class="flex items-center space-x-4 mb-4">
        <div class="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          {#if member.avatar}
            <img src={member.avatar} alt={member.name} class="w-full h-full object-cover" />
          {:else}
            <div class="w-full h-full flex items-center justify-center">
              <span class="text-2xl font-bold text-gray-400">
                {member.name.charAt(0)}
              </span>
            </div>
          {/if}
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {member.name}
          </h3>
          <p class="text-sm text-gray-600">{member.title}</p>
          <p class="text-xs text-gray-500 mt-1">{member.location}</p>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 line-clamp-3 mb-4">
        {member.bio}
      </p>
      
      <div class="flex flex-wrap gap-2">
        {#each member.skills.slice(0, 3) as skill}
          <span class="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
            {skill.name}
          </span>
        {/each}
        {#if member.skills.length > 3}
          <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            +{member.skills.length - 3} more
          </span>
        {/if}
      </div>
    </div>
  </div>
</a>