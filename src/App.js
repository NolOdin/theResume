import {React, useState, useEffect} from 'react'
import Navbar from './components/navbar'
import Spinner from './components/spinner'
import './App.css';

function App () {
			const [loading, setLoading] = useState(false);

					useEffect(() => {
						setLoading(true)
						setTimeout(() => {
							setLoading(false)
						}, 7000)
					}, []) 
			  return (
			    <div className="App">
			    {
			   		loading ? <Spinner /> : <Navbar />
			    }
			  
			    </div>
			 );   
			 
  
}
export default  App




