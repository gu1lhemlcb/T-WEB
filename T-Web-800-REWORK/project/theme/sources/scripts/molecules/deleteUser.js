/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layout/menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
("use strict");

const DeleteUser = {
  init: () => {
    const qcmFormEl = document.getElementById("js-delete-user");

    if (qcmFormEl) {
      window.addEventListener("load", function (event) {
        event.preventDefault();
        $.ajax({
          url: window.location.href,
          method: "POST",
          data: { form_type: "delete_user" },
        })
          .success((data) => {
            console.log(data, "success");
          })
          .error(() => {
            console.log("error");
          });
      });
    }
  },
};

export default DeleteUser;
