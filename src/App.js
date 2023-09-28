import "./App.css";
import TextInput from "./components/TextInput";
import MuiTextInput from "./components/mui/MuiTextInput";
import MuiTextArea from "./components/mui/MuiTextArea";
import MemberDropdown from "./components/MemberDropdown";
import MuiMemberDropdown from "./components/mui/MuiMemberDropdown";
import SimpleButton from "./components/SimpleButton";
import MuiSimpleButton from "./components/mui/MuiSimpleButton";
import MuiSnackbar from "./components/mui/MuiSnackbar";
import MuiModal from "./components/mui/MuiModal";
import MuiTable from "./components/mui/MuiTable";

function App() {
  return (
    <div className="App">
      <div className="item">
        <TextInput />
        <MuiTextInput />
        <MuiTextArea />
      </div>
      <div className="item">
        <MemberDropdown />
        <MuiMemberDropdown />
      </div>
      <div className="item">
        <div>
          <SimpleButton
            onClick={() => {
              console.log("button click");
            }}
          />
        </div>
        <div>
          <MuiSimpleButton
            onClick={() => {
              console.log("button click");
            }}
          />
        </div>
      </div>
      <div className="item">
        <MuiSnackbar />
      </div>
      <div className="item">
        <MuiModal />
      </div>
      <div className="item">
        <MuiTable />
      </div>
    </div>
  );
}

export default App;
