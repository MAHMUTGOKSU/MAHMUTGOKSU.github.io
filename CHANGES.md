# Recent Changes

## ✨ What's New

### 1. 📁 Reorganized to `src/` Directory Structure

**Why this is better:**
- ✅ **Cleaner root**: Config files stay at root, source code in `src/`
- ✅ **Industry standard**: Common practice in professional Next.js projects
- ✅ **Better organization**: Clear separation between code and configuration
- ✅ **Easier to navigate**: Less clutter in root directory

**New Structure:**
```
/
├── src/                    ← All source code here!
│   ├── app/               ← Pages and routes
│   ├── components/        ← React components
│   ├── content/           ← Your MDX content
│   └── lib/               ← Utilities
├── public/                ← Static files
├── package.json           ← Config files at root
├── tsconfig.json
└── ... other configs
```

**Before:**
```
/ (Root had 20+ files and folders mixed together)
├── app/
├── components/
├── content/
├── lib/
├── package.json
├── tsconfig.json
└── 15 other config files 😵
```

**After:**
```
/ (Clean root with configs only)
├── src/                   ← All code organized here
│   ├── app/
│   ├── components/
│   ├── content/
│   └── lib/
├── public/
└── Config files ✨
```

### 2. 🎨 New Color Scheme: Yellow & Blackish Purple

**Color Palette:**

**Yellow (Primary):**
- Light: `#fef9c3` 
- Main: `#facc15` ⭐ (Used for buttons, links, accents)
- Dark: `#eab308`

**Purple (Secondary):**
- Light: `#a78bfa`
- Main: `#7c3aed`
- Dark: `#5b21b6` ⭐ (Blackish purple for text)
- Almost Black: `#1a0b2e` ⭐ (Dark mode background)

**Where You'll See It:**
- 🎯 **Header**: Logo has gradient from yellow to purple
- 🔗 **Links**: Bright yellow (#facc15) that pops
- 🎨 **Buttons**: Yellow gradient backgrounds
- 📝 **Code**: Yellow keywords, purple functions
- 🌓 **Dark Mode**: Deep purple background (#1a0b2e)

### 3. 🎨 Updated Components

**Homepage:**
- ✨ Gradient title (yellow → purple)
- 🎨 Yellow buttons with hover effects
- 💜 Purple borders on cards
- 🌟 Yellow accents on hover

**Header:**
- 🎨 Gradient logo
- 💜 Purple text with yellow hover
- 🌑 Dark purple background in dark mode

**Footer:**
- 💜 Purple links
- ⭐ Yellow hover effects
- Clean borders

**MDX Content:**
- ⭐ Yellow inline code backgrounds
- 💜 Purple blockquote borders
- 🎨 Syntax highlighting matches theme

### 4. 📝 Technical Changes

**Import Paths Updated:**
```typescript
// Before
import { getAllPosts } from "@/lib/mdx";

// After
import { getAllPosts } from "@/src/lib/mdx";
```

**Content Directory:**
```typescript
// Before
const contentDirectory = path.join(process.cwd(), "content");

// After
const contentDirectory = path.join(process.cwd(), "src", "content");
```

**TypeScript Config:**
```json
// Updated to include src/ directory
"include": ["src/**/*.ts", "src/**/*.tsx"]
```

## 🚀 How This Affects You

### Writing Content (No Change!)
You still write content the exact same way:
1. Create `.mdx` files in `src/content/blog/` or `src/content/papers/`
2. Add frontmatter
3. Write your content
4. It appears automatically!

### File Locations
- **Your content**: `src/content/blog/` and `src/content/papers/`
- **Components**: `src/components/`
- **Pages**: `src/app/`
- **Config files**: Still at root (no change)

### Development
```bash
# Same commands as before
npm run dev      # Start dev server
npm run build    # Build for production
```

## 🎯 Benefits

1. **Cleaner codebase**: Professional project structure
2. **Better colors**: More vibrant and memorable
3. **Easier navigation**: Know exactly where to find things
4. **Future-proof**: Industry standard structure

## 🔄 Migration Notes

If you had any custom files, they've been moved:
- `app/` → `src/app/`
- `components/` → `src/components/`
- `content/` → `src/content/`
- `lib/` → `src/lib/`

All imports and paths have been updated automatically!

---

**Questions?** The site structure is now cleaner and the colors are more vibrant. Everything should just work! 🎉

