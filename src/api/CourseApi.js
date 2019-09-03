import delay from './delay';

import api from "../api";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [];
/*
const courses = [
    {
        id: "1",
        nome: "Lucas",
        celular: "(77)98100-5641"
    },
    {
        id: "2",
        nome: "Ricardo",
        celular: "(77)99999-9999"
    },
    {
        id: "3",
        nome: "Teste",
        celular: "(77)88888-8888"
    },
    {
        id: "4",
        nome: "João",
        celular: "(77)98100-0000"
    },    
];
*/

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                api.get("/alunos")
                    .then(response => {
                        resolve(Object.assign([], response.data.alunos));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const tamanhoMinimoNome = 2;
                if (course.nome.length < tamanhoMinimoNome) {
                    reject(`Nome com no mínimo ${tamanhoMinimoNome} caracteres.`);
                }
                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    
                    // course.id = generateId(course);
                    // course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    // courses.push(course);
                    setTimeout(() => {
                        api.post("/alunos", course)
                            .catch(error => {
                                console.log(error);
                            });
                    }, delay);
                }
                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;
