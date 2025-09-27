'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: string
  copyable?: boolean
  language?: string
  className?: string
}

export function CodeBlock({ 
  children, 
  copyable = false, 
  language = 'javascript',
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  
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
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
      {copyable && (
        <button 
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded transition-all duration-200 opacity-0 group-hover:opacity-100"
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