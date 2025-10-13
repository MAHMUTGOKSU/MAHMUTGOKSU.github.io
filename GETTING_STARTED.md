# Getting Started Guide

Congratulations! Your professional blog is now set up. Here's everything you need to know.

## 🎉 What's Been Created

Your blog now has:

✅ **Homepage** - Professional landing page with recent posts  
✅ **Blog Section** - For your thoughts on events  
✅ **Paper Reviews** - For in-depth paper analyses  
✅ **CV Page** - Professional CV display  
✅ **LaTeX Support** - Full math equation rendering  
✅ **Code Highlighting** - Beautiful syntax highlighting  
✅ **Responsive Design** - Works on all devices  
✅ **Example Content** - 2 blog posts + 2 paper reviews to get you started  

## 🚀 Quick Start

### 1. View Your Site Locally

The development server is already running! Open your browser to:

```
http://localhost:3000
```

You should see your homepage with example content.

### 2. Write Your First Post

**For a blog post:**

1. Create a new file: `content/blog/my-first-post.mdx`
2. Add frontmatter and content:

```mdx
---
title: "My First Post"
date: "2024-10-13"
description: "What this post is about"
tags: ["tag1", "tag2"]
---

# My First Post

Write your content here...

## Add Math
$$
\sum_{i=1}^{n} x_i = \text{sum of all } x
$$

## Add Code
\`\`\`python
def hello():
    print("Hello from my blog!")
\`\`\`
```

3. Save the file - it will appear automatically!

**For a paper review:**

Same process, but create the file in `content/papers/`

## 📝 Content Guidelines

### Frontmatter (Required)

Every MDX file needs this at the top:

```yaml
---
title: "Your Title"           # Required
date: "2024-10-13"            # Required (YYYY-MM-DD format)
description: "Brief summary"   # Required (shows in lists)
tags: ["tag1", "tag2"]        # Optional
---
```

### Writing Math

**Inline math:** Use single dollar signs  
`The equation $E = mc^2$ is famous.`

**Block math:** Use double dollar signs
```
$$
\int_0^1 f(x)dx = F(1) - F(0)
$$
```

### Writing Code

Use triple backticks with language:

\`\`\`python
import numpy as np
print("Hello!")
\`\`\`

Supported languages: python, javascript, typescript, bash, java, c, cpp, rust, go, and more!

## 🎨 Customization

### Update Your Info

1. **Personal details:** Edit `components/Footer.tsx`
   - Update your GitHub, LinkedIn links
   - Change email address

2. **Homepage:** Edit `app/page.tsx`
   - Update your name, bio, description

3. **CV:** Edit `app/cv/page.tsx`
   - Replace with your actual experience
   - Or upload a PDF to `public/cv.pdf`

### Change Styling

- **Colors:** Edit `tailwind.config.ts`
- **Global styles:** Edit `app/globals.css`
- **Layout:** Edit `app/layout.tsx`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## 📦 Deployment

### GitHub Pages (Recommended)

Your project is already configured! Just:

1. Go to GitHub repository settings
2. Navigate to Pages
3. Set source to "GitHub Actions"
4. Push to `main` branch - automatic deployment!

The `.github/workflows/deploy.yml` file handles everything.

### Manual Deployment

```bash
# Build the static site
npm run build

# The output is in 'out/' directory
# Upload this to any static hosting service
```

## 📂 Directory Structure Quick Reference

```
├── app/
│   ├── page.tsx              → Homepage
│   ├── layout.tsx            → Main layout (header/footer)
│   ├── globals.css           → Global styles
│   ├── blog/
│   │   ├── page.tsx          → Blog list page
│   │   └── [slug]/page.tsx   → Individual blog post
│   ├── papers/
│   │   ├── page.tsx          → Papers list page
│   │   └── [slug]/page.tsx   → Individual paper review
│   └── cv/page.tsx           → Your CV
│
├── content/
│   ├── blog/                 → Write blog posts here (.mdx)
│   └── papers/               → Write paper reviews here (.mdx)
│
├── components/
│   ├── Header.tsx            → Top navigation
│   ├── Footer.tsx            → Footer with links
│   └── MDXComponents.tsx     → Custom MDX styling
│
├── lib/
│   └── mdx.ts                → MDX processing utilities
│
└── public/
    └── cv.pdf                → Downloadable CV PDF
```

## 🎯 Next Steps

1. **Delete example content** (or keep as reference):
   - `content/blog/welcome.mdx`
   - `content/blog/thoughts-on-ai-safety.mdx`
   - `content/papers/attention-is-all-you-need.mdx`
   - `content/papers/diffusion-models.mdx`

2. **Update your CV:**
   - Edit `app/cv/page.tsx` with your actual experience
   - Or create a PDF and save as `public/cv.pdf`

3. **Customize styling:**
   - Update colors in `tailwind.config.ts`
   - Modify `app/globals.css` for custom styles

4. **Write your first post!**
   - Create a new `.mdx` file in `content/blog/`
   - Share your thoughts on a recent event or paper

5. **Deploy to GitHub Pages:**
   - Push your changes to GitHub
   - Enable GitHub Pages in repository settings

## 💡 Tips

- **Hot reload:** The dev server automatically refreshes when you save files
- **Math preview:** Write math in your editor, it renders in the browser
- **Images:** Put images in `public/images/` and reference as `/images/filename.png`
- **Internal links:** Use Next.js `Link` component for navigation between pages
- **Markdown preview:** Use any Markdown editor to preview before publishing

## 🐛 Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check that all `.mdx` files have valid frontmatter

**Math not rendering:**
- Ensure you're using `$$` for block math and `$` for inline
- Check that there are no spaces after `$`

**Code not highlighting:**
- Make sure you specify the language: \`\`\`python

**Content not showing:**
- Check the date format: must be "YYYY-MM-DD"
- Verify frontmatter has title, date, and description

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [KaTeX Supported Functions](https://katex.org/docs/supported.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prism Language Support](https://prismjs.com/#supported-languages)

## 🎓 Learning Resources

If you're new to web development:

1. **React Basics:** [react.dev](https://react.dev)
2. **TypeScript:** [typescriptlang.org](https://typescriptlang.org)
3. **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

The good news: You can write 90% content in Markdown without touching code!

---

**Need help?** Check the README.md or reach out!

Happy writing! 🚀

