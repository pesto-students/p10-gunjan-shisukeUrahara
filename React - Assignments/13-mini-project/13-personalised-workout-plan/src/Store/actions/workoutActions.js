import axios from "axios";

// Replace with your OpenAI API URL
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

function parseWorkoutPlan(planString) {
  const lines = planString.split("\n");
  let day = null;
  const plan = [];

  lines.forEach((line) => {
    if (line.startsWith("Day")) {
      // This line is a new day
      day = { name: line, exercises: [] };
      plan.push(day);
    } else if (day && line.startsWith("-")) {
      // This line is an exercise for the current day
      const exercise = line.slice(1).trim(); // Remove the bullet point
      day.exercises.push({ name: exercise });
    }
  });

  return plan;
}

export const fetchWorkoutPlan = (preferences) => async (dispatch) => {
  dispatch(fetchWorkoutPlanBegin());

  try {
    const chatGptKey = process.env.REACT_APP_OPENAI_API_KEY;
    console.log("**@ chatGpt is , ", chatGptKey);
    const client = axios.create({
      headers: {
        Authorization: "Bearer " + chatGptKey,
      },
    });

    const params = {
      prompt: `As a world-class fitness coach, I will create a custom workout plan for a ${preferences.gender} who is ${preferences.age} years old and wishes to target the ${preferences.targetMuscles} muscle group. This person's current fitness level is ${preferences.fitnessLevel} on a scale of 1-10, with 1 being the least fit and 10 being the most fit. The person is willing to workout for ${preferences.workoutDuration}. Please provide the workout plan in the following format: \nDay 1:\n- Exercise 1\n- Exercise 2\n...`,
      model: "text-davinci-003",
      max_tokens: 500,
      temperature: 0,
    };

    const response = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );
    console.log("**@ chatGpt response is , ", response);

    const outputResult = response.data.choices[0].text.trim();
    const formattedResult = outputResult.substring(
      outputResult.indexOf("Day 1")
    );
    // return formattedResult.split('\n');
    console.log("**@ outputResult is , ", outputResult);
    console.log("**@ formattedResult is , ", formattedResult);
    console.log("**@ parsed result is , ", parseWorkoutPlan(formattedResult));
    // console.log("**@ final result  is , ", formattedResult.split("\n"));

    dispatch(fetchWorkoutPlanSuccess(parseWorkoutPlan(formattedResult)));
  } catch (error) {
    dispatch(fetchWorkoutPlanFailure(error));
  }
};

export const fetchWorkoutPlanBegin = () => ({
  type: "FETCH_WORKOUT_PLAN_BEGIN",
});

export const fetchWorkoutPlanSuccess = (workoutPlan) => ({
  type: "FETCH_WORKOUT_PLAN_SUCCESS",
  payload: workoutPlan,
});

export const fetchWorkoutPlanFailure = (error) => ({
  type: "FETCH_WORKOUT_PLAN_FAILURE",
  payload: error,
});
