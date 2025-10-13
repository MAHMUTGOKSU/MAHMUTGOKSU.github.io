# MAHMUTGOKSU.github.io

Personal blog and portfolio website built with Next.js, featuring CV, blog posts, and paper reviews.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with TypeScript and Tailwind CSS
- **MDX Support**: Write content in Markdown with embedded React components
- **LaTeX Rendering**: Full KaTeX support for mathematical equations
- **Syntax Highlighting**: Beautiful code blocks with Prism
- **Responsive Design**: Mobile-first, works on all devices
- **Static Export**: Deployed as static site on GitHub Pages
- **SEO Optimized**: Meta tags and structured data

## 📁 Project Structure

```
MAHMUTGOKSU.github.io/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── cv/                # CV page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog list
│   │   └── [slug]/        # Dynamic blog post
│   └── papers/            # Paper review pages
│       ├── page.tsx       # Papers list
│       └── [slug]/        # Dynamic paper review
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MDXComponents.tsx  # Custom MDX components
├── content/               # Content in MDX format
│   ├── blog/             # Blog posts
│   └── papers/           # Paper reviews
├── lib/                   # Utilities
│   └── mdx.ts            # MDX processing
├── public/               # Static assets
│   └── cv.pdf           # Downloadable CV
└── package.json         # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + JSX)
- **Math**: KaTeX
- **Syntax**: Prism
- **Deployment**: GitHub Pages

## 📝 Writing Content

### Blog Posts

Create a new file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-10-13"
description: "A brief description"
tags: ["tag1", "tag2"]
---

Your content here...

## Math Support
$$
E = mc^2
$$

## Code Support
\`\`\`python
print("Hello, World!")
\`\`\`
```

### Paper Reviews

Create a new file in `content/papers/`:

```mdx
---
title: "Paper Title Review"
date: "2024-10-13"
description: "Review summary"
tags: ["ml", "nlp"]
---

Your review here with math and code support...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build static site
npm run build

# Output will be in the 'out' directory
```

### Deployment to GitHub Pages

The site is configured for static export. To deploy:

1. Build the project: `npm run build`
2. Push to the `main` branch
3. Configure GitHub Pages to serve from the `out` directory
4. Or use GitHub Actions for automatic deployment

## 📚 Customization

### Update Personal Information

1. **Header/Footer**: Edit `components/Header.tsx` and `components/Footer.tsx`
2. **Homepage**: Edit `app/page.tsx`
3. **CV**: Edit `app/cv/page.tsx` or replace `public/cv.pdf`
4. **Metadata**: Update `app/layout.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styling: Use Tailwind classes

### Adding New Sections

1. Create new directory in `app/`
2. Add `page.tsx` for the route
3. Update navigation in `components/Header.tsx`

## 🎨 Features in Detail

### LaTeX Math

Inline: `$E = mc^2$`  
Block:
```
$$
\int_0^1 f(x)dx
$$
```

### Code Blocks

Supports syntax highlighting for many languages:

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

### MDX Components

You can use React components in your MDX:

```mdx
<CustomComponent prop="value" />
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mahmut Zahid Göksu**

- GitHub: [@MAHMUTGOKSU](https://github.com/MAHMUTGOKSU)
- LinkedIn: [mahmutzahidgoksu](https://linkedin.com/in/mahmutzahidgoksu)

## 🤝 Contributing

This is a personal website, but feel free to use it as a template for your own site!

---

Built with ❤️ using Next.js and TypeScript

