
const quizData = {
  html: [
    {
      question: "1. What does HTML stand for?",
      a: "Hyper Tool Markup Language",
      b: "Hyper Text Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Home Tool Markup Language",
      correct: "b"
    },
    {
      question: "2. Which tag is used for the largest heading?",
      a: "<heading>",
      b: "<h6>",
      c: "<h1>",
      d: "<head>",
      correct: "c"
    },
    {
      question: "3. Which tag is used to create a hyperlink?",
      a: "<link>",
      b: "<href>",
      c: "<a>",
      d: "<url>",
      correct: "c"
  },
  {
      question: "4. Which attribute specifies a link destination?",
      a: "src",
      b: "href",
      c: "link",
      d: "url",
      correct: "b"
  },
  {
      question: "5. Which tag defines a paragraph?",    
      a: "<p>",
      b: "<paragraph>",
      c: "<para>",
      d: "<div>",
      correct: "a"
  },
  {
      question: "6. Which tag inserts an image?",
      a: "<picture>",
      b: "<img>",
      c: "<image>",
      d: "<src>",
      correct: "b"
  },
  {
      question: "7. Which attribute provides alternative text for images?",
      a: "title",
      b: "alt",
      c: "name",
      d: "src",
      correct: "b"
  },
  {
      question: "8. Which tag creates a line break?",
      a: "<lb>",
      b: "<break>",
      c: "<br>",
      d: "<hr>",
      correct: "c"
  },
  {
      question: "9. Which tag creates a horizontal rule?",
      a: "<hr>",
      b: "<line>",
      c: "<br>",
      d: "<rule>",
      correct: "a"
  },
  {
      question: "10. Which tag defines a table row?",
      a: "<td>",
      b: "<th>",
      c: "<tr>",
      d: "<table>",
      correct: "c"
  },
  {
      question: "11. Which tag defines table data?",
      a: "<td>",
      b: "<tr>",
      c: "<th>",
      d: "<table>",
      correct: "a"
  },
  {
      question: "12. Which tag defines a table header cell?",
      a: "<thead>",
      b: "<th>",
      c: "<tr>",
      d: "<td>",
      correct: "b"
  },
  {
      question: "13. Which element is used for unordered lists?",
      a: "<ol>",
      b: "<line>",
      c: "<ul>",
      d: "<list>",
      correct: "c"
  },
  {
      question: "14. Which element represents a list item?",
      a: "<li>",
      b: "<ul>",
      c: "<ol>",
      d: "<list>",
      correct: "a"
  },
  {
      question: "15. Which tag is used for forms?",
      a: "<input>",
      b: "<form>",
      c: "<field>",
      d: "<data>",
      correct: "b"
  },
  {
      question: "16. Which input type hides characters?",
      a: "text",
      b: "email",
      c: "password",
      d: "hidden",
      correct: "c"
  },
  {
      question: "17. Which tag defines table data?",
      a: "<td>",
      b: "<tr>",
      c: "<th>",
      d: "<table>",
      correct: "a"
  },
  {
      question: "18. Which tag defines a table header cell?",
      a: "<thead>",
      b: "<th>",
      c: "<tr>",
      d: "<td>",
      correct: "b"
  },
  {
      question: "19. Which element is used for unordered lists?",
      a: "<ol>",
      b: "<ul>",
      c: "<li>",
      d: "<list>",
      correct: "b"
  },
  {
      question: "20. Which element represents a list item?",
      a: "<li>",
      b: "<ul>",
      c: "<ol>",
      d: "<list>",
      correct: "a"
  },
  {
      question: "21. Which tag groups form elements?",
      a: "<group>",
      b: "<fieldset>",
      c: "<section>",
      d: "<legend>",
    correct: "b"
  },
  {
      question: "22. Which tag defines a label for an input?",
      a: "<label>",
      b: "<span>",
      c: "<p>",
      d: "<name>",
    correct: "a"
  },
      {
      question: "23. Which attribute makes an input mandatory?",
      a: "required",
      b: "validate",
      c: "mustfill",
      d: "important",
    correct: "a"
  },
  {
      question: "24. Which tag defines navigation links?",
      a: "<menu>",
      b: "<navigate>",
      c: "<nav>",
      d: "<links>",
    correct: "c"
  },
  {
      question: "25. Which tag defines a footer?",
      a: "<bottom>",
      b: "<footer>",
      c: "<end>",
      d: "<section>",
    correct: "b"
  },
    {
      question: "26. Which attribute makes an input mandatory?",
      a: "required",
      b: "validate",
      c: "mustfill",
      d: "important",
    correct: "a"
  },
      {
      question: "27. Which tag defines navigation links?",
      a: "<menu>",
      b: "<navigate>",
      c: "<nav>",
      d: "<links>",
    correct: "c"
  },
    {question: "28. Which tag defines a footer?",
      a: "<bottom>",
      b: "<footer>",
      c: "<end>",
      d: "<section>",
    correct: "b"
  },
    {question: "29. Which tag is semantic?",
      a: "<div>",
      b: "<span>",
      c: "<article>",
      d: "<b>",
    correct: "c"
  },  
    {question: "30. Which tag defines a section?",
      a: "<div>",
      b: "<span>",
      c: "<section>",
      d: "<article>",
    correct: "c"
  },
      {
      question: "31. Which tag embeds a video?",
      a: "<media>",
      b: "<movie>",
      c: "<video>",
      d: "<embed>",
    correct: "c"
  },
  {
      question: "32. Which attribute enables autoplay for video?",
      a: "autoplay",
      b: "play",
      c: "start",
        d: "loop",
    correct: "a"
  },
  {
      question: "33. Which attribute makes a video loop?",
      a: "start",
      b: "play",
      c: "autoplay",
      d: "loop",
    correct: "d"
  },    
  {
      question: "34. Which tag defines a caption for a video?",
      a: "<caption>",
      b: "<figcaption>",
      c: "<video-caption>",
      d: "<title>",
    correct: "b"
  },
      {
      question: "35. Which tag is used for bold text (semantic)?",
      a: "<b>",
      b: "<strong>",
      c: "<bold>",
      d: "<em>",
    correct: "b"
  },
  {question: "36. Which tag is used for italic text (semantic)?",
      a: "<i>",
      b: "<em>",
      c: "<bold>",
      d: "<mark>",
    correct: "b"
  },
      {
      question: "37. Which tag emphasizes text?",
      a: "<italic>",
      b: "<em>",
      c: "<i>",
      d: "<mark>",
    correct: "b"
  },
  {question: "38. Which tag is used for italic text (non-semantic)?",
      a: "<italic>",
      b: "<em>",
      c: "<i>",
      d: "<mark>",
    correct: "c"
  },
    {question: "39. Which tag is used for highlighted text?",
      a: "<highlight>",
      b: "<mark>",
      c: "<em>",
      d: "<strong>",
    correct: "b"
  },
  {question: "40. Which tag defines metadata?",
      a: "<meta>",
      b: "<data>",
      c: "<head>",
      d: "<info>",
    correct: "a"
  },
  {question: "41. Which tag is used for non-semantic grouping?",
      a: "<div>",
      b: "<span>",
      c: "<section>",
      d: "<info>",
    correct: "a"
  },
  {question: "42. Which tag is used for inline grouping?",
      a: "<div>",
      b: "<span>",
      c: "<section>",
      d: "<info>",
    correct: "b"
  },
    {question: "43. Which tag is used to link an external CSS file?",
      a: "<css>",
      b: "<style>",
      c: "<link>",
      d: "<script>",
    correct: "c"
  },
    {question: "44. Which attribute opens a link in a new tab?",
      a: "new",
      b: "target='_blank'",
      c: "open='new'",
      d: "rel='new'",
    correct: "b"
  },
  {question: "45. Which tag defines the document head?",
      a: "<html>",
      b: "<head>",
      c: "<main>",
      d: "<body>",
    correct: "b"
  },
    {question: "46.Which tag defines the document body?",
      a: "<html>",
      b: "<head>",
      c: "<main>",
      d: "<body>",
    correct: "d"
  },
    {question: "47. Which HTML version introduced semantic elements?",
      a: "HTML3",
      b: "HTML4",
      c: "XHTML",
      d: "HTML5",
    correct: "d"
  },
    {question: "48. Which tag defines a section in a document?",
      a: "<div>",
      b: "<span>",
      c: "<section>",
      d: "<article>",
    correct: "c"
  },
    {question: "49. Which is a list attribute that specifies the type of list marker?",
      a: "type",
      b: "marker",
      c: "list-style",
      d: "bullet",
    correct: "a"
  },
    {question: "50. Which tag defines a self-closing element?",
      a: "<self>",
      b: "<close>",
      c: "<empty>",
      d: "<br>",
    correct: "d"
  }
  ],

  css: [
    {
      question: "1. Which property changes text color?",
      a: "font-color",
      b: "text-color",
      c: "color",
      d: "fgcolor",
      correct: "c"
    },
    {question: "2. What does CSS stand for?",
      a: "Creative Style Sheets",
      b: "Colorful Style Sheets",
      c: "Cascading Style Sheets",
      d: "Computer Style Sheets",
    correct: "c"
  },
  {question: "3. Which selector targets all <p> elements?",
      a: ".p",
      b: "#p",
      c: "p",
      d: "*p",
    correct: "c"
  },
  {question: "4. Which symbol represents a class selector?",
      a: "#",
      b: ".",
      c: "*",
      d: "&",
    correct: "b"
  },
  {question: "5. Which symbol represents an ID selector?",
      a: ".",
      b: "*",
      c: "#",
      d: "%",
    correct: "c"
  },
  {question: "6. Which property sets background color?",
      a: "bgcolor",
      b: "background-color",
      c: "color",
      d: "background",
    correct: "b"
  },
  {question: "7. Which property controls spacing outside an element?",
      a: "margin",
      b: "padding",
      c: "border",
      d: "gap",
    correct: "a"
  },
  {question: "8. Which unit is relative to the font size?",
      a: "px",
      b: "cm",
      c: "em",
      d: "mm",
    correct: "c"
  },
  {question: "9. Which property controls the space between flex items?",
      a: "margin",
      b: "padding",
      c: "border",
      d: "gap",
    correct: "d"
  },
  {question: "10. Which property controls spacing inside an element?",
      a: "margin",
      b: "padding",
      c: "border",
      d: "gap",
    correct: "b"
  },
  {question: "11. Which symbol represents an ID selector?",
      a: ".",
      b: "*",
      c: "#",
      d: "%",
    correct: "c"
  },
  {question: "12. Which property sets element width?",
      a: "size",
      b: "width",
      c: "length",
      d: "scale",
    correct: "b"
  },
  {question: "13. Which property makes text bold?",
      a: "font-style",
      b: "font-weight",
      c: "text-style",
      d: "bold",
    correct: "b"
  },
  {question: "14. Which property aligns text?",
      a: "text-align",
      b: "align-text",
      c: "font-align",
      d: "content-align",
    correct: "a"
  },
  {question: "15. Which value centers text?",
      a: "middle",
      b: "center",
      c: "central",
      d: "align-center",
    correct: "b"
  },
  {question: "16. Which property hides overflow?",
      a: "hidden",
      b: "overflow: hidden",
      c: "display: none",
      d: "visibility: hidden",
    correct: "b"
  },
  {question: "17. Which display value removes an element from layout?",
      a: "block",
      b: "inline",
      c: "none",
      d: "hidden",
    correct: "c"
  },
  {question: "18. Which property controls element visibility?",
      a: "display",
      b: "visibility",
      c: "opacity",
      d: "z-index",
    correct: "b"
  },
  {question: "19. Which property makes elements flexible?",
      a: "display: flex",
      b: "position: flex",
      c: "float: flex",
      d: "flexbox: true",
    correct: "a"
  },
  {question: "20. Which property controls element stacking order?",
      a: "z-index",
      b: "stack-order",
      c: "layer",
      d: "order",
    correct: "a"
  },
  {question: "21. Which property aligns items horizontally in flexbox?",
      a: "align-items",
      b: "justify-content",
      c: "flex-direction",
      d: "gap",
    correct: "b"
  },
  {question: "22. Which property aligns items vertically in flexbox?",
      a: "justify-content",
      b: "flex-flow",
      c: "align-items",
      d: "direction",
    correct: "c"
  },
  {question: "23. Which property sets font type?",
      a: "font",
      b: "font-family",
      c: "font-style",
      d: "font-name",
    correct: "b"
  },
  {question: "24. Which property adds shadow to text?",
      a: "box-shadow",
      b: "text-shadow",
      c: "shadow-text",
      d: "font-shadow",
    correct: "b"
  },
  {question: "25. Which property controls element opacity?",
      a: "opacity",
      b: "visibility",
      c: "display",
      d: "z-index",
    correct: "a"
    },
    {question: "26. Which property rounds corners?",
      a: "border-round",
      b: "corner-radius",
      c: "border-radius",
      d: "radius",
    correct: "c"
  },
  {question: "27. Which position value fixes an element on screen?",
      a: "absolute",
      b: "relative",
      c: "fixed",
      d: "sticky",
    correct: "c"
  },
  {question: "28. Which pseudo-class triggers on hover?",
      a: ":active",
      b: ":focus",
      c: ":hover",
      d: ":visited",
    correct: "c"
  },
  {question: "29. Which property animates changes smoothly?",
      a: "transform",
      b: "animation",
      c: "transition",
      d: "motion",
    correct: "c"
  },
  {question: "30. Which value makes an element inline but allows width/height?",
      a: "block",
      b: "inline",
      c: "inline-block",
      d: "flex",
    correct: "c"
  },
  {question: "31. Which property changes cursor style?",  
      a: "mouse",
      b: "cursor",
      c: "pointer",
      d: "hover",
    correct: "b"
  },
  {question: "32. Which property controls element overflow?",
      a: "overflow",
      b: "display",
      c: "visibility",
      d: "z-index",
    correct: "a"
  },
  {question: "33. Which unit is viewport-based?",
      a: "px",
      b: "em",
      c: "vw",
      d: "pt",
    correct: "c"
  },
  {question: "34. Which rule applies styles only on screens?",
      a: "@screen",
      b: "@media",
      c: "@device",
      d: "@display",
    correct: "b"
  },
  {question: "35. Which property controls element position?",
      a: "position",
      b: "display",
      c: "float",
      d: "layout",
    correct: "a"
  },
  {question: "36. What is  float?",
      a: "A property that allows elements to be taken out of normal flow and positioned to the left or right",
      b: "A property that controls element visibility",
      c: "A property that sets element width",
      d: "A property that controls element stacking order",
    correct: "a"
  },
  {question: "37. Which property hides element but keeps space?",
      a: "display: none",
      b: "opacity: 0",
      c: "visibility: hidden",
      d: "overflow: hidden",
    correct: "c"
  },
  {question: "38. Which property controls element layering?",
      a: "z-index",
      b: "stack-order",
      c: "layer",
      d: "order",
    correct: "a"
  },
  {question: "39. Which property sets element height?",
      a: "size",
      b: "height",
      c: "length",
      d: "scale",
    correct: "b"
  },
  {question: "40. Which property controls element layout?",
      a: "display",
      b: "position",
      c: "float",
      d: "layout",
    correct: "a"
  },
  ],

  js: [
    {
      question: "1.Which keyword declares a constant?",
      a: "var",
      b: "let",
      c: "const",
      d: "static",
      correct: "c"
    },
    {question: "2. Which method outputs to the console?",
      a: "console.print()",
      b: "console.log()",
      c: "console.write()",
      d: "console.output()",
    correct: "b"
  },  
  {question: "3. Which symbol is used for comments?",
      a: "//",
      b: "/* */",
      c: "#",
      d: "<!-- -->",
    correct: "a"
  },  
  {question: "4. Which method converts a string to a number?",
      a: "Number()",
      b: "parseInt()",
      c: "toNumber()",
      d: "convert()",
    correct: "b"
  },  
  {question: "5. Which keyword declares a variable with block scope?",
      a: "var",
      b: "let",
      c: "const",
      d: "static",
    correct: "b"
  },
  {question: "6. Which method adds an element to the end of an array?",
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()",
    correct: "a"
  },
  {question: "7. Which method removes the last element of an array?",
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()",
    correct: "b"
  },
  {question: "8. Which method removes the first element of an array?",
      a: "push()",
      b: "pop()",
      c: "shift()", 
      d: "unshift()",
    correct: "c"
  },
  {question: "9. Which method adds an element to the beginning of an array?",
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()",
    correct: "d"
  },
  {question: "10. Which method creates a new array with all elements that pass a test?",
      a: "map()",
      b: "filter()",
      c: "reduce()",
      d: "forEach()",
    correct: "b"
  },
    {question: "11. Which method executes a function for each array element?",
      a: "map()",
      b: "filter()",
      c: "reduce()",
      d: "forEach()",
    correct: "d"
  },
  {question: "12. Which method creates a new array with the results of calling a function on every element?",
      a: "map()",
      b: "filter()",
      c: "reduce()",
      d: "forEach()",
    correct: "a"
    },  
    {question: "13. Which method reduces an array to a single value?",
      a: "map()",
      b: "filter()",
      c: "reduce()",
      d: "forEach()",
    correct: "c"
  },
  {
      question: "14. Which keyword defines a function?",
      a: "function",
      b: "def",
      c: "func",
      d: "define",
    correct: "a"
  },
  {
      question: "15. Which method returns the length of a string?",
      a: "length()",
      b: "size()",
      c: "count()",
      d: "length",
    correct: "d"
  },
  {
      question: "16. Which operator is used for strict equality?",
      a: "==",
      b: "===",
      c: "=",
      d: "!==",
    correct: "b"
  },
  {
      question: "17. Which method returns a substring?",
      a: "substring()",
      b: "substr()",
      c: "slice()",
      d: "all of the above",
    correct: "d"
  },
  {
      question: "18. Which method converts a number to a string?",
      a: "toString()",
      b: "String()",
      c: "convert()",
      d: "toStr()",
    correct: "a"
  },
  {
      question: "19. Which method generates a random number?",
      a: "Math.random()",
      b: "Math.rand()",
      c: "random()",
      d: "Math.getRandom()",
    correct: "a"
  },
  {
      question: "20. Which method rounds a number down?",
      a: "Math.round()",
      b: "Math.floor()",
      c: "Math.ceil()",
      d: "Math.trunc()",
    correct: "b"
  },
    {question: "21. Which method rounds a number up?",
      a: "Math.round()",
      b: "Math.floor()",
      c: "Math.ceil()",
      d: "Math.trunc()",
    correct: "c"
  },
  {
      question: "22. Which method returns the largest integer less than or equal to a number?",
      a: "Math.round()",
      b: "Math.floor()",
      c: "Math.ceil()",
      d: "Math.trunc()",
    correct: "b"
  },
  {    question: "23. Which method returns the smallest integer greater than or equal to a number?",
      a: "Math.round()",
      b: "Math.floor()",
      c: "Math.ceil()",
      d: "Math.trunc()",
    correct: "c"
  },
  {question: "24. Which data type is \"Hello\"?",
      a: "Number",
      b: "String",
      c: "Boolean",
      d: "Object",
    correct: "b"
  },
  {question: "25. Which value represents false?",
      a: "1",
      b: "\"false\"",
      c: "false",
      d: "0",
    correct: "c"
  },
    {question: "26. Which method parses a JSON string?",
      a: "JSON.parse()",
      b: "JSON.stringify()",
      c: "JSON.convert()",
      d: "JSON.toObject()",
    correct: "a"
  },  {question: "27. Which method converts a JavaScript object to a JSON string?",
      a: "JSON.parse()",
      b: "JSON.stringify()",
      c: "JSON.convert()",
      d: "JSON.toString()",
    correct: "b"
    },
    {question: "28. How do you call a function named test?",
      a: "call test()",
      b: "test()",
      c: "run test()",
      d: "execute test()",
    correct: "b"
  },
  {question: "29. Which loop runs at least once?",
      a: "for",
      b: "while",
      c: "do...while",
      d: "foreach",
    correct: "c"
  },  
  {question: "30. Which keyword exits a loop?",
      a: "exit",
      b: "stop",
      c: "break",
      d: "return",
    correct: "c"
  },
  {question: "31. Which keyword skips the current iteration of a loop?",
      a: "pass",
      b: "skip",
      c: "continue",
      d: "next",
    correct: "c"
  },
  {question: "32. Which method selects an element by ID?",
      a: "querySelector()",
      b: "getElement()",
      c: "getElementById()",
      d: "selectId()",
    correct: "c"
  },
  {question: "33. Which method selects all elements with a class?",
      a: "querySelectorAll()",
      b: "getElementsByClassName()",
      c: "getElementsByClass()",
      d: "selectClass()",
    correct: "b"
  },  {question: "34. Which method selects the first element that matches a CSS selector?",
      a: "querySelector()",
      b: "getElement()",
      c: "getElementById()",
      d: "select()",
    correct: "a"
  },
  {question: "35. Which method selects all elements that match a CSS selector?",
      a: "querySelectorAll()",
      b: "getElements()",
      c: "getElementsBySelector()",
      d: "selectAll()",
    correct: "a"
  },
  {question: "36. Which property changes the content of an element?",
      a: "textContent",
      b: "innerText",
      c: "innerHTML",
      d: "content",
    correct: "c"
  },
  {question: "37. Which method adds an event listener to an element?",
      a: "addEvent()",
      b: "on()",
      c: "addEventListener()",
      d: "listen()",
    correct: "c"
  },
  {question: "38. Which event triggers when a user clicks an element?",
      a: "click",
      b: "hover",
      c: "submit",
      d: "change",
    correct: "a"
  },
  {question: "39. Which event triggers when a form is submitted?",
      a: "click",
      b: "hover",
      c: "submit",
      d: "change",
    correct: "c"
  },
  {question: "40. Which event triggers when an input value changes?",
      a: "click",
      b: "hover",
      c: "submit",
      d: "change",
    correct: "d"
  }, 
   {question: "41. Which method prevents default event behavior?",
      a: "preventDefault()",
      b: "stopPropagation()",
      c: "cancel()",
      d: "stop()",
    correct: "a"
  },
  {question: "42. Which object represents the browser window?",
      a: "document",
      b: "screen",
      c: "window",
      d: "browser",
    correct: "c"
  },
  {question: "43. Which object represents the page content?", 
      a: "window",
      b: "screen",
      c: "document",
      d: "html",
    correct: "c"
  },
  {question: "44. Which method reloads the page?",
      a: "reload()",
      b: "refresh()",
      c: "location.reload()",
      d: "window.reload()",
    correct: "c"
  },
  {question: "45. Which method changes HTML content?",
      a: "innerHTML",
      b: "textContent",
      c: "innerText",
      d: "All of the above",
    correct: "d"
  },
  {question: "46. Which method creates an alert box?",
      a: "prompt()",
      b: "confirm()",
      c: "alert()",
      d: "message()",
    correct: "c"
  },
  {question: "47. Which method asks for user input?",
      a: "alert()",
      b: "prompt()",
      c: "confirm()",
      d: "input()",
    correct: "b"
  },
  {question: "48. Which operator adds numbers?",
      a: "+",
      b: "*",
      c: "/",
      d: "-",
    correct: "a"
  },
  {question: "49. Which operator combines strings?",
      a: "*",
      b: "+",
      c: "&&",
      d: "||",
    correct: "b"
  },  {question: "50. Which operator is logical AND?",
      a: "*",
      b: "+",
      c: "&&",
      d: "||",
    correct: "c"
  },
{question: "51. Which keyword handles errors?",
      a: "error",
      b: "try...catch",
      c: "debug",
      d: "throw",
    correct: "b"
  },
{question: "52. Which keyword creates an array?",
      a: "{}",
      b: "()",
      c: "[]",
      d: "<>",
    correct: "c"
  },
{question: "53. Which keyword returns a value?",
      a: "break",
      b: "yield",
      c: "return",
      d: "output",
    correct: "c"
  },
{question: "54. Which value means “no value”?",
      a: "false",
      b: "null",
      c: "0",
      d: "undefined",
    correct: "b"
  },
{question: "55. Which value means “value not assigned”?",
      a: "false",
      b: "null",
      c: "0",
      d: "undefined",
    correct: "d"
  },
  {question: "56. Which is NOT a JavaScript data type?",
      a: "String",
      b: "Boolean",
      c: "Float",
      d: "Object",
    correct: "c"
  },

{question: "57. Which method waits before running code?",
      a: "delay()",
      b: "wait()",
      c: "setTimeout()",
      d: "pause()",
    correct: "c"
  },
  {question: "58. Which method repeatedly runs code at intervals?",
      a: "setInterval()",
      b: "repeat()",
      c: "loop()",
      d: "interval()",
    correct: "a"
  },
  {question: "59. Which method stops a setInterval()?",
      a: "clearInterval()",
      b: "stopInterval()",
      c: "endInterval()",
      d: "cancelInterval()",
    correct: "a"
  },
  {question: "60. Which method stops a setTimeout()?",
      a: "clearTimeout()",
      b: "stopTimeout()",
      c: "endTimeout()",
      d: "cancelTimeout()",
    correct: "a"
  }
]
};

const page = window.location.pathname;
let quizzes;

if (page.includes("html")) quizzes = quizData.html;
if (page.includes("css")) quizzes = quizData.css;
if (page.includes("javascript")) quizzes = quizData.js;

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll('input[name="answer"]');
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizzes[currentQuestion];

  questionEl.textContent = currentQuizData.question;
  aText.textContent = currentQuizData.a;
  bText.textContent = currentQuizData.b;
  cText.textContent = currentQuizData.c;
  dText.textContent = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answer => answer.checked = false);
}

function getSelected() {
  let selectedAnswer;
  answerEls.forEach(answer => {
    if (answer.checked) selectedAnswer = answer.id;
  });
  return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (!selected) {
    alert("Please select an answer");
    return;
  }

  const correctAnswer = quizzes[currentQuestion].correct;

  answerEls.forEach(answer => {
    const optionDiv = answer.parentElement;

    if (answer.id === correctAnswer) {
      optionDiv.classList.add("correct");
    }

    if (answer.id === selected && answer.id !== correctAnswer) {
      optionDiv.classList.add("wrong");
    }
  });

  if (selected === correctAnswer) score++;
  setTimeout(() => {
  clearColors();
  currentQuestion++;

  if (currentQuestion < quizzes.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>You scored ${score} out of ${quizzes.length}🎉</h2>
      <button onclick="location.reload()" id = 'restartButton'>Restart Quiz</button>
    `
  }
}, 1000);
});
function clearColors() {
  answerEls.forEach(answer => {
    const optionDiv = answer.parentElement;
    optionDiv.classList.remove("correct", "wrong");
  });
};
function saveData(quizanswers) {
  localStorage.getI
}

