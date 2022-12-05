const App = (props) => /*#__PURE__*/
React.createElement(LoginForm, null);



class LoginForm extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "loginform" }, /*#__PURE__*/
      React.createElement(FormHeader, { title: "Login" }), /*#__PURE__*/
      React.createElement(Form, null), /*#__PURE__*/
      React.createElement(OtherMethods, null)));


  }}


const FormHeader = (props) => /*#__PURE__*/
React.createElement("h2", { id: "headerTitle" }, props.title);



const Form = (props) => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(FormInput, { description: "username", placeholder: "Enter your username", type: "text" }), /*#__PURE__*/
React.createElement(FormInput, { description: "password", placeholder: "Enter your password", type: "password" }), /*#__PURE__*/
React.createElement(FormButton, { title: "Log in" }));



const FormButton = (props) => /*#__PURE__*/
React.createElement("div", { id: "button", class: "row" }, /*#__PURE__*/
React.createElement("button", null, props.title));



const FormInput = (props) => /*#__PURE__*/
React.createElement("div", { class: "row" }, /*#__PURE__*/
React.createElement("label", null, props.description), /*#__PURE__*/
React.createElement("input", { type: props.type, placeholder: props.placeholder }));



const OtherMethods = (props) => /*#__PURE__*/
React.createElement("div", { id: "alternativeLogin" }, /*#__PURE__*/
React.createElement("label", null, "Or sign in with:"), /*#__PURE__*/
React.createElement("div", { id: "iconGroup" }, /*#__PURE__*/
React.createElement(Facebook, null), /*#__PURE__*/
React.createElement(Twitter, null), /*#__PURE__*/
React.createElement(Google, null)));




const Facebook = (props) => /*#__PURE__*/
React.createElement("a", { href: "#", id: "facebookIcon" });


const Twitter = (props) => /*#__PURE__*/
React.createElement("a", { href: "#", id: "twitterIcon" });


const Google = (props) => /*#__PURE__*/
React.createElement("a", { href: "#", id: "googleIcon" });


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('container'));