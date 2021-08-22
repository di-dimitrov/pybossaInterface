<style>
  #image_text2{
    padding: 0px 7px;
    white-space: pre-wrap;
    color: black;
    font-size:20px; 
    width:auto; 
    height: 400px;
    /*overflow-wrap: break-word; */
    border-style: double;
    text-align: justify;
    text-justify: inter-word;
    overflow:auto;
  }
  h3{
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
  
  h3.header1, h3.header2, h3.header3{
    font-weight:700;
  }

  ul.custom{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul.locthm{
    list-style-type: none;
    /*position:relative;*/
    padding-left: 0;
    margin-left: 0;
    margin-bottom: 8px;
  }
  #selected_themes{
    margin-top: 10px;
  }
  label {
    float: left;
    padding: 0 1em;
    text-align: center;
  }

  ul.custom li.custom {
    border: 1px solid #ddd;
    margin-top: -1px; /* Prevent double borders */
    background-color: #f6f6f6;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
    position: relative;
    white-space: initial;
  }

  li.locthm {
    float:left;
    border: 1px solid #ddd;
    /*margin-top: -1px;*/ /* Prevent double borders */
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    background-color: #f6f6f6;
    padding: 5px 20px 5px 2px;
    text-decoration: none;
    font-size: 14px;
    color: black;
    /*display: inline;*/
    position: relative;
  }

  li.locthm.activated {
    background-color: #949699 !important;
  }

  custom:hover {
    background-color: #eee;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0%;
    padding: 4px 6px;
    color: black;
    transform: translate(0%, -50%);
  }

  .close:hover {background: #bbb;}
  .dropbtn {
    color: white;
    padding: 2px 8px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
  .close_tag {
    cursor: pointer;
    position: absolute;
    top: 95%;
    right: 0%;
    padding: 4px 6px;
    color: black;
    transform: translate(0%, -50%);
  }

  .close_tag:hover {background: #bbb;}

  #thm {
    background-color: #FFEC88;
    color: #605857;
    font-weight: bold;
    cursor: default;
  }

  #loc {
    background-color: #BBFBFF;
    color: #605857;
    font-weight: bold;
    cursor: default;
  }
  .dropbtn {
    background-color: #04AA6D;
    color: white;
    padding: 2px 8px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* Dropdown button on hover & focus */
  .dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
  }

  /* The search field */
  #themes_input,#locations_input  {
    margin-top:20px;
    display:block;
    box-sizing: border-box;
    /*background-image: url('https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png');*/
    background-image: url('http://52.174.125.72:5001/static/img/searchicon1.jpg');
    background-size: 13%;
    background-origin: content-box;
    background-position: right center;
    background-repeat: no-repeat;
    background-color: #f6f6f6;
    border-radius: 15px;
    font-size: 16px;
    padding: 14px 20px 12px 45px;
    border: none;
    border-bottom: 1px solid #ddd;
  }

  /* The search field when it gets focus/clicked on */
  #myInput:focus {outline: 3px solid #ddd;}

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 230px;
    border: 1px solid #ddd;
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #f1f1f1}

  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {display:block;}
  #selected{display:none;}
  #submit{margin-top:10px}
  #loc{margin-top:35px}
  #thm{margin-top:10px}

  .labeled {
    vertical-align:top;
    text-align:center;
    display: inline-block;
    position: relative;
    padding-left: 15px;
    padding-top: 20px;
    margin-bottom: 12px;
    margin-top:20px;
    cursor: pointer;
    font-size: 17px;
    /*font-style: bold:*/
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .labeled input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: -30%;
    padding-top:18px;
    height: 33px;
    width: 33px;
    background-color: white;
    border-radius: 50%;
    border-style: solid;
    border-color: darkgrey;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  /* On mouse-over, add a grey background color */
  .labeled:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .labeled input:checked ~ .checkmark {
    background-color: white;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .labeled input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .labeled .checkmark:after {
    top: 50%;
    left: 50%;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: var(--dot);
    transform: translate(-50%, -50%);
  }
  /*#direction, #urgency, #action{
  display: grid;
  grid-template-areas:
  'header header header'
  'menu main main main right right'
  'menu footer footer footer footer footer';
}*/
  /*h3#direction, h3#urgency, h3#action{
  grid-column-start: 1;
  grid-column-end: 2;
}*/
  /*label#direction, label#urgency, label#action{
  grid-row-start:2;
}*/
  #direction{
    display: grid;
     grid-auto-columns: 1fr;
   grid-auto-flow: column;
    grid-template-areas:
      'header1 header1 header1'
      'negative neutral positive';

  }
  #urgency{
    display: grid;
     grid-auto-columns: 1fr;
   grid-auto-flow: column;
    grid-template-areas:
    'header2 header2 header2'
      'urgency1 urgency2 urgency3';
  }
  #action{
    display: grid;
     grid-auto-columns: 1fr;
   grid-auto-flow: column;
    grid-template-areas:
    'header3 header3 header3'
      'action1 action2 action3';
  }
  .break {
    flex-basis: 100%;
    height: 0;
  }
  /*div#direction > * {
  flex: 1 1 0;
}
  div#urgency > *{
  flex: 1 1 0;
}
  div#action > *{
  flex: 1 1 0;
}*/
  .header1 { grid-area: header1; }
  .header2 { grid-area: header2; }
  .header3 { grid-area: header3; }


  .item1 {grid-area: negative;}
  .item2 {grid-area: neutral;}
  .item3 {grid-area: positive;}

  .item4 {grid-area: urgency1;}
  .item5 {grid-area: urgency2;}
  .item6 {grid-area: urgency3;}

  .item7 {grid-area: action1;}
  .item8 {grid-area: action2;}
  .item9 {grid-area: action3;}

</style>
<div class="row skeleton" id="skeleton" style="margin-top:-60px; margin-bottom: -60px;"> <!-- Start Skeleton Row-->
  <br>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 id="article_title">

        </h3>
        <!--- <a id="link"><img style="margin-top: 1.5em; margin-left: 0; margin-right: 0;" id="photo" src=""  width="352" height="400" ></a>-->
        <h3>Text to perform selection on:</h3>
        <div id="image_text2">Image Text </div>
      </div><!-- End of Photo DIV (columnt) -->
    </div>
    <div class="row">
      <div id="answers_data">
        <div class="col-lg-7">
          <div id="text_tech">

            <div class="dropdown">
              <button  class="dropbtn" id="thm">THEMES</button>
              <input type="text" placeholder="choose..." id="themes_input" onclick="myFunction('themes')" onkeyup="filterFunction('themes_input','themes',event)">

              <div id="themes" class="dropdown-content">
              </div>
              <div id="selected_themes">
                <ul id="selections_themes" class="locthm">
                </ul>
              </div>
            </div>
            <br>
            <div class="dropdown">
              <button class="dropbtn" id="loc">LOCATIONS</button>

              <input type="text" placeholder="choose..." id="locations_input" onclick="myFunction('locations')" onkeyup="filterFunction('locations_input','locations',event)">

              <div id="locations" class="dropdown-content">
              </div>
              <div id="selected_locations">
                <ul id="selections_locations" class="locthm">
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container1 col-lg-5 ">
          <div id="direction">
            <h3 class="header1">SENSE OF DIRECTION</h3>
            <!--<div class="break"></div>-->

            <label class="labeled item1">
              <input data-id="negative_direction" type="radio" name="tags" value="Negative"/>
              Negative
              <span class="checkmark"></span>
            </label>               
            <label class="labeled item2">
              <input data-id="neutral_direction" type="radio" name="tags" value="Neutral"/>
              Neutral
              <span class="checkmark"></span>
            </label>
            <label class="labeled item3">
              <input data-id="positive_direction" type="radio" name="tags" value="Positive"/>
              Positive
              <span class="checkmark"></span>
            </label>

          </div>
          <div id="urgency">
            <h3 class="header2" >SCALE OF URGENCY</h3>
            <!--<div class="break"></div>-->
            <label  class="labeled item4">Neutral<br>
              <input data-id="neutral_urgency" type="radio" name="tags" value="Neutral"/>
              <span class="checkmark"></span>
            </label>
            <label class="labeled item5">Medium<br>
              <input data-id="medium_urgency" type="radio" name="tags" value="Medium"/>
              <span class="checkmark"></span>
            </label>
            <label class="labeled item6">Strong<br>
              <input data-id="strong_urgency" type="radio" name="tags" value="Strong"/>
              <span class="checkmark"></span>
            </label>
          </div>
          <div id="action">
            <h3 class="header3" >GRADE OF ACTION</h3>
            <!--<div class="break"></div>-->

            <label class="labeled item7">Other<br>
              <input data-id="other_action" type="radio" name="tags" value="Other"/>
              <span class="checkmark"></span>
            </label>
            <label class="labeled item8">Action advised<br>
              <input data-id="advised_action" type="radio" name="tags" value="Action advised"/>
              <span class="checkmark"></span>
            </label>
            <label class="labeled item9">Action taken<br>
              <input data-id="taken_action" type="radio" name="tags" value="Action taken"/>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-lg-12">
      <!--<p>You have completed: <span id="done" class="label label-info"></span> out of-->
      <!-- Progress bar for the user -->
      <!-- <span id="total" class="label label-info"></span></p>
<div class="progress progress-striped">
<div id="progress" rel="tooltip" title="#" class="bar" style="width: 0%;"></div>
</div> -->

      <!-- Feedback items for the user -->
      <div class="d-flex text-center" id="submit"> <!-- Start DIV for the submission buttons -->
        <!-- If the user clicks this button, the saved answer will be value="yes"-->
        <button class="btn btn-success btn-submit btn-lg"  value='Yes'><i class="icon icon-white icon-thumbs-up"></i> Submit</button>
        <button id='show_details' class="btn btn-lg" onclick="show_hide()"><i class="icon icon-white icon-thumbs-up"></i>Show details</button>

        <!---<button class="btn btn-success btn-lg"  id="clear" value='Clear'><i class="icon icon-white icon-thumbs-up"></i> Clear selection</button>--->
        <!-- If the user clicks this button, the saved answer will be value="no"-->
      </div><!-- End of DIV for the submission buttons -->
    </div>
    <div class="row">
      <div id="selected" class="col-lg-12">
        <h3>Currently selected:</h3>
        <ul id="selections" class="custom">
        </ul>
      </div>
    </div>
  </div>
</div><!-- End of Skeleton Row -->
<script src="http://52.174.125.72:5001/static/css/annotator-full.min.js"></script>
<script type="text/javascript">

  'use strict';

  function show_hide() {
    var x = document.getElementById("selected");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function processDataAndFillArray(allText,array) {
    console.log(allText)
    var taxonomy = allText.split(';');
    for (var i = 0; i < taxonomy.length;i++){
      array.push(taxonomy[i])
    }
    console.log(array)
  }
  var entityPositions = [];
  var currentTag = {};
  var locations_arr = []
  var themes_arr = []
  var colors = {
    'negative_direction': '#FF5247',
    'neutral_direction': '#FFA700',
    'positive_direction' : '#13DF0F',
    'neutral_urgency': '#DAE1FF',
    'medium_urgency' : '#9AB0FF',
    'strong_urgency':'#3F6AFF',
    'other_action':'#EFD6FF',
    'advised_action':'#D289F7',
    'taken_action':'#9F00FF',
    'locations': '#BBFBFF',
    'themes':'#FFEC88'
  }
  function getColor(id) {
    //var letters = '0123456789ABCDEF';
    //var color = '#';
    //for (var i = 0; i < 6; i++) {
    //  color += letters[Math.floor(Math.random() * 16)];
    //}
    //return color;
    return colors[id]

  };
  function myFunction(elId) {
    var drpdwn = $('#' + elId)
    var search;
    if (drpdwn.children.length > 0){
      search = drpdwn.children()[0]
      drpdwn.not('.input').empty()
    }
    //drpdwn.append(search)
    if (elId === 'locations'){
      locations_arr.sort()
      locations_arr.forEach(element => createSelectableDiv(element,drpdwn))
    }else{
      themes_arr.sort()
      themes_arr.forEach(element => createSelectableDiv(element,drpdwn))
    }
    document.getElementById(elId).classList.toggle("show");
  }

  function filterFunction(input,dropdown,event) {
    var key=event.keyCode || event.which;
    var input = document.getElementById(input);
    if (key == '13'){
      console.log(dropdown)

      createThemeLocationTag(input.value,$('#' + dropdown))

    }else{
      var filter, ul, li, div_el,div, i, txtValue;
      filter = input.value.toUpperCase();
      div = document.getElementById(dropdown);
      div_el = div.getElementsByTagName("div");
      for (i = 0; i < div_el.length; i++) {
        txtValue = div_el[i].textContent || div_el[i].innerText || div_el[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          div_el[i].style.display = "";
        } else {
          div_el[i].style.display = "none";
        }
      }
    }
  }
  var debounce = debounce || function (func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function hideAll() {
    $("[data-toggle=popover]").each(function () {
      var popover = $(this).data('bs.popover');
      if (popover.tip().is(':visible')) popover.hide();
    });
  }

  $("[data-toggle=popover]")
  .popover({animation: false, container: document.body, delay: 50, html: true, trigger: 'manual', placement: 'auto right'})
  .each(function () {
    var popover = $(this).data('bs.popover');
    var $tip = popover.tip();
    var delay = popover.options.delay || 0;
    var showDelay = delay.show || delay || 0;
    var hideDelay = delay.hide || delay || 0;
    var showTimeout = null
    var hideTimeout = null;


    $(this).add($tip).hover(function show() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      } else if (!$tip.is(':visible')) {
        hideAll();
        showTimeout = setTimeout(function () {
          popover.show();
          showTimeout = null;
        }, showDelay);
      }
    }, function hide() {
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      } else if ($tip.is(':visible')) {
        hideTimeout = setTimeout(function () {
          popover.hide();
          hideTimeout = null;
        }, hideDelay);
      }
    });
  });
  function removeEntity(start, end){
    return entityPositions.filter(item => item["start"] != start && item["end"] != end);
  }
  function removeSelectableElement(el){
    var el_txt = el.childNodes[0].textContent;
    var el_type = el.parentNode.id;
    if (el_type.includes('location')){
      locations_arr.push(el_txt)
    }
    else{
      themes_arr.push(el_txt)
    }
    var spans = $('.thm_' + el_txt.toLowerCase())
    console.log(spans)
    $.each($('span.thm_' + el_txt.toLowerCase()), function( key, value ) { 
      var el = value
      var text = el.innerText
      var start = el.getAttribute('data-startOffset')
      var end = el.getAttribute('data-endOffset')
      el.replaceWith(document.createTextNode(text))
      entityPositions = removeEntity(start, end) 
      console.log(entityPositions)
    }); 
    $.each($('li.thm_' + el_txt.toLowerCase()), function( key, value ) {
      value.remove()
    });
  }

  function createThemeLocationTag(el_txt,domElement){
    var domElId
    if (domElement[0].id == 'locations'){
      domElId = 'selections_locations'
      locations_arr = locations_arr.filter(ell => ell != el_txt)
    }else{
      domElId = 'selections_themes'
      themes_arr = themes_arr.filter(ell => ell != el_txt)
    }
    var close = document.createElement("span");
    var thm_loc = document.createElement("li");
    thm_loc.onclick = function() {markAsActive(thm_loc,el_txt,domElement[0].id)}
    thm_loc.setAttribute('class','locthm a4b2c3')
    thm_loc.setAttribute('id',el_txt.toLowerCase())
    thm_loc.innerHTML = el_txt
    close.setAttribute('class','close')
    close.innerHTML = '&times;'
    close.onclick = function() {removeSelectableElement(thm_loc); thm_loc.remove()}
    thm_loc.append(close)
    $('#' + domElId).append(thm_loc)
  }
  function markAsActive(li,id,type){
    if (li.classList.contains('activated')){
      li.classList.remove('activated')
      currentTag = {}
    } else {
      if($('input[name=tags]:checked').length != 0){
        $('input[name=tags]').removeAttr('checked');
      }
      $.each($('.a4b2c3'), function( key, value ) {value.classList.remove('activated')}); 
      li. classList.add("activated")
      currentTag["color"] = getColor(type);
      currentTag["name"] = id;
      currentTag["id"] = id.toLowerCase();
      currentTag["category"] = type;
    }
  }
  function createSelectableDiv(divContent,domElement){
    var dv = document.createElement("div");
    dv.onclick = function () {createThemeLocationTag(divContent,domElement); dv.remove()}
    dv.innerHTML=divContent;

    domElement.append(dv);
  }

  $(window).on('scroll resize', debounce(hideAll, 100, true));
  (function() {
    pybossa.taskLoaded(function(task, deferred) {
      deferred.resolve(task);
    });

    $(document).ready(function () {
      $.ajax({
        type: "GET",
        url: "http://52.174.125.72:5001/static/files/location_taxonomy.csv",
        dataType: "text",
        success: function(data) {processDataAndFillArray(data,locations_arr);}
      });
      $.ajax({
        type: "GET",
        url: "http://52.174.125.72:5001/static/files/theme_taxonomy.csv",
        dataType: "text",
        success: function(data) {processDataAndFillArray(data,themes_arr);}
      });
      $.each(colors,function(k, v){if (k != 'themes' && k!= 'locations'){$('input[data-id=' + k +']').parent().children().last().attr('style','border-color:'+ v)}})
      $.each(colors,function(k, v){if (k != 'themes' && k!= 'locations'){console.log(k + v); console.log($('input[data-id=' + k +']').parent().children().last().get(0)); $('input[data-id=' + k +']').parent().children().last().get(0).style.setProperty("--dot", v)}})
      $("input[type=radio][name=tags]").change(function () {
        console.log($(this).data(), $(this).val())
        $('.activated').removeClass('activated')
        var item = $(this).data('id')
        var color =  getColor($(this).data('id'));
        console.log($('input[data-id=' + item +']'))
        console.log($(this).parent().parent().attr('id'))
        //label[for='"+$element.attr('id')+"']
        //$('label[for=' + item +']').attr('style','color:#fff; background-color:'+ color)
        currentTag["color"] = color;
        currentTag["name"] = $(this).val();
        currentTag["id"] = $(this).data('id');
        currentTag["category"] = $(this).parent().parent().attr('id')

      });
      $(document).on('click','#clear', function(){
        $('input[name=tags]:checked').attr('checked',false);
      });
      $(document).click(function (e){
        var container = $("#themes_input");
        var container2 = $("#locations_input");

        if (!container.is(e.target) && !container2.is(e.target))
        {
          console.log("WHAAAAAAAAAAAAAAAAAAAAAAaa")
          document.getElementById('themes').classList.remove("show");
          document.getElementById('locations').classList.remove("show");
        }

      })

      $(document).on('mouseup', '#image_text2', function (evt) {
        if($('input[name=tags]:checked').length != 0) {
          this.startOffset = 0;
          this.endOffset = 0;
          this.entityPositions = entityPositions;
          this.currentTag = currentTag;
          var that = this;
          setRange(that,'radio-tag');
        }else if ($('.activated').length != 0){
          this.startOffset = 0;
          this.endOffset = 0;
          this.entityPositions = entityPositions;
          this.currentTag = currentTag;
          var that = this;
          setRange(that,'thm_' + currentTag.id);
          $('.activated').css('background-color', currentTag.color);
        }
      });

      $(document).on('click', '#save', function(){
        saveEntity(entityPositions);
      });

    });


    function untag(tag_span,tag_info) {
      if($('input[name=tags]:checked').length === 0 && $('.activated').length === 0) { 
        var text = tag_span.innerText;
        var start = tag_span.getAttribute('data-startOffset');
        var end = tag_span.getAttribute('data-endOffset');
        entityPositions = removeEntity(start, end);
        tag_span.replaceWith(document.createTextNode(text));
        tag_info.remove()
      }
    };
    function pushIfAbsent(element){
      for(var el of entityPositions){
        console.log(el)
        console.log(element)
        if(el.start === element.start && el.end === element.end && el.tags === element.tags){
          console.log('aaaaaa')
          console.log(el)
          return false;
        }
      }
      entityPositions.push(element)
      return true;
    }

    function stringify_withSpaces(obj) {
      let result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents
      //result = result.replace('/^ +/gm', " "); // remove all but the first space for each line
      //result = result.replace('/\n/g', ""); // remove line-breaks
      //result = result.replace('/{ /g', "{").replace('/ }/g', "}"); // remove spaces between object-braces and first/last props
      //result = result.replace('/\[ /g', "[").replace('/ \]/g', "]"); // remove spaces between array-brackets and first/last items
      return result;
    }
    function isElementStartBeforeAnother(el,other_el){
      return el.start < other_el.start && el.end < other_el.end
    }
    function isElementStartAfterAnother(el,other_el){
      return el.start < other_el.end && el.end > other_el.end
    }
    function checkAndApplyOverlap(curr_element,color,new_class){
      for(var i = 0; i < entityPositions.length; i++){
        var old_el = entityPositions[i]
        if(isElementStartAfterAnother(curr_element,old_el)){
         //for(var j = 0; j<entityPositions.length; j++){
         //	var old_el_2 = entityPositions[j]
         //  if(isElementStartBeforeAnother(curr_element,old_el_2)){
         //     return { _true: true, position: 'between', tag_span, new_partial_span}
         //  }
         //}
          var tag_span = document.createElement("span");
          tag_span.setAttribute('class', 'tag '+ new_class + ' snd_span');
          tag_span.setAttribute('data-startOffset', curr_element.start);
          tag_span.setAttribute('data-endOffset', old_el.start - 1);
          tag_span.setAttribute('style', 'color:#000; background-color:'+ color);
          tag_span.innerHTML = curr_element.text.substr(old_el.end - curr_element.start, curr_element.end-old_el.end);
          //tag_span.onclick = function() {untag(tag_span,tag_info);} // for IE
          var new_partial_span = {'start': old_el.start, 
                'end': curr_element.end,
                'tags': curr_element.tags,
                'text': curr_element.text.substr(0,old_el.end - curr_element.start),
               }
          return { _true: true, position: 'start', tag_span, new_partial_span}
        }
        else if(isElementStartBeforeAnother(curr_element,old_el)){
          var tag_span = document.createElement("span");
          tag_span.setAttribute('class', 'tag '+ new_class + ' snd_span');
          tag_span.setAttribute('data-startOffset', old_el.end +1);
          tag_span.setAttribute('data-endOffset', curr_element.end);
          tag_span.setAttribute('style', 'color:#000; background-color:'+ color);
          tag_span.innerHTML = curr_element.text.substr(old_el.end - curr_element.start, curr_element.end-old_el.end);
          //tag_span.onclick = function() {untag(tag_span,tag_info);} // for IE
          var new_partial_span = {'start': curr_element.start+1, 
                'end': old_el.end,
                'tags': curr_element.tags,
                'text': curr_element.text.substr(0,old_el.end - curr_element.start),
               }
          return { _true: true, position:'end', tag_span, new_partial_span}
         }
      }
    return{_true:false}
    }
    function setRange(that,new_class){
      let start;
      let end;
      let selected_word;
      let range;
      if (window.getSelection) {
        range = window.getSelection().getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        selected_word = range.toString();
        preSelectionRange.selectNodeContents(that);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        console.log(preSelectionRange.toString().length)
        start = preSelectionRange.toString().length;
        end = start + selected_word.length;
      } else if (document.selection && document.selection.type !== 'Control') {
        const selectedTextRange = document.selection.createRange();
        const preSelectionTextRange = document.body.createTextRange();
        preSelectionTextRange.moveToElementText(that);
        preSelectionTextRange.setEndPoint('EndToStart', selectedTextRange);
        start = preSelectionTextRange.text.length;
        end = start + selectedTextRange.text.length;
      }
      that.startOffset = start;
      that.endOffset = end;
      that.text = selected_word;
      var isValidRange = validRange(that);
      var el = {'start': that.startOffset, 
                'end': that.endOffset,
                'tags': currentTag.name,
                'text': that.text,
               }
      if (isValidRange){
        var pushed = pushIfAbsent(el)
        var overlap_result = checkAndApplyOverlap(el,that.currentTag.color,new_class)
        if(overlap_result._true){
          el = overlap_result.new_partial_span
        }
        if(pushed){
          var tag_span = document.createElement("span");
          var tag_info = document.createElement("li");
          //var tag_span_brackets = document.createElement("span")
          //tag_span_brackets.setAttribute('style', 'font-weight: bold; color:#000; background-color:'+ that.currentTag.color);
          //tag_span_brackets.innerHTML = '[' + that.currentTag.category + '; ' + that.currentTag.name +']'
          tag_span.setAttribute('class', 'tag '+ new_class);
          tag_span.setAttribute('data-startOffset', el.start);
          tag_span.setAttribute('data-endOffset', el.end);
          tag_span.setAttribute('style', 'color:#000; background-color:'+ that.currentTag.color);
          tag_span.innerHTML = el.text;
          tag_span.onclick = function() {untag(tag_span,tag_info);} // for IE
          //tag_span.append(tag_span_brackets)
          var close = document.createElement("span");
          close.setAttribute('class','close')
          close.innerHTML = '&times;'
          close.onclick = function() {removeElement(tag_span,tag_info);}
          tag_info.setAttribute('class','custom '+ new_class)
          tag_info.innerHTML = stringify_withSpaces(el)
          tag_info.append(close)
          $("#selections").append(tag_info)
          range.deleteContents();
          if(overlap_result._true){
            overlap_result.tag_span.onclick = function() {untag(overlap_result.tag_span,tag_info);}
            range.insertNode(overlap_result.tag_span)
          }
          range.insertNode(tag_span);
        }
      }
    }
        function appendOverlaps(range, overlap_tag_span,other_tag_span){
          
        }
    function removeElement(selection,info){
      var text = selection.innerText;
      var start = selection.getAttribute('data-startOffset');
      var end = selection.getAttribute('data-endOffset');
      entityPositions = removeEntity(start, end);
      selection.replaceWith(document.createTextNode(text));
      info.remove()
    }
    function validRange(that) {
      if (that.startOffset === that.endOffset) {
        return false;d
      }
      if (that.startOffset > that.innerText.length || that.endOffset > that.innerText.length) {
        return false;
      }
      if (that.startOffset < 0 || that.endOffset < 0) {
        return false;
      }
      return true;
    }
    pybossa.presentTask(function(task, deferred) {
      if ( !$.isEmptyObject(task) ) {
        loadUserProgress();
        //console.log("ADSDASDASDASDASDSADSAd"+ JSON.stringify(task.info['0']))
        //console.log("http://52.174.125.72:5001/static/img/"+task.info['0']['image']+ 'aaa')
        //$("#link").attr("href", "http://52.174.125.72:5001/static/img/" + task.info['0']['image']).load();
        //$("#photo").attr('src', "http://52.174.125.72:5001/static/img/" + task.info['0']['image']).load();
        $("#image_text2").html(task.info.title + '\n\n' + task.info.authors + '\n\n' +task.info.text)
        $("#article_title").html(task.info.title)
        $('#task-id').html(task.id);
        //$('.btn-submit').off('click').on('click', function(evt) {
        //  var submit = $(evt.target).attr("value");
        //  console.log($('#skeleton input[type=checkbox]:checked'))//Works
        //  console.log($('#skeleton textarea'))//Works
        //  var final_entities = JSON.stringify(entityPositions)
        //  if (typeof submit != 'undefined') {
        //    pybossa.saveTask( task.id, final_entities ).done(
        //      function( data ) {
        //        // Show the feedback div
        //        console.log("Hello")
        //        console.log(final_entities)
        //        $("#success").fadeIn();
        //        $("#selections").empty()
        //        entityPositions =[]
        //        $('input[name=tags]:checked').attr('checked',false);
        //        deferred.resolve();
        //        // Fade out the pop-up after a 1000 miliseconds
        //        setTimeout(function() { $("#success").fadeOut() }, 1000);
        //      }
        //    );
        //    $("#loading").fadeIn(500);
        //    if ($("#disqus_thread").is(":visible")) {
        //      $('#disqus_thread').toggle();
        //      $('.btn-disqus').toggle();
        //    }
        //  }
        //  else {
        //    $("#error").show();
        //  }
        //});
        //$("#loading").hide();
      }
      else {
        $(".skeleton").hide();
        $("#loading").hide();
        $("#finish").fadeIn(500);
      }
    });

    function loadUserProgress() {
      pybossa.userProgress('un_diplomatic_annotation').done(function(data){
        var pct = Math.round((data.done*100)/data.total);
        $("#progress").css("width", pct.toString() +"%");
        $("#progress").attr("title", pct.toString() + "% completed!");
        $("#progress").tooltip({'placement': 'left'});
        $("#total").text(data.total);
        $("#done").text(data.done);
        console.log('Dataaa')
        console.log(data)
        console.log(pct)
      });
    }
    pybossa.run('un_diplomatic_annotation')
  })();
</script>
