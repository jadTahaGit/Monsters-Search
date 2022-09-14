# Story of React

- Back then We needed as devs to deal with Different Browsers.
- Jquery came & made interacting with dif. Browsers easy & unified.
- BackBones.js Libraries came out to organize Huge # of JS Files
- It got easier & easier to work with DOM -> SPA & AJAX came out so we started caring less about HTML & more about JS. Less requests to the server (Desktop APP Feeling "no refresh").
- 2010 AngularJS created by Google. Concept was these huge containers (controllers directives filters...) MVC made Angular Popular. But Things are getting Complex Data was Flowing Everywhere (it was getting harder to solve the bugs).
- FB employes has faced a lot of problems --> 2013 React, which was a new Way(Architecture) which is a more better way than Angular. (2014 wanted then to rewrite the whole Library).

# Declarative vs Imperative

- Imparative = Change parts of the Website directly using DOM API.
  ex: if(whatever) document.quer...style={color="red"};
- React Declarative lead to less Complexity Based on the date(state) of the app -> React
  let state = {
  user: "Jad Taha",
  isLoggedInt: True,
  friends; ["Pavel", "Matt", "Joy"]
  }

# Component Architecture

- Don't Touch the DOM, I will do it for you!
- Components are basiclly are JS Functions that recives some sort of input or attributes(props) & return JSX. These functions(components) could be used overall in out Applications.
- Built Components: ReactBootstrap, Blueprint, MatterialUI
- Advanteges: Search for any Component Built by anyone Else & copyPaste

# One Way Data Flow

- It is one more thing that made React very popular
- Till now we have State(data), Components(JSX) and VirtualDOM
  whenever the state changes this React function is called (Hey React, build the components again with the new state).
  function React(state, components){}
- Data can never move UP . It just move down! That makes Debuging Easy!(Just look where the Data is & where it flows)

# UI Library

- React workins mainly on views think of it as a robot the does the changes for you
- That means we can have another robots now talking to ReactRobot & asking for some WebView Changes
- REACT DOM: React with DOM bzw. Web Browser.
- REACT Nativ: Change this view in IOS/Android App
- REACT 3b60 VR APPs
- Electron & React Desktop for Windows & MacOs & linux OS
- ReactToBlast for Command
- Idea of Cross Platforms took of with REACT

# How to Be the Best Senior React Developer?

- Decide on Components (how much do i want to break the component).
- Decide the State and where it lives (Placing it in the right Component).
- What changes when state changes What part of VirtuelDOM should rerender?

# yarn vs npm

Commands: https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet

# npm vs npx fun

npm i -g cowsay
cowsay hello
npm list cowsay
npm list -g cowsay
npm uninstall -g cowsay

npx: (it will download - create & delete)
npx cowsay hello
npm list cowsay
npm list -g cowsay

# Webpack & Babels & Ejecting

- Webpack Huge JS APP to js Chunkes
- Babel will
- manifest.json (when downloaded) what to put instead of icons/images?
- Dont eject npx creat-react-app already have the best setup

# Classes vs Hooks

- Classes exist in different Programming languages
- Hooks are React specific

# Concepts:

- Shadow Merge: When updating a State always use the same form (object, string,...)
- Secondary Call Back, use the new state in your code after SetState directly:
  ()=>{
  return {
  name: 'Jad',
  company: 'YOTTA DEV',
  year: '2020',
  }
  }, ()=>{
  console.log(this.state)
  }
- Key when mapping

# SPAs

- Non SPA:
  client request(I want to load)--> DB Server
  clent response (JS HTML CSS)<-- DB Server

- SPA:
  client request(I want to load)--> DB Server
  clent response (JS"withReact" HTML CSS)<-- DB Server
  now when you navigate no need for new Request cause React itself will build the View.

# Immutability

these guys do not change the old array. They create a copy of them.
.map .filter .reduce

# JS Optimizations

What is really happining when React is Rendering to JS.
Look at render Method.
Every Time React want to update the DOM it calls the render Method.
The (event)=>{...} is an Anonymus Function . JS run this function. So every time render runs the function is recreated. "slight less Performance"

# Component

- Tight together the UI Visual Representation & Functionalities (Capsulation)
- Reusable Components: Search funct & List. So Generalize more till we have single responsibility. SOC: Separation of Concepts. Here is where Decision making gets to important.
- In our case the Search Bar is tight to our list --> we need to generilze them ! & separate them.

# React Rerender (update) in 2 cases:

- state has changed
- props has been passed

# Lifecycles

Mounting Updating Unmounting

Functional Components(no Life cycles) just return the JSX & it does not go through these different phases in Class Components (render, mount, construct....)

# Pure vs Impure functions & Sideeffects

pure function is when the result it wil return is completly dependet just on the its parametrer
ex.of Pure fucnction: const pure=(a,b)=>{ return a+b;}
ex.of Impure fucnction: const c=10; const impure=(a,b)=>{ return a+b+c;}

side effects: "c will change when calling functB althoagh it is out of its scope"
const c=10;
const functB=(a,b)=>{
c = a+b;
return a\*b;
}

In React we are using Impure Functions & we have side Effects

# Functional Components

- It renders when the searchField is modified & not when setSearchField is called!
- Fetching should not be written directly it should be written in a useEffect in functional Component. The code below is an infinte Loop!
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
- For that we use useEffect - array empty mean effect will fire one Time
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  }, []);

# React v18:

- yaern upgrade react react-dom --latest
- v18 ... root in App.js
- React Strict Mode Changes (4 rendering instead of 2) --> 2 basicly with REACT STRICT... (install the React Extension & then 2 are then light gray)

# Dom vs virtual DOM

- Real DOM is expensive because you need to go throagh
- Duplicates the REAL DOM which is the virtual DOM (virtual Representation of the Real DOM)
- Ex: Searchbox "lea"
  1st) copy of the virtual DOM (virtual DOM is a Snapshot)
  2nd) Lea --> set the State (monsters are changed --> CardList is gonna change)
  3rd) unmounting the card without lea --> new virtual DOM (compares to snapshot) see the difference points & make these changes onto the REAL DOM

# Pure React

build an app with pure HTML JS & React without JSX

- JSX
- React
- React DOM

DOM Paint Flashing (chrome extention)
FORKING the code (github)
