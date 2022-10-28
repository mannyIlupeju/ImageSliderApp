import './App.css';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider';
import {useState, useEffect} from 'react'

function App() {
  const [feedback, setFeedback] = useState([])

  const slides = [
    {
      url : 'https://picsum.photos/id/237/200/300',
      text: 'Lake Bled'

    },
    {
      url : 'https://picsum.photos/seed/picsum/200/300',
      text: 'Ice Mountain' 

    },
    {
      url : 'https://picsum.photos/200/300?grayscale',
      text: 'Seal'

    }
  ]

 





  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }

  return (
    <div>
      <Header />
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
