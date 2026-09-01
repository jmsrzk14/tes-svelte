<script lang="ts">
  import { members } from '../lib/data/members';
  import MemberGrid from '../lib/components/MemberGrid.svelte';
  import SectionHeader from '../lib/components/SectionHeader.svelte';
</script>

<div class="section-shell">
  <SectionHeader
    eyebrow="Members"
    title="Our Members"
    description="Jelajahi profil profesional dari anggota kami dalam satu layout yang konsisten."
    align="left"
  />
  <MemberGrid {members} />
</div>
