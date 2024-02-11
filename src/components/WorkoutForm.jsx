import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch(
      import.meta.env.VITE_API_URL + "api/workouts",
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added:", json);
    }
  };

  return (
    <form
      className="create outline outline-1 rounded-lg p-2"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl">Add a New Workout</h3>

      <div className="m-2">
        {" "}
        <label className="mr-2">Exercise Title:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border-b-[1px] border-b-neutral-600 focus:outline-none"
        />
      </div>

      <div className="m-2">
        {" "}
        <label>Load (in kg):</label>
        <br />
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className="border-b-[1px] border-b-neutral-600 focus:outline-none"
        />
      </div>

      <div className="m-2">
        {" "}
        <label>Number of Reps:</label>
        <br />
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="border-b-[1px] border-b-neutral-600 focus:outline-none"
        />
      </div>

      <button className="bg-gray-400 rounded-md px-2 m-2">Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
