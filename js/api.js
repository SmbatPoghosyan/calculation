const API_BASE_URL = "https://atudent-assesment.app/api/";

async function getStudents() {
    try {
        const response = await axios.get(API_BASE_URL + "students");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function getCourses() {
    try {
        const response = await axios.get(API_BASE_URL + "courses");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function getInstructors() {
    try {
        const response = await axios.get(API_BASE_URL + "instructors");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function calculateAssessmentResult(data) {
    try {
        const response = await axios.post(API_BASE_URL + "calculate-result", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
