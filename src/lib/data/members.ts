import daniel from '../../data/cvs/daniel.md?raw';
import james from '../../data/cvs/james.md?raw';
import robert from '../../data/cvs/robert.md?raw';
import bambang from '../../data/cvs/bambang.md?raw';
import maya from '../../data/cvs/maya.md?raw';
import type { Education, Experience, Member, Project, Skill } from './types';

const rawMemberFiles = [
  { id: 'daniel', content: daniel },
  { id: 'james', content: james },
  { id: 'robert', content: robert },
  { id: 'bambang', content: bambang },
  { id: 'maya', content: maya }
] as const;

function normalizeKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitBlocks(raw: string): string[] {
  return raw
    .split(/\n(?=-\s)/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function parseMetadata(content: string): Record<string, string> {
  const metadata: Record<string, string> = {};
  const firstSection = content.split(/\n##\s+/)[0] ?? content;
  const lines = firstSection
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const directMatch = line.match(/^([a-z][a-z0-9_-]*)\s*:\s*(.+)$/i);
    if (directMatch) {
      metadata[normalizeKey(directMatch[1])] = directMatch[2].trim();
      continue;
    }

    const weirdMatches = [...line.matchAll(/(id|name|title|role|email|phone|location|avatar|linkedin|github|website)\s*[: ]?(.*?)(?=(?:id|name|title|role|email|phone|location|avatar|linkedin|github|website)\b|$)/gi)];
    for (const match of weirdMatches) {
      const key = normalizeKey(match[1]);
      const value = match[2]?.trim();
      if (key && value) metadata[key] = value;
    }
  }

  return metadata;
}

function buildSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const parts = content.split(/^##\s+/m).slice(1);

  for (const part of parts) {
    const [rawHeading, ...rawBody] = part.split(/\n/);
    const heading = normalizeKey(rawHeading || '');
    if (!heading) continue;
    sections[heading] = rawBody.join('\n').trim();
  }

  return sections;
}

function parseEducation(raw: string): Education[] {
  if (!raw) return [];

  return splitBlocks(raw).map((block) => {
    const entry: Record<string, string> = {};
    const lines = block
      .replace(/^-\s*/, '')
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    let currentKey = '';

    for (const line of lines) {
      const keyValue = line.match(/^([A-Za-z\s]+)\s*:\s*(.+)$/);
      if (keyValue) {
        const key = keyValue[1].trim().toLowerCase();
        const value = keyValue[2].trim();
        entry[key] = value;
        currentKey = key;
        continue;
      }

      if (currentKey && !entry.description) {
        entry.description = line;
      }
    }

    const dates = entry.dates || '';
    const [startDate, ...endDateParts] = dates.split(' - ');

    return {
      institution: entry.institution || 'Unknown institution',
      degree: entry.degree || '',
      field: entry.field || '',
      startDate: startDate || '',
      endDate: endDateParts.join(' - ') || '',
      description: entry.description || ''
    } satisfies Education;
  });
}

function parseExperience(raw: string): Experience[] {
  if (!raw) return [];

  return splitBlocks(raw).map((block) => {
    const entry: Record<string, string | string[]> = { achievements: [] };
    const lines = block
      .replace(/^-\s*/, '')
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    let collectingAchievements = false;

    for (const line of lines) {
      if (line === 'achievements:') {
        collectingAchievements = true;
        continue;
      }

      if (collectingAchievements) {
        if (line.startsWith('-')) {
          const achievements = Array.isArray(entry.achievements) ? entry.achievements : [];
          achievements.push(line.replace(/^-\s*/, '').trim());
          entry.achievements = achievements;
        }
        continue;
      }

      const keyValue = line.match(/^([A-Za-z\s]+)\s*:\s*(.+)$/);
      if (keyValue) {
        const key = keyValue[1].trim().toLowerCase();
        const value = keyValue[2].trim();
        entry[key] = value;
        continue;
      }

      if (!entry.description) {
        entry.description = line;
      }
    }

    const dates = String(entry.dates || '');
    const [startDate, ...endDateParts] = dates.split(' - ');

    return {
      company: String(entry.company || 'Unknown company'),
      position: String(entry.position || 'Professional'),
      startDate: startDate || '',
      endDate: endDateParts.join(' - ') || '',
      description: String(entry.description || 'No description provided.'),
      achievements: Array.isArray(entry.achievements) ? entry.achievements.map(String) : []
    } satisfies Experience;
  });
}

function parseSkills(raw: string): Skill[] {
  if (!raw) return [];

  return splitBlocks(raw).map((block) => {
    const text = block.replace(/^-\s*/, '').trim();
    const name = text.replace(/\s*:\s*.*$/, '').trim();
    const category = text.includes(':') ? text.split(/\s*:\s*/)[1]?.trim() || 'General' : 'General';

    return {
      name: name || block,
      level: 'Advanced',
      category
    } satisfies Skill;
  });
}

function parseProjects(raw: string): Project[] {
  if (!raw) return [];

  return splitBlocks(raw).map((block) => {
    const entry: Record<string, string | string[]> = { technologies: [] };
    const lines = block
      .replace(/^-\s*/, '')
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    for (const line of lines) {
      const keyValue = line.match(/^([A-Za-z\s]+)\s*:\s*(.+)$/);
      if (keyValue) {
        const key = keyValue[1].trim().toLowerCase();
        const value = keyValue[2].trim();

        if (key === 'technologies') {
          entry[key] = value.split(',').map((item) => item.trim()).filter(Boolean);
          continue;
        }

        entry[key] = value;
        continue;
      }

      if (!entry.description) {
        entry.description = line;
      }
    }

    return {
      name: String(entry.name || 'Untitled project'),
      description: String(entry.description || 'No description provided.'),
      technologies: Array.isArray(entry.technologies) ? entry.technologies.map(String) : [],
      link: typeof entry.link === 'string' ? entry.link : undefined
    } satisfies Project;
  });
}

function parseMember(content: string): Member {
  const metadata = parseMetadata(content);
  const sections = buildSections(content);
  const name = metadata.name || metadata.title || 'Unknown member';
  const title = metadata.title || metadata.role || 'Professional';

  return {
    id: metadata.id || name.toLowerCase().replace(/\s+/g, '-'),
    name,
    title,
    email: metadata.email || '',
    phone: metadata.phone || '',
    location: metadata.location || 'Indonesia',
    avatar: metadata.avatar || '',
    bio: sections['profil singkat'] || sections['about'] || 'Member profile is ready to be updated.',
    education: parseEducation(sections['pendidikan'] || sections['education'] || ''),
    experience: parseExperience(sections['pengalaman proyek'] || sections['experience'] || sections['pengalaman kerja'] || ''),
    skills: parseSkills(sections['keahlian'] || sections['skills'] || ''),
    projects: parseProjects(sections['proyek'] || sections['projects'] || ''),
    socialLinks: {
      linkedin: metadata.linkedin || undefined,
      github: metadata.github || undefined,
      website: metadata.website || undefined
    }
  } satisfies Member;
}

export const members: Member[] = rawMemberFiles.map((member) => parseMember(member.content));

export function getMember(id: string): Member | undefined {
  return members.find((member) => member.id === id);
}
