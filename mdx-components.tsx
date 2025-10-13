import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getComponents } from './components/MDXComponents'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getComponents(components)
}

