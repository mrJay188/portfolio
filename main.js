(function() {
  const expandImg = document.getElementById("expandedImg");
  // const imgText = document.getElementById("imgtext");
  const container = document.querySelector(".container");
  const imgt = document.getElementById("imgt");
  const imgn = document.getElementById("imgn");
  const imgd = document.getElementById("imgd");
  const imgs = document.getElementById("imgs");
  const auto = document.querySelector(".cont");

  document.querySelectorAll(".row img").forEach(function(img) {
      img.addEventListener("click", function() {
          auto.style.display = "none";
          const name = this.nextElementSibling.innerHTML;
          const tech = this.nextElementSibling.nextElementSibling.innerHTML;
          const screen = this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
          const dis = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
          showImage(this.src, this.alt,name, tech, screen, dis);
      });
  });

  function showImage(src,alt, name, tech, screen, dis) {
      expandImg.src = src;
      expandImg.alt = alt;
      // imgText.textContent = alt;
      container.style.display = "block";
      imgn.innerHTML = name;
      imgt.innerHTML = tech;
      imgs.innerHTML = screen;
      imgd.innerHTML = dis;
      console.log("image src "+src+"\n image alt "+alt+"\n name "+name+"\n tech "+tech+"\n screen "+screen+"\n dis "+dis);
  }

  document.querySelector(".closebtn").addEventListener("click", function() {
      container.style.display = "none";
      auto.style.display = "block";
      // auto.style.margin-left="150px";
  });
})();
