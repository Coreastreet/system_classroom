import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "accContainer"];
  
  connect() {
      var acc_container = this.accContainerTarget;
      var acc = acc_container.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
  }

  show_answer(event) {
      var show_answer_button = event.target;
      var answer_holder = show_answer_button.closest(".answer").querySelector(".invisible");

      show_answer_button.classList.add("hidden");
      show_answer_button.nextElementSibling.classList.remove("hidden");
      answer_holder.classList.remove("invisible");
  }
  // open the sidenav
  //slide_down() {
    //sidebar.classList.replace("left-0", "left-40");
  //}

  //get slideOut() {
  //    return this.nameTarget.value
  // }
}
