import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const emptyForm = { title: "", description: "" };

const App = () => {
  const [formValues, setFormValues] = useState(emptyForm);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  const getAllNotes = async () => {
    try {
      setStatus("loading");
      const res = await axios.get("http://localhost:3000/notes/allNotes");
      setAllNotes(res.data.data || []);
      setStatus("ready");
    } catch {
      setStatus("error");
      setMessage("Couldn’t reach the notes server. Please try again.");
    }
  };

  useEffect(() => { getAllNotes(); }, []);

  const handleChange = (event) => setFormValues((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const resetEditor = () => { setUpdateNoteId(null); setFormValues(emptyForm); };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (updateNoteId) {
        await axios.put(`http://localhost:3000/notes/${updateNoteId}`, formValues);
        setMessage("Note updated successfully.");
      } else {
        await axios.post("http://localhost:3000/notes/create", formValues);
        setMessage("New note saved.");
      }
      resetEditor();
      getAllNotes();
    } catch { setMessage("Something went wrong. Your note was not saved."); }
  };

  const deleteNote = async (id) => {
    try { await axios.delete(`http://localhost:3000/notes/${id}`); setMessage("Note deleted."); getAllNotes(); }
    catch { setMessage("Couldn’t delete that note. Please try again."); }
  };

  const noteForUpdate = (note) => {
    setUpdateNoteId(note._id);
    setFormValues({ title: note.title, description: note.description });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f7f7fb] px-4 py-6 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-2 text-sm font-bold tracking-[0.18em] text-indigo-600 uppercase">Personal workspace</p><h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">My notes</h1><p className="mt-2 text-slate-500">Keep your thoughts clear, organised, and close at hand.</p></div>
          <div className="rounded-2xl border border-indigo-100 bg-white px-5 py-3 shadow-sm"><span className="text-2xl font-extrabold text-indigo-600">{allNotes.length}</span><span className="ml-2 text-sm font-medium text-slate-500">{allNotes.length === 1 ? "note" : "notes"} saved</span></div>
        </header>
        <section className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="h-fit rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/60 lg:sticky lg:top-6">
            <div className="mb-6 flex items-center justify-between"><div><p className="text-sm font-semibold text-indigo-300">{updateNoteId ? "Editing note" : "Quick capture"}</p><h2 className="text-2xl font-bold">{updateNoteId ? "Make changes" : "Write a note"}</h2></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500 text-xl">✦</span></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-slate-300">Title<input onChange={handleChange} name="title" value={formValues.title} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" type="text" placeholder="What’s on your mind?" required /></label>
              <label className="text-sm font-semibold text-slate-300">Note<textarea onChange={handleChange} name="description" value={formValues.description} className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" placeholder="Write the details here…" minLength={20} required /></label>
              <button className="mt-2 rounded-xl bg-indigo-500 px-4 py-3 font-bold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">{updateNoteId ? "Save changes" : "Add note"}</button>
              {updateNoteId && <button type="button" onClick={resetEditor} className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">Cancel editing</button>}
            </form>
          </aside>
          <section aria-live="polite">
            {message && <div className="mb-5 flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-800"><span>{message}</span><button onClick={() => setMessage("")} aria-label="Dismiss message" className="ml-4 text-lg leading-none">×</button></div>}
            {status === "loading" ? <div className="grid min-h-64 place-items-center rounded-3xl border border-dashed border-slate-300 bg-white text-slate-500">Loading your notes…</div> : status === "error" ? <div className="grid min-h-64 place-items-center rounded-3xl border border-dashed border-rose-200 bg-rose-50 p-8 text-center text-rose-700"><div><p className="font-bold">Your notes couldn’t be loaded.</p><button onClick={getAllNotes} className="mt-3 font-semibold underline">Try again</button></div></div> : allNotes.length === 0 ? <div className="grid min-h-64 place-items-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center"><div><span className="text-4xl">✎</span><h2 className="mt-3 text-xl font-bold">Your notebook is empty</h2><p className="mt-1 text-slate-500">Capture your first thought using the editor.</p></div></div> : <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{allNotes.map((note, index) => <NoteCard key={note._id} note={note} index={index} noteForUpdate={noteForUpdate} deleteNote={deleteNote} />)}</div>}
          </section>
        </section>
      </div>
    </main>
  );
};

export default App;
