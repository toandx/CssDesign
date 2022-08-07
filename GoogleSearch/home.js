function search() {
  query = document.getElementById("searchbar").value;
  url = 'http://www.google.com/search?q=' + query;
  window.open(url, '_blank');
}
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var input = document.getElementById("searchbar");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        search();
      }
    });
  }
}