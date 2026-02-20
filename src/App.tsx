import './App.css'
import { ReportButton } from './components/ReportButton'

function App() {

  return (
    <>
      <h1>Onepoint Shared Components</h1>
      <ReportButton click={() => console.log('report button clicked')}>
        Report
      </ReportButton>
    </>
  )
}

export default App
