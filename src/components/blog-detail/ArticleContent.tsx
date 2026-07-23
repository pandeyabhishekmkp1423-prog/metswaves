import type { ArticleBlock } from '../../data/articleContent';
import { ArticleCallout } from './ArticleCallout';
import { CodeBlock } from './CodeBlock';

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={block.id}
                id={block.id}
                className="mt-14 scroll-mt-28 text-2xl font-bold text-navy first:mt-0 sm:text-[26px]"
              >
                {block.text}
              </h2>
            );
          case 'paragraph':
            return (
              <p key={index} className="mt-6 text-[17px] leading-[1.85] text-text-primary/90 sm:text-lg">
                {block.text}
              </p>
            );
          case 'list':
            return block.ordered ? (
              <ol key={index} className="mt-6 grid list-decimal gap-3 pl-5 text-[17px] leading-[1.8] text-text-primary/90 marker:font-semibold marker:text-accent-blue sm:text-lg">
                {block.items.map((item) => (
                  <li key={item} className="pl-1.5">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="mt-6 grid list-disc gap-3 pl-5 text-[17px] leading-[1.8] text-text-primary/90 marker:text-accent-blue sm:text-lg">
                {block.items.map((item) => (
                  <li key={item} className="pl-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <blockquote key={index} className="my-8 border-l-4 border-accent-blue/30 pl-6">
                <p className="text-xl font-medium leading-snug text-navy">&ldquo;{block.text}&rdquo;</p>
                {block.attribution ? <cite className="mt-3 block text-sm not-italic text-text-secondary">— {block.attribution}</cite> : null}
              </blockquote>
            );
          case 'callout':
            return <ArticleCallout key={index} block={block} />;
          case 'code':
            return <CodeBlock key={index} language={block.language} code={block.code} filename={block.filename} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
