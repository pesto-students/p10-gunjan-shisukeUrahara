# Working of a browser

1.) What are browsers ?
Web browsers are software program whose major feature is to serve you net useful resource you asked ,be it an internet page , image , pdf etc.


2.) High level components of a browser.

![WEB_BROWSER_COMPONENTS](images/web_browser_components.avif)

(i) The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

(ii)The browser engine: marshals actions between the UI and the rendering engine.

(iii) The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

(iv) Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

(v) UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

(vi) JavaScript interpreter. Used to parse and execute JavaScript code.

(vii) Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

3.) Rendering engine and its functions.
 The main function of rendering engine is to render and display the requested contents on the screen.
 Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.


 Functioning of rendering engine


 The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

After that, this is the basic flow of the rendering engine:

 ![RENDER_ENGINE_FLOW_DIAGRAM](images/rendering_engine_basic_flow.avif)



The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

 ![WEBKIT_MAIN_FLOW_DIAGRAM](images/webkit_main_flow_diagram.avif)


4.) Parsing 
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.
Parsing is based on the syntax rules the document obeys: the language or format it was written in. Every format you can parse must have deterministic grammar consisting of vocabulary and syntax rules. It is called a context free grammar.


Parsing can be separated into two sub processes: lexical analysis and syntax analysis.

(a) Lexical analysis:- It is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks.

(b) Syntax analysis :- It is the applying of the language syntax rules.


4.1 ) HTML Parser 
The job of the HTML parser is to parse the HTML markup into a parse tree.
Unfortunately all the conventional parser topics do not apply to HTML. HTML cannot easily be defined by a context free grammar that parsers need. So it needs special treatment and parsers to parse it.

HTML parsers also work in the same way as described above through the processes of lexical and syntax analysis 
to construct a DOM tree.

 ![HTML_PARSER_FLOW_DIAGRAM](images/lexer_and_parser.avif)


for example the following code is translated to



<!-- <html>
  <body>
    <p>
      Hello World
    </p>
    <div> <img src="example.png"/></div>
  </body>
</html> -->



 ![DOM_TREE_DIAGRAM](images/HTML_DOM_TREE.avif)


4.2) CSS Parser 


Unlike HTML, CSS is a context free grammar and can be parsed using conventional parsers.


WEBKIT CSS PARSER

 ![CSS_PARSER_DIAGRAM](images/CSS_PARSER_FLOW.avif)


WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. Bison creates a bottom up shift-reduce parser. Firefox uses a top down parser written manually. In both cases each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.



5.) Script Processing

The model of the web is synchronous. We expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. We can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

5.1) Speculative Parsing

Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree - that is left to the main parser.


6.) Tree Construction

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

7.) Layout

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document.

Layout is a recursive process. It begins at the root renderer, which corresponds to the <html> element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

The position of the root renderer is 0,0 and its dimensions are the viewport - the visible part of the browser window.

All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need layout.


8.) Painting

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

Like layout, painting can also be global - the entire tree is painted - or incremental. In incremental painting, some of the renderers change in a way that does not affect the entire tree. The changed renderer invalidates its rectangle on the screen. This causes the OS to see it as a "dirty region" and generate a "paint" event.

 The OS does it cleverly and coalesces several regions into one. In Chrome it is more complicated because the renderer is in a different process then the main process. Chrome simulates the OS behavior to some extent. The presentation listens to these events and delegates the message to the render root. The tree is traversed until the relevant renderer is reached. It will repaint itself (and usually its children).