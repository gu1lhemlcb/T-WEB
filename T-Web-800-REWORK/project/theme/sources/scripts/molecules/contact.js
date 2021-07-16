export const validationForm = function () {
  const axios = require('axios').default
  const contactFormEl = document.getElementById('js-form-application')

  if (contactFormEl) {
    contactFormEl.addEventListener('submit', function (e) {
      e.preventDefault()

      contactFormEl.querySelector('[type="submit"]').blur()

      /////////
      let formData = new FormData(contactFormEl)
      // //////
      grecaptcha.ready(function () {
        grecaptcha
          .execute('6Lf7de0aAAAAAPSdiGB_68p_b8Lc4YIY34h3pVAJ', {
            action: 'homepage',
          })
          .then(function (token) {
            var recaptchaResponseApplication = document.getElementById(
              'contact_form_recaptcha_response',
            )
            recaptchaResponseApplication.value = token

            let formData = new FormData(contactFormEl)

            axios({
              method: 'post',
              url: contactFormEl.action,
              data: formData,
            })
              .then(function (response) {
                let alertsEl = contactFormEl.querySelectorAll('.js-alert')

                if (alertsEl.length > 0) {
                  Array.from(alertsEl).forEach((alert) => {
                    alert.remove()
                  })
                }

                if (response.data.alerts == false) {
                  var sendMessageEl = contactFormEl.querySelector('#js-submit-button')
                  console.log(sendMessageEl)
                  sendMessageEl.remove()
                  contactFormEl.insertAdjacentHTML(
                    'afterend',
                    `
                      <div class="sm-column-24 lg-column-13 lg-offset-0 align-end-center">
                        <button class="a-button primary" disabled>Message envoyé</button>
                      </div>
                      <p class="alert success js-alert">${response.data.success}</p>
                    `,
                  )
                  contactFormEl.reset()
                } else {
                  Object.entries(response.data.alerts).forEach(
                    ([key, value]) => {
                      contactFormEl
                        .querySelector(`[for="contact_${key}"]`)
                        .insertAdjacentHTML(
                          'afterend',
                          `<span class="error js-alert">${value}</span>`,
                        )
                    },
                  )
                  contactFormEl
                    .querySelectorAll('.error')[0]
                    .scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              })
              .catch(function (error) {
                console.log('error ', error)
              })
          })
      })
    })
  }
}
