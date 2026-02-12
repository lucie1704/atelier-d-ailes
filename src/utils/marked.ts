import { marked, Renderer } from 'marked';

const renderer = new Renderer();
renderer.link = ({ href, text }) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" class="external-link">${text}</a>`;

marked.use({ renderer });

export const md = (text: string): string => marked.parseInline(text, { async: false });
