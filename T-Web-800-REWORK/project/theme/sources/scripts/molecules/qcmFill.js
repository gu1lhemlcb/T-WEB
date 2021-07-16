// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ►►► Scripts/layout/QcmFill
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
("use strict");

const QcmFill = {
  init() {
    this.inputs = document.querySelectorAll(".js-input-qcm")
    this.form = document.querySelector("#js-form-qcm")
    this.formData = new FormData(this.form)

    console.log(this.formData);


    this.inputs.forEach((_input) => {
      _input.addEventListener("change", this.onInputChange.bind(this))
    })
  },

  onInputChange(event) {
    console.log(event);
  }
};

export default QcmFill;
