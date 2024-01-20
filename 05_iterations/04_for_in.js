const myLanguage = {
    js: "javascript",
    c: "C programming",
    cpp: "C++",
    java: "Java",
    swift: "Swift by apple",
    kotlin: "kotlin by google",
    rb: "ruby"
}

for (const key in myLanguage) {
    console.log(`${key} is extention of ${myLanguage[key]}`);
}