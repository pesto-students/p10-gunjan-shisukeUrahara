import React from "react";
import { useSelector } from "react-redux";
import styles from "../../Styles/WorkoutPlan.module.css";

const WorkoutPlan = () => {
  const workoutPlan = useSelector((state) => state.workout.workoutPlan);
  console.log("**@ WORKOUT PLAN IS , ", workoutPlan);
  const loading = useSelector((state) => state.workout.loading);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!workoutPlan) {
    return <div className={styles.noPlan}>No workout plan generated yet.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Personalized Workout Plan</h1>
      {workoutPlan.map((day, index) => (
        <div key={index} className={styles.day}>
          <h2 className={styles.dayName}>{day.name}</h2>
          {day.exercises.map((exercise, index) => (
            <div key={index} className={styles.exercise}>
              <h3 className={styles.exerciseName}>{exercise.name}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
