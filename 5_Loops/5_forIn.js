const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    css: "Cascading style sheet"
}

for(const key in myObject){
    // console.log(`${key} for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"]
for(const key in programming){
    console.log(programming[key]);
    
}