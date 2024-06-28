// Get the h1 tag
const headingTag = document.getElementById('heading');

const tomorrow = moment().add(1, 'days').calendar();

console.log(tomorrow)

headingTag.innerHTML = `We will push the code to production ${tomorrow}`;