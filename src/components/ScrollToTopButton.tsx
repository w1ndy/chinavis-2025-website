export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      class="fixed bottom-8 right-8 w-8 h-8 text-center leading-8 bg-sky-700 text-white opacity-50 rounded-full cursor-pointer hover:bg-sky-500 hover:opacity-100 transition duration-300"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}