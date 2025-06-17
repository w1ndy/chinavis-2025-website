export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      class="fixed bottom-8 right-8 w-8 h-8 text-center leading-8 bg-primary text-white opacity-50 rounded-full cursor-pointer hover:opacity-100 transition duration-300"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}