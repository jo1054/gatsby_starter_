import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
     <div>
     <h2> My work Experienve</h2>
            <div>
                <h3 > Crew Memeber</h3>
                <p >McDonalds</p>
                <p>September 2012 - January 2014</p>
            </div>
        </div>


         <div>
                <h3>Grounds Keeper</h3>
                <p >University of Texas Rio Grande Valley</p>
                <p>June 2017 - August 2017</p>
            </div>

         <div>
                <h3>Dough Maker</h3>
                <p > Peter Piper Pizza</p>
                <p>June 2018 - Present</p>
            </div>
        
  <h2>Education</h2>

                <h3>University of Texas Rio Grande</h3>
                <p> B.S. in Computer Science</p>

                <p>Expected to graduate May 2019</p>

 <div class="content-wrap">
            <h4>Skills:</h4>
        
            <ul>
                <li>C++, Java, Linux/UNIX, HTML, CSS, Ruby on rails</li>
                <li>Proficient with Microsoft Word and PowerPoint </li>
                <li> ninja skills </li>
            </ul>


            <h4>Hobbies</h4>
            <ul>		
            		<li> sorda working out</li>
            		<li> watching netflix and eating pizza</li>
            </ul>
        </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
