// the nav bar animation 
$('.toggle-menu').click(function () {
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
  $("#fadein").fadeIn(1000);
});

// the background colour of the navbar based on the page 
function setBackgroundColour(color) {
  document.getElementById('menu').style.backgroundColor = color;
}

// the go to top button code
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// the javascript for the splash screen to show 
function consoleText(words, id, colors) {
  // define the variables needed for the splash screen 
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}

// function to get the pictures from google drive and display it 
$(function () {
  // if the page is the photography page 
  if ($('body.photography').length > 0) {
    // code for the pictures from google drive 
    const url = 'https://script.google.com/macros/s/AKfycbxl3m-5QB1BUUB56Tui7rPeSBjRYk6k_V9IiN7-oiuCvnZpm8ZOAibljiYUYGyswx8cyg/exec';
    // fetch the apps script 
    fetch(url)
      .then(response => response.json())
      .then(data => {
       // loop through the data object json that was given and add it to a list of pictures which will be passed to the gallery  
        var item = []
        for (var photo = 0; photo < data.data.length; photo++) {
          item.push({ 
            src: data.data[photo].img_id,
            srct: data.data[photo].img_id,
            title: data.data[photo].desc
          })
          // console.log(data.data[photo])
        }
       // create the nanogallery2 object with the specific parameters that we want to use for the gallery 
        $("#my-gallery").nanogallery2({
           thumbnailWidth: 'auto',
            thumbnailHeight: 400,
            // gallerySorting: 'titleAsc',
            thumbnailBorderVertical: 3,
            thumbnailBorderHorizontal: 3,
            colorScheme: {
              thumbnail: {
                background: 'rgba(33,33,33,1)', 
                borderColor: '#000'
              }
            },
            thumbnailDisplayTransition: 'slideUp',
            thumbnailLabel: {
              position: 'overImageOnBottom',
              display: false
            },
            thumbnailAlignment: 'center',
            thumbnailOpenImage: true,
            viewerZoom: false,
            gallerySwipe: true, 
            items: item
        });
        $(".loader").remove()
      });
  }
});