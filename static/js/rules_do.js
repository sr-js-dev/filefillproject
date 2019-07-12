// Tag items with color
function tag_items() {
  const listItems = document.querySelectorAll('.list-group-item');
  if (listItems.length > 1) {
    listItems.forEach( listItem => {
      const tags = listItem.getAttribute('data-sections')
      
      if (tags.includes('positive')) {
        listItem.innerHTML = `<i class="fas fa-square box" style="color:green;"></i>${listItem.innerHTML}`;
      } else if (tags.includes('negative')) {
        listItem.innerHTML = `<i class="fas fa-square box" style="color:red;"></i>${listItem.innerHTML}`;
      } else if (tags.includes('neutral')) {
        listItem.innerHTML = `<i class="fas fa-square box" style="color:blue;"></i>${listItem.innerHTML}`;
      }
    })
  }
};


// Apply the rules
function rules_do() {
  result.forEach(element => {
    let classes = element.split('data-sections="')[1].split('">')[0].split(",");

    classes.forEach(class_element => {
      const element2 = document.querySelector(`.${class_element}_div`);

      element2.innerHTML += element;
      // new SimpleBar(element2, { autoHide: false });
    });
  });


  tag_items()
}
