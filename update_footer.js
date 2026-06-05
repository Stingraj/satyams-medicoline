const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Footer.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace footer background and text base
content = content.replace('bg-[#111111] text-white', 'bg-gray-50 text-gray-800');

// Replace white text headers with primary red
content = content.replace(/text-white text-base font-bold/g, 'text-[#C0392B] text-base font-bold');
content = content.replace(/text-white text-xs font-bold/g, 'text-[#C0392B] text-xs font-bold');

// Replace gray-300 and gray-400 with darker greys
content = content.replace(/text-gray-300/g, 'text-gray-600');
content = content.replace(/text-gray-400/g, 'text-gray-500');

// Replace border colors
content = content.replace(/border-gray-700\/50/g, 'border-gray-200');
content = content.replace(/border-\[rgba\(255,255,255,0.1\)\]/g, 'border-gray-200');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Footer updated');
