// Variables
const list_btn = document.getElementById('list_btn');
const sort_btn = document.getElementById('sort_btn');
const listed = document.getElementById('listed');
const sorted = document.getElementById('sorted');

let shown_list = 'listed';

// event listener
(function init() {
  list_btn.addEventListener('click', e => {
    if (shown_list == 'sorted') {
      listed.classList.remove('d-none');
      sorted.classList.add('d-none');
      shown_list = 'listed';
    }
  });

  sort_btn.addEventListener('click', e => {
    if (shown_list == 'listed') {
      listed.classList.add('d-none');
      sorted.classList.remove('d-none');
      shown_list = 'sorted';
    }
  });

})();


