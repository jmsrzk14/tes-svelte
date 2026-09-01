<script lang="ts">
  import { currentRoute } from '../lib/stores/router';
  import { members } from '../lib/data/members';
  import type { Member } from '../lib/data/types';

  const tabs = ['about', 'experience', 'skills', 'projects'] as const;

  let member: Member | undefined = undefined;
  let activeTab: (typeof tabs)[number] = 'about';

  $: routeId = $currentRoute.params?.id;
  $: member = routeId ? members.find((m) => m.id === routeId) : undefined;
</script>

{#if member}
  <div class="page-shell">
    <div class="bg-gray-900 pb-32">
      <div class="container-custom pt-12">
        <div class="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-8">
          <div class="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
            {#if member.avatar}
              <img src={member.avatar} alt={member.name} class="w-full h-full object-cover" />
            {:else}
              <div class="w-full h-full flex items-center justify-center">
                <span class="text-5xl font-bold text-gray-300">
                  {member.name.charAt(0)}
                </span>
              </div>
            {/if}
          </div>
          <div class="text-center md:text-left pb-4">
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h1>
            <p class="text-xl text-gray-300">{member.title}</p>
            <p class="text-gray-400 mt-1">{member.location}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container-custom -mt-24 pb-16">
      <div class="surface-panel p-6 md:p-8">
        <!-- Contact Info -->
        <div class="flex flex-wrap gap-6 mb-8 pb-8 border-b">
          <a href={`mailto:${member.email}`} class="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{member.email}</span>
          </a>
          <a href={`tel:${member.phone}`} class="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{member.phone}</span>
          </a>
        </div>

        <!-- Tabs -->
        <div class="flex space-x-4 mb-8 border-b overflow-x-auto">
          {#each tabs as tab}
            <button
              class={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              on:click={() => activeTab = tab}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          {/each}
        </div>

        <!-- Tab Content -->
        {#if activeTab === 'about'}
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-semibold mb-4">About Me</h2>
              <p class="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>
            
            {#if member.education.length > 0}
              <div>
                <h2 class="text-2xl font-semibold mb-4">Education</h2>
                <div class="space-y-4">
                  {#each member.education as edu}
                    <div class="border-l-4 border-primary-500 pl-4">
                      <h3 class="font-semibold text-lg">{edu.degree} in {edu.field}</h3>
                      <p class="text-gray-600">{edu.institution}</p>
                      {#if edu.description}
                        <p class="text-gray-600 mt-2">{edu.description}</p>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {:else if activeTab === 'experience'}
          <div class="space-y-8">
            {#if member.experience.length > 0}
              {#each member.experience as exp}
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="font-semibold text-lg">{exp.position}</h3>
                  <p class="text-gray-600">{exp.company}</p>
                  <p class="text-sm text-gray-500 mb-2">{exp.startDate} - {exp.endDate}</p>
                  <p class="text-gray-700">{exp.description}</p>
                  {#if exp.achievements && exp.achievements.length > 0}
                    <ul class="mt-3 space-y-2">
                      {#each exp.achievements as achievement}
                        <li class="flex items-start">
                          <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span class="text-gray-700">{achievement}</span>
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              {/each}
            {:else}
              <p class="text-gray-500">Belum ada pengalaman kerja yang ditambahkan.</p>
            {/if}
          </div>
        {:else if activeTab === 'skills'}
          <div>
            <h2 class="text-2xl font-semibold mb-6">Skills</h2>
            {#if member.skills.length > 0}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each member.skills as skill}
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-2">
                      <span class="font-medium text-gray-900">{skill.name}</span>
                      <span class="text-sm text-gray-600">{skill.level}</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        class="bg-primary-600 h-2 rounded-full"
                        style={`width: ${
                          skill.level === 'Beginner' ? '25%' :
                          skill.level === 'Intermediate' ? '50%' :
                          skill.level === 'Advanced' ? '75%' : '100%'
                        }`}
                      ></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{skill.category}</p>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="text-gray-500">Belum ada skills yang ditambahkan.</p>
            {/if}
          </div>
        {:else if activeTab === 'projects'}
          <div>
            <h2 class="text-2xl font-semibold mb-6">Projects</h2>
            {#if member.projects.length > 0}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each member.projects as project}
                  <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 class="font-semibold text-lg mb-2">{project.name}</h3>
                    <p class="text-gray-600 mb-4">{project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      {#each project.technologies as tech}
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      {/each}
                    </div>
                    {#if project.link}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        View Project
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    {/if}
                  </div>
                {/each}
              </div>
            {:else}
              <p class="text-gray-500">Belum ada project yang ditambahkan.</p>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="container-custom py-20 text-center">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Member Not Found</h1>
    <p class="text-gray-600">Maaf, member yang Anda cari tidak ditemukan.</p>
  </div>
{/if}