// Global variables
let rules;

window.addEventListener("DOMContentLoaded", event => {

  // Event listners
  document.getElementById("add").addEventListener('click', add_rule);

  // Add rule
  function add_rule() {

    // Get the values
    let logic = document.getElementById('logic').value;
    let text = document.getElementById('text').value;
    let sections = [];
    
    document.querySelectorAll(".display_control").forEach(element => {
      if (element.checked) {
        sections.push(element.id);
      }
    });
    

    // Simple validations for adding rule
    if (logic.length < 3) return alert('Logic field is required!');
    if (text.length < 3) return alert('Text field is required!');
    if (sections.length <= 0) return alert('Select at least one section!');


    sections = JSON.stringify(sections)
    $.ajax({
      url: "/add_rule/",
      method: "post",
      data: {logic, text, sections},
      success: res => {
        if (res.added == 'OK') {
          location.reload();
        }
      }
    })
    
  };

  
  // Remove rule
  function remove_rule() {
    document.querySelectorAll('.removeRule').forEach(btn => {
      btn.addEventListener('click', e => {
        const i = btn.id
        rules.splice(i, 1);
        $.ajax({
          url: "set_rules",
          method: "post",
          data: {rules: JSON.stringify(rules)},
          success: res => {
            if (res.set == 'OK') {
              location.reload();
            }
          }
        })
      })
    })
  }

  
  // Render rules
  (function render_rules() {
    $.ajax({
      url: "/get_rules/",
      success: res => {
        rules = JSON.parse(res);

        output = '';
        let i = 0;
        rules.forEach(rule => {

          // Get the sections part first
          sections = '';
          rule.sections.forEach(section => {
            sections += `
            <span style="padding:10px;text-transform:capitalize;">
              <i class="fas fa-check-square text-primary" style="margin-right: 5px;"></i>${section}
            </span>`;
          })
          
          // Get the total output
          output += `
          <div style="background: #f3f2f2;padding: 5px 15px;border-radius: 10px;margin: 10px;">
            <h3 class="text-primary">Role Logic</h3>
            <p style="font-size: 15px;">${rule.logic}</p>
            <h3 class="text-primary">Role Text</h3>
            <p style="font-size: 15px;">${rule.text}</p>
            <p style="font-size: 15px;">${sections}</p>
            <button id="${i}" class="btn btn-danger removeRule" style="display: block;margin-left: auto;">Remove Rule</button>
          </div>
          `;
          i++;
        })

        document.getElementById('rules').innerHTML = output;
        remove_rule()
      }
    })

  })();

});
