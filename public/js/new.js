const getScore = () => {
  const elements = document.getElementsByClassName("radiobtn");
  console.log("Length of elements in getScore: ", elements.length);
  for (i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
};
console.log("this is a test to see if js is connected!");

const applauseSound = new Howl({
  src: "../sfx/applause.wav",
});

// new report handle
async function newReporthandler(event) {
<<<<<<< HEAD
    // Prevent default action from happening
    // Note: Prevents redirect until login is replace
    event.preventDefault();
    applauseSound.play();
    // Get Login information
    const title = document.querySelector("#book-title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const content = document.querySelector("#report-content").value.trim();
    const url = "fake.com"
    const score = getScore();

 
    
    // Checks if title and author are filled
    if (title && author) {
      // Get response from login info
      console.log(title, author, content, url,)
      const response = await fetch("/api/reports", {
        method: "POST",
        body: JSON.stringify({ title, author, content, url, score,}),
        headers: { "Content-Type": "application/json" },
      });
  
      // If response is valid, it'll load the home screen
      if (response.ok) {
        openModal()
      } else {
        // Let user know they failed to log in
        alert("failed to make a new report");
      }
=======
  console.log("you tried to submit a new report!");
  // Prevent default action from happening
  // Note: Prevents redirect until login is replace
  event.preventDefault();
  applauseSound.play();
  // Get Login information
  const title = document.querySelector("#book-title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const content = document.querySelector("#report-content").value.trim();
  const url = "fake.com";
  const score = getScore();
  console.log("Your score is: ", score);

  // Checks if title and author are filled
  if (title && author) {
    // Get response from login info
    console.log(title, author, content, url);
    const response = await fetch("/api/reports", {
      method: "POST",
      body: JSON.stringify({ title, author, content, url, score }),
      headers: { "Content-Type": "application/json" },
    });

    // If response is valid, it'll load the home screen
    if (response.ok) {
      document.location.replace("/");
    } else {
      // Let user know they failed to log in
      alert("failed to make a new report");
>>>>>>> 0b3f935 (Updated Handlebars and API)
    }
  }
}

<<<<<<< HEAD
let modal = document.querySelector(".modal")
function openModal(){
  modal.style.display = 'block'
}

function closeModal(event){
  event.preventDefault();
  document.location.replace("/")
}

=======
>>>>>>> 0b3f935 (Updated Handlebars and API)
document
  .getElementById("submit-report-btn")
  .addEventListener("click", newReporthandler);


document.getElementById("exit-modal").addEventListener("click", closeModal)


//   const oneStar = getElementByid("1")
//   const twoStar = getElementByid("2")
//   const threeStar = getElementByid("3")
//   const fourStar = getElementByid("4")
//   const fiveStar = getElementByid("5")
