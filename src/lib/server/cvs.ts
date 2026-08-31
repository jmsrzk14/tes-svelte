import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Helper function to read all CVs
export function getCVs() {
    const dataDir = path.resolve('src/data/cvs');
    const files = fs.readdirSync(dataDir);
    
    return files.map((filename: string) => {
        const filePath = path.join(dataDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
            slug: filename.replace('.md', ''),
            name: data.name,
            role: data.role,
            email: data.email,
            avatar: data.avatar,
            id: data.id
        };
    });
}
