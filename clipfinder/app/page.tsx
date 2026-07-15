export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">ClipFinder</h1>

      <p className="text-neutral-400 text-center max-w-xl mb-10">
        Find internet videos by describing what you remember.
      </p>

      <div className="w-full max-w-2xl flex gap-3">
        <input
          className="flex-1 rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-blue-500"
          placeholder="A guy says road work ahead..."
        />

        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-6 font-semibold transition">
          Search
        </button>
      </div>
    </main>
  );
}