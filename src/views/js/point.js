// -----------------------------文字框-----------------------------------------------------
let service_main = document.getElementsByClassName("service_main")[0];
let service_text1 = service_main.firstElementChild;
let service_text2 = service_main.children[1];
let service_text3 = service_main.children[2];

// -----------------------------選單-----------------------------------------------------
let service_list = document.getElementsByClassName("service_list")[0];
let service1 = service_list.querySelectorAll("div")[0];
let service2 = service_list.querySelectorAll("div")[1];
let service3 = service_list.querySelectorAll("div")[2];

// -----------------------------控制-----------------------------------------------------

service1.addEventListener("click", function () {
  service_text1.classList.remove("text_test");
  service_text2.classList.add("text_test");
  service_text3.classList.add("text_test");

  setTimeout(function () {
    service_text1.classList.add("-on");
    service_text2.classList.remove("-on");
    service_text3.classList.remove("-on");
  }, 100);
  service1.style.transform = "translateX(" + 0 + "px)";
  service1.style.transition = "all  1s";

  service2.style.transform = "translateX(" + 0 + "px)";
  service2.style.transition = "all  1s";

  service3.style.transform = "translateX(-" + 0 + "px)";
  service3.style.transition = "all  1s";
});

service2.addEventListener("click", function () {
  service_text1.classList.add("text_test");
  service_text2.classList.remove("text_test");
  service_text3.classList.add("text_test");

  // ----------------------------------------------------------------------------------

  service1.style.transform = "translateX(" + 670 + "px)";
  service1.style.transition = "all  1s";

  service2.style.transform = "translateX(-" + 335 + "px)";
  service2.style.transition = "all  1s";

  service3.style.transform = "translateX(-" + 335 + "px)";
  service3.style.transition = "all  1s";

  // ----------------------------------------------------------------------------------

  setTimeout(function () {
    service_text2.classList.add("-on");
    service_text1.classList.remove("-on");
    service_text3.classList.remove("-on");
  }, 100);
});

service3.addEventListener("click", function () {
  service_text1.classList.add("text_test");
  service_text2.classList.add("text_test");
  service_text3.classList.remove("text_test");

  setTimeout(function () {
    service_text3.classList.add("-on");
    service_text1.classList.remove("-on");
    service_text2.classList.remove("-on");
  }, 100);

  service1.style.transform = "translateX(" + 335 + "px)";
  service1.style.transition = "all  1s";

  service2.style.transform = "translateX(" + 335 + "px)";
  service2.style.transition = "all  1s";

  service3.style.transform = "translateX(-" + 670 + "px)";
  service3.style.transition = "all  1s";
});
