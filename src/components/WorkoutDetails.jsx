export default function WorkoutDetails({ workout }) {
  const getDate = (d) => {
    return d ? new Date(d).toDateString() : new Date().toDateString();
  };
  return (
    <div className="workout-details bg-gray-200 m-4 rounded-lg p-4 w-3/5 mx-auto">
      <h4>{workout.title[0].toUpperCase() + workout.title.slice(1)}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{getDate(workout.createdAt)}</p>
    </div>
  );
}
