import { error } from "@sveltejs/kit";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const dataDir = path.resolve("src/data/cvs");
  const filePath = path.join(dataDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    error(404, "CV not found");
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Split content into tabs based on ## headers
  const tabs: Record<string, string> = {};
  let currentTab = "Profil"; // Default tab if there's text before the first header
  tabs[currentTab] = "";

  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^##\s+(.*)/);
    if (match) {
      currentTab = match[1].trim();
      tabs[currentTab] = "";
    } else {
      tabs[currentTab] += line + "\n";
    }
  }

  // Remove default tab if it's empty
  if (!tabs["Profil"].trim()) {
    delete tabs["Profil"];
  }

  // Parse each tab's content with marked
  for (const key in tabs) {
    tabs[key] = await marked.parse(tabs[key]);
  }

  return {
    cv: {
      slug,
      name: data.name,
      role: data.role,
      email: data.email,
      avatar: data.avatar,
      id: data.id,
      tabs,
    },
  };
};
