//eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/List/NameList";
import NameList2 from "./components/List/NameList2";
import PersonList from "./components/List/PersonList";
import Component from "./components/styling_component/Component";
import InlineStyling from "./components/styling_component/InlineStyling";
import "./components/styling_component/appStyles.css";
// this is how we import the css modules in other components
import styles from "./components/styling_component/appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA_mounting from "./components/Mounting_LifeCycle/LifeCycleA";
import LifeCycleA_updating from "./components/Updating_LifeCycle/LifeCycleA";
import Fragment from "./components/ReactFragments/Fragment";
import Table from "./components/ReactFragments/Table";
import Fragment2 from "./components/ReactFragments/Fragment2";
import Fragment3 from "./components/ReactFragments/Fragment3";
import ParentComp from "./components/PureComponent/ParentComp";
import RefsComp1 from "./components/RefsComponent/RefsComp1";
import RefsComp2 from "./components/RefsComponent/RefsComp2";
import FocusInput from "./components/RefsComponent/FocusInput";
import FRParentInput from "./components/RefsComponent/ForwardRef/FRParentInput";
import PortalDemo from "./components/Portals/PortalDemo";
import ParentModal from "./components/Portals/ParentModal";
import ParentModal2 from "./components/Portals/withFunctionalComponent/ParentModal2";
import Parent from "./components/ClickCount/Parent";
import Hero from "./components/ErrorHandling_LifeCycle/Hero";
import ErrorBoundary from "./components/ErrorHandling_LifeCycle/ErrorBoundary";
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import ClickCounter1 from "./components/RenderProps/ClickCounter1";
import HoverCounter1 from "./components/RenderProps/HoverCounter1";
import User from "./components/RenderProps/User";
import Counter1 from "./components/RenderProps/Counter1";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/userContext";

function App() {
  return (
    <div className="App">
      {/* Context */}
      {/* <UserProvider value="KingJoker">
        <ComponentC />
      </UserProvider> */}

      {/* here we are passing the ClickCounter1 and HoverCounter1 as a props name render to the Counter1 Component */}
      {/* <Counter1
        render={(count, counterHandler) => (
          <ClickCounter1
            count={count}
            counterHandler={counterHandler}
          ></ClickCounter1>
        )}
      ></Counter1>
      <Counter1
        render={(count, counterHandler) => (
          <HoverCounter1
            count={count}
            counterHandler={counterHandler}
          ></HoverCounter1>
        )}
      ></Counter1> */}

      {/* here we are passing this function into the counter1 component */}
      {/* <Counter1>
        {(count, counterHandler) => (
          <ClickCounter1
            count={count}
            counterHandler={counterHandler}
          ></ClickCounter1>
        )}
      </Counter1>
      <Counter1>
        {(count, counterHandler) => (
          <HoverCounter1
            count={count}
            counterHandler={counterHandler}
          ></HoverCounter1>
        )}
      </Counter1> */}

      {/* <User name="KingJoker"></User> */}
      {/* <User name={() => "KingJoker"}></User> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "KingJoker" : "Guest")}></User> */}

      {/* <HoverCounter name="King"></HoverCounter>
      <ClickCounter name="Joker"></ClickCounter> */}

      {/* <ErrorBoundary>
        <Hero heroName="joker"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary> */}
      {/* <Parent></Parent> */}
      {/* <ParentModal2></ParentModal2> */}
      {/* <ParentModal /> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <FocusInput /> */}
      {/* <RefsComp2></RefsComp2> */}
      {/* <RefsComp1></RefsComp1> */}
      {/* <ParentComp></ParentComp> */}
      {/* <Fragment3></Fragment3> */}
      {/* <Fragment2></Fragment2> */}
      {/* <Table></Table> */}
      {/* <Fragment></Fragment> */}
      {/* <LifeCycleA_updating></LifeCycleA_updating> */}
      {/* <LifeCycleA_mounting></LifeCycleA_mounting> */}
      {/* <Form></Form> */}
      {/* <h1 className="error">Error</h1> */}
      {/* this is how we apply the styles from the css modules */}
      {/* <h1 className={styles.success}>success</h1> */}
      {/* <InlineStyling></InlineStyling> */}
      {/* <Component primary={true}></Component> */}
      {/* <FunctionClick></FunctionClick>  */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <NameList></NameList> */}
      {/* <NameList2></NameList2> */}
      {/* <PersonList></PersonList> */}
      {/* <Message></Message> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is childern props</p>
      </Greet>
      
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="WonderWoman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" />

      <Welcome name="Clark" heroName="Superman" />

      <Welcome name="Diana" heroName="WonderWoman" /> */}
      {/* <Hello /> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
