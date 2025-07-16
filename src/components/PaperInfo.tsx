export interface Paper {
  title: string;
  authors: string[];
}

export function PaperInfo(props: { paper: Paper }) {
  return (
    <div>
      <div class="font-semibold">{props.paper.title}</div>
      <div class="text-gray-600 dark:text-gray-400">{props.paper.authors.join(", ")}</div>
    </div>
  );
}