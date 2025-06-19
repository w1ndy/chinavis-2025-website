export function CommitteeMember(props: { name: string; affiliation: string; photo: string }) {
  return (
    <div class="w-32">
      <img
        class="block w-32 h-44 object-cover mb-1"
        src={props.photo}
        alt={`${props.name}'s Photo`}
      />
      <div class="indent-0 leading-5 py-2 font-semibold">{props.name}</div>
      <div class="indent-0 leading-4 pt-2 text-gray-500 dark:text-gray-300 text-xs w-full border-t border-gray-500 dark:border-gray-300 hyphens-auto text-left">{props.affiliation}</div>
    </div>
  );
}
