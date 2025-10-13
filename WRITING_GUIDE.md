# Writing Guide for Your Blog

Complete guide to writing paper reviews and project pages with LaTeX support.

## 📝 Quick Start

### Adding a Paper Review

1. **Create file**: `src/content/papers/your-paper-name.mdx`
2. **Copy template**: Use `src/content/papers/TEMPLATE.mdx` as starting point
3. **Write content**: Add your review with LaTeX math
4. **Preview**: Visit `http://localhost:3000/papers/your-paper-name`

### Adding a Project

1. **Create file**: `src/content/projects/your-project-name.mdx`
2. **Copy template**: Use `src/content/projects/TEMPLATE.mdx`
3. **Write content**: Describe your project
4. **Preview**: Visit `http://localhost:3000/projects/your-project-name`

## 🎨 Frontmatter (Required!)

Every `.mdx` file needs frontmatter at the top:

### Paper Review Frontmatter

```yaml
---
title: "Paper Title - Your Analysis"
date: "2024-10-13"              # YYYY-MM-DD format
description: "Brief summary"     # Shows in cards
tags: ["ml", "nlp"]             # Optional
---
```

### Project Frontmatter

```yaml
---
title: "Project Name"
date: "2024-10-13"
description: "What your project does"
tags: ["pytorch", "cv"]
github: "https://github.com/you/repo"    # Optional
demo: "https://demo.com"                 # Optional
---
```

## 📐 LaTeX Math Support

Your site supports full LaTeX math rendering with KaTeX!

### Inline Math

Use single `$` for inline equations:

```markdown
The equation $E = mc^2$ is famous.
```

**Renders as**: The equation $E = mc^2$ is famous.

### Block Math

Use double `$$` for display equations:

```markdown
The softmax function is:

$$
\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}
$$
```

**Renders as**: Centered, large equation

### Common LaTeX Patterns

#### Fractions

```latex
$$
\frac{a}{b} = \frac{\text{numerator}}{\text{denominator}}
$$
```

#### Summations and Products

```latex
$$
\sum_{i=1}^{n} x_i \quad \prod_{j=1}^{m} y_j
$$
```

#### Integrals

```latex
$$
\int_0^1 f(x)dx = F(1) - F(0)
$$
```

#### Matrices

```latex
$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
$$
```

#### Greek Letters

```latex
$$
\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \sigma, \omega
$$
```

#### Mathematical Symbols

```latex
$$
\in, \notin, \subset, \subseteq, \cap, \cup, \emptyset, \infty, \forall, \exists
$$
```

#### Bold/Italic Math

```latex
$$
\mathbf{x} \quad \mathit{x} \quad \mathcal{L} \quad \mathbb{R}
$$
```

#### Aligned Equations

```latex
$$
\begin{align}
f(x) &= x^2 + 2x + 1 \\
     &= (x + 1)^2 \\
     &= (x + 1)(x + 1)
\end{align}
$$
```

#### Matrices and Systems

```latex
$$
\begin{cases}
x + y = 5 \\
x - y = 1
\end{cases}
$$
```

## 💻 Code Blocks

### Basic Code Block

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### Supported Languages

- **Python**: `python`
- **JavaScript/TypeScript**: `javascript`, `typescript`, `jsx`, `tsx`
- **Shell/Bash**: `bash`, `shell`
- **Other**: `c`, `cpp`, `java`, `rust`, `go`, `sql`, `yaml`, `json`

### Code with LaTeX Comments

You can mix code and math:

````markdown
```python
# The loss function: L(θ) = -log p(y|x; θ)
def compute_loss(predictions, targets):
    return -torch.log(predictions).mean()
```

The mathematical formulation is:

$$
\mathcal{L}(\theta) = -\frac{1}{N}\sum_{i=1}^{N} \log p(y_i | x_i; \theta)
$$
````

## 📊 Tables

### Simple Table

```markdown
| Method | Accuracy | Speed |
|--------|----------|-------|
| Baseline | 85% | 100ms |
| Ours | 92% | 80ms |
```

### With Math

```markdown
| Notation | Definition |
|----------|------------|
| $x \in \mathbb{R}^d$ | Input vector |
| $\theta$ | Parameters |
| $\mathcal{L}$ | Loss function |
```

## 🖼️ Images

### Basic Image

```markdown
![Alt text](/images/your-image.png)
```

### With Caption

```markdown
<figure>
  <img src="/images/architecture.png" alt="Model architecture" />
  <figcaption>Figure 1: Our proposed architecture</figcaption>
</figure>
```

**Where to put images**: `public/images/` directory

## 📋 Lists

### Unordered

```markdown
- First item
- Second item
  - Nested item
  - Another nested
- Third item
```

### Ordered

```markdown
1. Step one
2. Step two
3. Step three
```

### With Math

```markdown
1. Compute $\mu = \frac{1}{N}\sum x_i$
2. Calculate $\sigma^2 = \frac{1}{N}\sum (x_i - \mu)^2$
3. Normalize: $z_i = \frac{x_i - \mu}{\sigma}$
```

## 📝 Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
`inline code`
~~Strikethrough~~
```

## 🎯 Links

### Internal Links

```markdown
[View my CV](/cv)
[See other papers](/papers)
```

### External Links

```markdown
[Paper on arXiv](https://arxiv.org/abs/1234.5678)
[GitHub Repo](https://github.com/username/repo)
```

### Links in Math

You can't put links directly in LaTeX, but you can reference:

```markdown
As shown in Equation (1) from [Smith et al., 2020](link):

$$
y = mx + b \tag{1}
$$
```

## 🔢 Complex LaTeX Examples

### Machine Learning

```latex
$$
\nabla_\theta \mathcal{L} = \frac{1}{N} \sum_{i=1}^{N} \nabla_\theta \ell(f(x_i; \theta), y_i)
$$
```

### Probability

```latex
$$
P(A \cap B) = P(A|B) \cdot P(B) = P(B|A) \cdot P(A)
$$
```

### Expectation

```latex
$$
\mathbb{E}_{x \sim p(x)}[f(x)] = \int f(x) p(x) dx
$$
```

### Optimization

```latex
$$
\theta^* = \arg\min_{\theta} \mathcal{L}(\theta)
$$
```

### Information Theory

```latex
$$
H(X) = -\sum_{x} p(x) \log p(x)
$$
```

### Neural Networks

```latex
$$
h^{(l+1)} = \sigma(W^{(l)} h^{(l)} + b^{(l)})
$$
```

## 📖 Full Example: Paper Review

Here's a complete example:

```markdown
---
title: "Attention Is All You Need - Review"
date: "2024-10-13"
description: "Analysis of the Transformer architecture"
tags: ["transformers", "nlp", "attention"]
---

# Attention Is All You Need

**Authors**: Vaswani et al.  
**Venue**: NeurIPS 2017  
**arXiv**: [1706.03762](https://arxiv.org/abs/1706.03762)

## Core Contribution

The paper introduces the Transformer architecture based solely on attention:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

## Implementation

```python
def scaled_dot_product_attention(Q, K, V):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    attention = F.softmax(scores, dim=-1)
    return torch.matmul(attention, V)
```

## Results

| Model | BLEU | Params |
|-------|------|--------|
| Transformer | 28.4 | 65M |
| LSTM | 24.6 | 60M |

## Conclusion

The Transformer achieves SOTA results with $O(1)$ sequential operations.
```

## 🚀 Publishing Workflow

### 1. Write Your Content

```bash
# Create new paper review
touch src/content/papers/my-paper-review.mdx

# Or new project
touch src/content/projects/my-project.mdx
```

### 2. Preview Locally

```bash
npm run dev
# Visit http://localhost:3000
```

### 3. Commit and Push

```bash
git add src/content/papers/my-paper-review.mdx
git commit -m "Add paper review: Title"
git push origin main
```

### 4. Auto-Deploy

GitHub Actions automatically builds and deploys to GitHub Pages!

## 💡 Pro Tips

### 1. LaTeX Best Practices

✅ **Do**:
```latex
$$
\frac{a}{b}
$$
```

❌ **Don't**:
```latex
$$ \frac{a}{b} $$  # Don't put on same line
```

### 2. File Naming

✅ **Good**: `attention-mechanism-review.mdx`  
❌ **Bad**: `Attention Mechanism Review.mdx` (spaces)  
❌ **Bad**: `review1.mdx` (not descriptive)

### 3. Frontmatter Dates

✅ **Correct**: `date: "2024-10-13"`  
❌ **Wrong**: `date: "Oct 13, 2024"`  
❌ **Wrong**: `date: "13/10/2024"`

### 4. Tags

✅ **Good**: `["machine-learning", "nlp", "transformers"]`  
❌ **Bad**: `["Machine Learning", "NLP"]` (inconsistent case)

### 5. Large Equations

For readability, break long equations:

```latex
$$
\begin{aligned}
\mathcal{L}(\theta) &= \frac{1}{N} \sum_{i=1}^{N} \ell(y_i, \hat{y}_i) \\
&= \frac{1}{N} \sum_{i=1}^{N} -y_i \log(\hat{y}_i) - (1-y_i)\log(1-\hat{y}_i)
\end{aligned}
$$
```

## 🔍 Troubleshooting

### Math Not Rendering

**Problem**: Equation shows as `$E=mc^2$` instead of rendering

**Solutions**:
1. Check you're using `$$` for block math, `$` for inline
2. Make sure no spaces after opening `$`
3. Escape special characters: `\{`, `\}`

### Build Fails

**Problem**: `npm run build` fails

**Solutions**:
1. Check frontmatter is valid YAML
2. Ensure date is in correct format
3. Check all LaTeX is valid (use [KaTeX supported functions](https://katex.org/docs/supported.html))

### File Not Showing

**Problem**: New file doesn't appear on site

**Solutions**:
1. Check filename doesn't have spaces
2. Verify frontmatter has title, date, description
3. Restart dev server: `npm run dev`

## 📚 LaTeX Resources

- [KaTeX Supported Functions](https://katex.org/docs/supported.html)
- [LaTeX Math Symbols](http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf)
- [Detexify](http://detexify.kirelabs.org/classify.html) - Draw symbol to find LaTeX command
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX/Mathematics)

## 🎓 Example Papers to Review

Good candidates for paper reviews:
- Recent arXiv papers you've read
- Classic papers in your field
- Papers you've implemented
- Papers related to your research
- Papers with interesting methods

Good project ideas:
- Your research implementations
- Course projects
- Kaggle competitions
- Open source contributions
- Personal experiments

---

**Need help?** Check the templates in:
- `src/content/papers/TEMPLATE.mdx`
- `src/content/projects/TEMPLATE.mdx`

**Have questions?** The site supports full KaTeX syntax - almost any LaTeX math works!

