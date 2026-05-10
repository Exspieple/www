const redirectDB = [
  {
    id: "teams",
    redirectURL: "https://teams.cloud.microsoft/",
  },
  {
    id: "insta",
    redirectURL: "https://www.instagram.com/merletz_",
  },
  {
    id: "mail",
    redirectURL: "https://mail.google.com/mail",
  },
  {
    id: "akg",
    redirectURL: "https://wp.akg-schwabach.de/",
  },
  {
    id: "africam",
    redirectURL: "https://www.youtube.com/@Africamvideos/streams",
  },
  {
    id: "elecmap",
    redirectURL: "https://app.electricitymaps.com/map/live/fifteen_minutes",
  },
];

const hyperlink = document.querySelector("a");

let params = new URLSearchParams(document.location.search);
let target = params.get("to");

let nextURL = "/404"

redirectDB.forEach((elem) => {
  if (target == elem.id) {
    nextURL = elem.redirectURL;
  }
});


hyperlink.href = nextURL;
window.location.replace(nextURL)