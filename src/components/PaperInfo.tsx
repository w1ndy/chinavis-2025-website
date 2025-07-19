export interface Paper {
  title: string;
  authors: string[];
  link: string;
}

export function PaperInfo(props: { paper: Paper }) {
  return (
    <div>
      <div class="font-semibold"><a href={props.paper.link} target="_blank">{props.paper.title}</a></div>
      <div class="text-gray-600 dark:text-gray-400">{props.paper.authors.join(", ")}</div>
    </div>
  );
}