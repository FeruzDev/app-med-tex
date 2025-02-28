function callback() {
    document
        .querySelectorAll('form.callback')
        .forEach(callback => {
            callback.querySelectorAll('fieldset')
                .forEach(fieldset => {

                    let sending = false;

                    callback.querySelectorAll('.submit').forEach(submit => {
                        submit.addEventListener('click', (e) => {
                            e.preventDefault();

                            let valid = false,
                                phone_input = callback.querySelector('input[name="phone"]'),
                                number = phone_input.value;

                            valid = validNumber(number);

                            if (!sending && valid) {
                                sending = true
                                ComagicWidget.sitePhoneCall({'phone': number.replace(/[^0-9]/g, '')}, function (response) {
                                    if (response.success) {
                                       // fieldset.classList.add('m-hidden');
                                        phone_input.value = "";
                                        createAlert(callback, {
                                            class: 'thanks',
                                            message: 'Спасибо! Ваша заявка принята'
                                        });
                                    } else {
                                        createAlert(callback, {
                                            class: 'error',
                                            message: 'При отправке запроса возникла ошибка.'
                                        });
                                    }
                                    sending = false
                                });

                            } else if (!valid) {
                                phone_input.classList.add('error');
                                createAlert(callback, {
                                    class: 'error',
                                    message: 'Пожалуйста, ведите номер телефона'
                                });
                            }


                        });
                    });
                })
        });

    function validNumber(number) {
        console.log('validNumber');
        console.log(number.replace(/[^0-9]/g, ''));
        console.log(number.replace(/[^0-9]/g, '').length);
        return number.replace(/[^0-9]/g, '').length === 11;
    }

    function clearAlerts(callback) {
        callback.querySelectorAll('.m-alert').forEach(alert => {
            alert.remove();
        });
    }

    function createAlert(callback, data) {
        clearAlerts(callback);

        let alert = document.createElement('div');

        alert.classList = 'm-alert ' + data.class;
        alert.innerHTML = data.message;

        callback
            .querySelectorAll('fieldset')
            .forEach(fieldset => {
                fieldset.after(alert);
            })
    }
}

try {
    document.addEventListener('DOMContentLoaded', function () {
        callback();
    });
} catch (e) {

}