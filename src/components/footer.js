import React, {useEffect} from "react"




const Footer = props => {


    //go TOP Scroll ****************************************************
    const scrollFunc = () => {
      // Get the current scroll value
      console.log('2xxxx');
      let y = window.scrollY;
        // Set a variable for our button element.
    const scrollToTopButton = document.getElementById('scrollDiv');

        if (y > 0) {
          scrollToTopButton.className = "top-link show";
        } else {
          scrollToTopButton.className = "top-link hide";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    //onClick={()=>topFunction()} 

      
   

    //IF scroll DIV //go TOP Scroll
    window.addEventListener("scroll", scrollFunc)




  return (
    <footer>
 

      <div className="footer">
        <div className="container">footer</div>
      </div>

           
      <div id='scrollDiv' class="to-top-right hide">
          <a id='scrollTop' onClick={()=>topFunction()} class="screen-reader-text">▲</a>
      </div>
    </footer>
  )
}

export default Footer
