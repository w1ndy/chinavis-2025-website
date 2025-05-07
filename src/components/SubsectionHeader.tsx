export default function SubsectionHeader(props: { number: number, title: string }) {
  return (
    <div class="flex flex-row items-center my-5 **:indent-0">
      <div class="flex-none w-10 h-10 leading-10 bg-sky-600 text-white text-lg text-center font-bold">
        {props.number}
      </div>
      <div class="flex-1 text-lg font-bold ml-4">
        {props.title}
      </div>
    </div>
  );
}