import fs from 'fs';
import path from 'path';

export async function loadSidebarModules() {
  const appDir = path.join(process.cwd(), 'src/app');
  const modules = {};

  // Get all direct subdirectories in the app folder
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  const dirs = entries.filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith('_') && entry.name !== 'api'
  );

  // Check each directory for a sidebar.tsx file
  for (const dir of dirs) {
    const sidebarPath = path.join(appDir, dir.name, 'sidebar.tsx');
    if (fs.existsSync(sidebarPath)) {
      // Register this sidebar
      modules[dir.name] = `/${dir.name}`;
    }
  }

  return modules;
}
