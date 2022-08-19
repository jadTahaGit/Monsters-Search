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
