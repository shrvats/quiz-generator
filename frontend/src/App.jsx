import { MathJaxContext } from 'better-react-mathjax'
import QuizRenderer from './components/QuizRenderer'

export default function App() {
  return (
    <MathJaxContext config={{
      loader: { load: ["[tex]/html"] },
      tex: { packages: { "[+]": ["html"] } }
    }}>
      <QuizRenderer />
    </MathJaxContext>
  )
}
