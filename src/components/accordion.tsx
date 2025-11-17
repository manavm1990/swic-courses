interface AccordionProps {
  question: string;
  children: React.ReactNode;
}

export function Accordion({ question, children }: AccordionProps) {
  return (
    <details className="mb-4 rounded-lg border border-gray-300 dark:border-gray-700">
      <summary className="cursor-pointer bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {question}
        </span>
      </summary>
      <div className="px-4 py-3 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </details>
  );
}
