import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "api/workouts"
      );
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home lg:grid lg:grid-cols-3">
      <div className="workouts col-span-2  ">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <div className="add_workout col-span-1 p-6">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
