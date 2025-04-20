export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Esta es la pagina principal</p>
      <div
        style={{ viewTransitionName: "home" }}
        className="bg-purple-500 h-40 duration-500 transition-all"
      >
        hello
      </div>
      <img
        src="/vite.svg"
        className="size-40"
        style={{ viewTransitionName: "vite" }}
      />
    </div>
  );
}
