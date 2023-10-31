import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"성상은",
    content:"안녕 1",
    emotion:5,
    // created_date: new Date().getTime,
  },
  {
    id:2,
    author:"성상은2",
    content:"안녕 2",
    emotion:4,
    // created_date: new Date().getTime,
  },
  {
    id:3,
    author:"성상은3",
    content:"안녕 3",
    emotion:3,
    // created_date: new Date().getTime,
  },
];

function App() {
  return (
    <div className="App">
        <DiaryEditor />
        <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
