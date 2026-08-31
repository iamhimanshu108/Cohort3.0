const colours = [
  "from-amber-100 to-orange-50 border-amber-200",
  "from-violet-100 to-indigo-50 border-violet-200",
  "from-emerald-100 to-teal-50 border-emerald-200",
  "from-rose-100 to-pink-50 border-rose-200",
  "from-sky-100 to-cyan-50 border-sky-200",
];

const NoteCard = ({ note, index, deleteNote, noteForUpdate }) => {
  const colour = colours[index % colours.length];
  return (
    <article className={`group flex min-h-56 flex-col rounded-3xl border bg-gradient-to-br p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${colour}`}>
      <div className="mb-5 flex items-start justify-between gap-3"><span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold tracking-wider text-slate-500 uppercase">Note</span><span className="text-lg text-slate-400">✦</span></div>
      <h2 className="text-xl font-extrabold leading-tight text-slate-900">{note.title}</h2>
      <p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-slate-600">{note.description}</p>
      <div className="mt-auto flex items-center gap-2 pt-5 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100"><button onClick={() => noteForUpdate(note)} className="rounded-lg bg-white/80 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-white">Edit</button><button onClick={() => deleteNote(note._id)} className="rounded-lg px-3 py-2 text-sm font-bold text-rose-600 transition hover:bg-rose-100">Delete</button></div>
    </article>
  );
};

export default NoteCard;
