const teacher = { 
    name: 'Jorge', 
    age: 30, 
    skills: ['JS', 'React', 'TDD']
};

//ES5
const name = teacher.name;
const age = teacher.age;
const skills  = teacher.skills;

//ES6
const {name, age, skills} = teacher;