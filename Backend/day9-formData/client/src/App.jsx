import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setFileName("");
  };

  const fileRegistration = register("file", {
    required: "Please choose a profile picture.",
    onChange: (event) => setFileName(event.target.files?.[0]?.name || ""),
  });

  return (
    <main className="page-shell">
      <section className="profile-card" aria-labelledby="profile-title">
        <div className="card-badge" aria-hidden="true">✦</div>
        <p className="eyebrow">Account setup</p>
        <h1 id="profile-title">Create your profile</h1>

        {submitted && <div className="success-message" role="status"><span>✓</span> Your details have been saved.</div>}

        <form onSubmit={handleSubmit(submitHandler)} noValidate>
          <div className="field-group">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="e.g. Priya Sharma" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name", { required: "Your name is required." })} />
            {errors.name && <span className="field-error">{errors.name.message}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email", { required: "Your email is required.", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address." } })} />
            {errors.email && <span className="field-error">{errors.email.message}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="file">Profile picture</label>
            <label className="file-picker" htmlFor="file">
              <span className="upload-icon">↑</span>
              <span><strong>{fileName || "Choose an image"}</strong><small>{fileName ? "Ready to upload" : "PNG, JPG or WEBP up to 5 MB"}</small></span>
            </label>
            <input id="file" type="file" accept="image/png,image/jpeg,image/webp" {...fileRegistration} />
            {errors.file && <span className="field-error">{errors.file.message}</span>}
          </div>

          <button type="submit">Save profile <span aria-hidden="true">→</span></button>
        </form>
      </section>
    </main>
  );
};

export default App;
