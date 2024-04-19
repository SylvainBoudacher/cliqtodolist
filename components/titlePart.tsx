export default function TitlePart() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-neutral-900">
        Todo list. <span className="ml-2">CLIQ Digital.</span>
      </h2>
      <p className="font-light">
        Technical test for CLIQ Digital.
        <br className="sm:hidden" />{" "}
        <a
          target="blank"
          href="https://www.linkedin.com/in/sylvain-boudacher/"
          className="hover:underline"
        >
          @Sylvain Boudacher.
        </a>
      </p>
    </div>
  );
}
