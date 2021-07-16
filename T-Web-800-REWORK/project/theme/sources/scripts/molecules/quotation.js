export const quotationForm = function () {
  const axios = require('axios').default
  const quotationFormEl = document.getElementById('js-form-quotation')

  if (quotationFormEl) {
    quotationFormEl.addEventListener('submit', function (e) {
      e.preventDefault()

      quotationFormEl.querySelector('[type="submit"]').blur()

      /////////
      let formData = new FormData(quotationFormEl)
      // //////
      grecaptcha.ready(function () {
        grecaptcha
          .execute('6Lf7de0aAAAAAPSdiGB_68p_b8Lc4YIY34h3pVAJ', {
            action: 'homepage',
          })
          .then(function (token) {
            var recaptchaResponseApplication = document.getElementById(
              'quotation_form_recaptcha_response',
            )
            recaptchaResponseApplication.value = token

            let formData = new FormData(quotationFormEl)

            axios({
              method: 'post',
              url: quotationFormEl.action,
              data: formData,
            })
              .then(function (response) {
                let alertsEl = quotationFormEl.querySelectorAll('.js-alert')

                if (alertsEl.length > 0) {
                  Array.from(alertsEl).forEach((alert) => {
                    alert.remove()
                  })
                }

                if (response.data.alerts == false) {
                  quotationFormEl.insertAdjacentHTML(
                    'afterend',
                    `<p class="alert success js-alert">${response.data.success}</p>`,
                  )
                  quotationFormEl
                    .querySelectorAll('.success')[0]
                    .scrollIntoView({ behavior: 'smooth', block: 'center' })
                  quotationFormEl.reset()
                } else {
                  Object.entries(response.data.alerts).forEach(
                    ([key, value]) => {
                      quotationFormEl
                        .querySelector(`[for="contact_${key}"]`)
                        .insertAdjacentHTML(
                          'afterend',
                          `<span class="error js-alert">${value}</span>`,
                        )
                    },
                  )
                  quotationFormEl
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
