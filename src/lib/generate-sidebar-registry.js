import fs from 'fs';
import path from 'path';
import { loadSidebarModules } from '../utils/sidebar-loader.js';

async function generateSidebarRegistry() {
  const modules = await loadSidebarModules();

  const content = `// Auto-generated file - DO NOT EDIT
export const SIDEBAR_REGISTRY = ${JSON.stringify(modules, null, 2)};
`;

  const outputPath = path.join(process.cwd(), 'src/lib/sidebar-registry.js');
  fs.writeFileSync(outputPath, content);
  console.log('Generated sidebar registry at:', outputPath);
}

// Run this during build
generateSidebarRegistry();
