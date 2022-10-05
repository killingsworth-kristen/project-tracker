// declare global variables
var addProjectBtn = $(`#add-project`);

// real time display
var timeInterval = setInterval(function () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss A');
    $("#date-display").text(`Current date & time: ${now}`);
      }, 1000);

addProjectBtn.on (`click`, function(){
    console.log(`clicked`)
    $(`.modal`).show()
})
