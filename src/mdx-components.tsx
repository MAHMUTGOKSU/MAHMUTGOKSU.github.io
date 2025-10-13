import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getComponents } from '@/src/components/MDXComponents'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getComponents(components)
}

