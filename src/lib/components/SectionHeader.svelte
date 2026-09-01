<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let align: 'left' | 'center' = 'center';
</script>

<div class={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'}`}>
  {#if eyebrow}
    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">{eyebrow}</p>
  {/if}
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
  {#if description}
    <p class="text-lg text-gray-600 max-w-2xl mx-auto {align === 'left' ? 'mx-0' : ''}">{description}</p>
  {/if}
</div>
