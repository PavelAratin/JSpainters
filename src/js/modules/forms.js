import { postData } from "../services/requests";
const forms = () => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]')

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо!Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  }

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
      upload.forEach(item=>{
        item.previousElementSibling.textContent = 'файл не выбран';
      })
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0])
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 5 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0,6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  })

  form.forEach(function (item) {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      let statusMessages = document.createElement('div');
      statusMessages.classList.add('status');
      item.parentNode.appendChild(statusMessages);
      item.classList.add('animated', 'fadeOutUp');

      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessages.appendChild(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessages.appendChild(textMessage);

      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;
      console.log(api)


      postData(api, formData)
        .then(res => {
          console.log(res)
          statusImg.setAttribute('src', message.ok)
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          statusMessages.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessages.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp')
          }, 5000);
        });
    });
  });
};

export default forms;