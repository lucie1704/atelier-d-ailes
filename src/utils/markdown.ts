import { marked, Renderer } from 'marked';

const renderer = new Renderer();

renderer.link = ({ href, text }) => {
  const isExternal = href?.startsWith('http');
  const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${href}" ${targetAttr} class="text-primary font-semibold hover:underline">${text}</a>`;
};

export const renderMarkdown = (content: string | null | undefined): string =>
  marked.parse(content ?? '', { async: false, renderer });
