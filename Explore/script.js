const experienceSlider = document.getElementById("experience")
const experienceValue = document.getElementById("experience-value")

if (experienceSlider) {
  experienceSlider.addEventListener("input", (e) => {
    experienceValue.textContent = e.target.value
  })
}

const registrationForm = document.getElementById("registrationForm")

if (registrationForm) {
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Form submitted successfully!")
  })
}
