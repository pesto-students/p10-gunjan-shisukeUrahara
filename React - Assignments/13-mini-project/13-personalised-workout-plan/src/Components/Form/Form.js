// src/components/Form.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWorkoutPlan } from "../../Store/actions/workoutActions";
import styles from "../../Styles/Form.module.css";

const fitnessLevels = [
  { id: 1, level: 1, description: "I get tired while standing for too long" },
  {
    id: 2,
    level: 2,
    description: "I can walk for 30 minutes without getting tired",
  },
  {
    id: 3,
    level: 3,
    description: "I can jog for 10 minutes without getting tired",
  },
  {
    id: 4,
    level: 4,
    description: "I can run for 10 minutes without getting tired",
  },
  {
    id: 5,
    level: 5,
    description: "I can jog for 30 minutes without getting tired",
  },
  {
    id: 6,
    level: 6,
    description: "I can run for 20 minutes without getting tired",
  },
  {
    id: 7,
    level: 7,
    description: "I can do a short HIIT workout without getting tired",
  },
  {
    id: 8,
    level: 8,
    description: "I can do a long HIIT workout without getting tired",
  },
  {
    id: 9,
    level: 9,
    description: "I can do 30 push-ups and 30 sit-ups without getting tired",
  },
  {
    id: 10,
    level: 10,
    description: "I can do 50 one arm pushups and 50 one arm pullups in one go",
  },
];

const Form = () => {
  const dispatch = useDispatch();

  const [preferences, setPreferences] = useState({
    age: "",
    gender: "",
    fitnessLevel: "",
    targetMuscles: "",
    workoutDuration: "",
  });

  const handleChange = (event) => {
    setPreferences({
      ...preferences,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWorkoutPlan(preferences));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Custom Workout Plan</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Age
          <select
            name="age"
            value={preferences.age}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Age</option>
            {Array.from({ length: 86 }, (_, i) => i + 15).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          Gender
          <select
            name="gender"
            value={preferences.gender}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className={styles.label}>
          Fitness Level
          <select
            name="fitnessLevel"
            value={preferences.fitnessLevel}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Fitness Level</option>
            {fitnessLevels.map((level) => (
              <option key={level.id} value={level.level}>
                {level.level} - {level.description}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          Target Muscles
          <select
            name="targetMuscles"
            value={preferences.targetMuscles}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Target Muscles</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="shoulders">Shoulders</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">triceps</option>
            <option value="legs">legs</option>
            <option value="whole body">Whole body</option>
          </select>
        </label>
        <label className={styles.label}>
          Workout Duration
          <select
            name="workoutDuration"
            value={preferences.workoutDuration}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Duration</option>
            <option value="15-20">15-20 Minutes</option>
            <option value="25-40">25-40 Minutes</option>
            <option value="40-60">40-60 Minutes</option>
          </select>
        </label>
        <button type="submit" className={styles.button}>
          Generate Workout Plan
        </button>
      </form>
    </div>
  );
};

export default Form;
