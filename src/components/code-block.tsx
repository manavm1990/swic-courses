'use client'

import { useState, useEffect } from 'react'
import { createHighlighter, type Highlighter } from 'shiki'
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets'
import theme from '../app/syntax-theme.json'

interface CodeBlockProps {
  children: string
  copyable?: boolean
  language?: string
  className?: string
}

// Reuse the same highlighter setup as mdx-components.tsx
let highlighterPromise: Promise<Highlighter> | null = null;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: ['javascript', 'css', 'html', 'bash', 'json', 'markdown'],
      themes: [theme],
    });
  }
  return highlighterPromise;
}

export function CodeBlock({ 
  children, 
  copyable = false, 
  language = 'javascript',
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')
  
  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await getHighlighter()
        const html = highlighter.codeToHtml(children, {
          lang: language,
          theme: theme.name,
          transformers: [
            transformerColorizedBrackets({
              themes: {
                "Tailwind CSS": [
                  "var(--color-purple-200)",
                  "var(--color-cyan-300)",
                  "var(--color-blue-300)",
                  "var(--color-emerald-300)",
                  "var(--color-pink-300)",
                  "var(--color-amber-200)",
                ],
              },
            }),
          ],
        })
        setHighlightedCode(html)
      } catch (err) {
        console.error('Failed to highlight code:', err)
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${children}</code></pre>`)
      }
    }
    
    highlightCode()
  }, [children, language])
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  
  return (
    <div className={`relative group ${className}`}>
      <div 
        className="max-w-full overflow-x-auto rounded-lg bg-gray-100 p-3 sm:p-4 dark:bg-gray-800"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
      {copyable && (
        <button 
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
          title={copied ? "Copied!" : "Copy to clipboard"}
          aria-label={copied ? "Code copied" : "Copy code to clipboard"}
        >
          {copied ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

// Export a convenient wrapper for common use cases
export function CopyableCode({ children, language = 'javascript' }: { children: string, language?: string }) {
  return <CodeBlock copyable={true} language={language}>{children}</CodeBlock>
}