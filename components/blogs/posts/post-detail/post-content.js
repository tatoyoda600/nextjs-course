import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const imagePath = `/images/blog/posts/${props.post.slug}`;

  const customRenderers = {
    p(paragraph) {
      const child = paragraph.node.children[0];
      if (child.tagName === 'img') {

        return (
          <div className={classes.image}>
            <Image src={`${imagePath}/${child.properties.src}`} alt={child.alt} width={600} height={300} />
          </div>
        );
      }

      return (
        <p>{paragraph.children}</p>
      );
    },

    code(code) {
      const language = code.className.split("-")[1] // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter style={atomDark} language={language} children={code.children} />
      );
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={`${imagePath}/${props.post.image}`} />
      <ReactMarkdown components={customRenderers}>{props.post.content}</ReactMarkdown>
    </article>
  );
}