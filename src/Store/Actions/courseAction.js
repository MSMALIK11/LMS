import axios from "axios";
let URL = "http://localhost:8000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const config2={
  headers:{
    "Content-Type":"multipart/form-data"
  }
}

const credensials = { credensials: true };

export const getCourses = () => async (dispatch) => {
  dispatch({ type: "getCourseRequest" });

  try {
    const { data } = await axios.get(
      `${URL}/api/course/instructor`,
      config,
      credensials
    );
    console.log("courses", data);
    dispatch({
      type: "getCourseSuccess",
      payload: data,
    });
  } catch (error) {}
};

// add course action
export const AddCoursesAction = (course, image, slug) => async (dispatch) => {
  dispatch({ type: "AddCourseRequest" });

  try {
    const { data } = await axios.post(
      `${URL}/api/course/add`,
      course,
      image,
      slug,
      config,
      credensials
    );

    dispatch({
      type: "AddCourseSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AddCourseFail",
    });
  }
};

// add lesson a particular course

export const addLesson = (lesson,video ,cId) => async (dispatch) => {
  dispatch({ type: "addLessonRequest" });

  try {
    const { data } = await axios.post(
      `${URL}/api/course/lesson/add/${cId}`,
      lesson,
      video,
    
      config,
      credensials
    );
    console.log("lesson response", data);

    dispatch({ type: "addLessonSuccess", payload: data });
  } catch (error) {
    dispatch({type:'addLessonFail'})
  }
};
