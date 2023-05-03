import React, { useState } from "react";
import MainComponent from "@/components/mainComponent";
import ThankYouComponent from "@/components/thankYouComponent";
function Home() {
 const [rating,setRating]=useState(3)
 const [submitted,setSubmitted]=useState(false)
    return (
    <main className="main">
   {submitted?
   <ThankYouComponent rating={rating}/>:   
     <MainComponent setSubmitted={setSubmitted} setRating={setRating} rating={rating}/>
   }
    </main>
  );
}

export default Home;
