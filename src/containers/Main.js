import React, {Component} from 'react'
import './App.css';
import Hero from '../components/Hero/Hero'
import OurStory from '../components/OurStory/OurStory'
import PersonalisedInvite from '../components/PersonalisedInvite/PersonalisedInvite';
import OurDay from '../components/OurDay/OurDay'
import RSVP from '../components/RSVP/RSVP'
import GiftSection from '../components/GIftSection/GiftSection';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import GuestInformation from '../components/GuestInformation/GuestInformation';
import PasswordCheck from './PasswordCheck';


class Main extends Component {
    constructor(props) { 
      super(props); 

      this.state = {
        param: this.props.match,
        isAuthenticated : false,
        showPasswordErrorMessage: false,
        isLoaded: false,
        guestName:"",
        guestId: "",
        partOfWedding: "",
        guestHasRsvpd: false,
        rsvpResponse: {
          canAttend: false,
          dietaryReq: "",
          message: "",
        }
      }; 
    } 
    
    componentDidMount() {

      console.log("Calling API with code " + this.state.param)
      
        // This is where we call our azure function which gets the guest details from azure table storage
        // If we get a successful guest response back, we set the state to the guest info by the function.
        // fetch("https://urlforazurefunction", {
        //       "method": "GET",
        //       "headers": {
        //       }
        //       })
        //       .then(response => response.json())
        //       .then(response => {
        //         this.setState({
        //           guestName: response.name,
        //           guestId: response.id,
        //           partOfWedding: response.partOfWedding,
        //           guestHasRsvpd: false,
        //         })
        //       })
        //       .catch(err => { console.log(err); 
        //       });
        // You would need error handling here incase an invalid guest url is passed to to the site, in this case you 
        // could update the state to show some error message to the user.
        
        console.log("Guest information recieved:");

        // Simulate valid response back from function.
        this.setState({
          guestName :"Christa Smith",
          id: "1245",
          partOfWedding: "AllDay",
          guestHasRsvpd: false,
          isLoaded: true,
        });
  
        // Uncomment this out to see how the website looks for evening guests
        // this.setState({
        //   guestName :"Christa Smith",
        //   guestId: "123432",
        //   partOfWedding: "Evening",
        //   isLoaded: true,
        //   guestHasRsvpd: false,
        // })
    };

    performSecurityCheck = (password) => {
      console.log("Authenticating guest:");
      /// We could do a check here to a db password or similar.
      // Simulating check is done. We change the state of isAuthenticated to true.

      if (password === "password1"){
        this.setState({
          isAuthenticated: true,
          showPasswordErrorMessage: false
          });
      }
      else {
        this.setState({
          showPasswordErrorMessage: true,
        });
      }
    }
  
    sendRsvpUpdate = () => {
      /// We would do an POST/PUT (depending on approach) to the Azure Function resonsible for updating the table storage.
      // You should use the ID you retrieved back from the DB in the componentDidMount() API call to do the update.
      // See this article how to make a POST api call: https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code
      console.log("RSVP Updated for user"+ this.state.guestName);

      // Simulating POST is done. We change the state of guestHasRsvpd to true.
      this.setState({
          guestHasRsvpd: true,
        });
    }
  
    render() {    
        // This makes sure we show something to the user whilst it loads.
      if(!this.state.isLoaded){
        return (
          <div>
            <Hero/>
            <Loading></Loading>
          </div>
        ) 
      }

      // This makes sure the user knows the password to access the site.
      if (!this.state.isAuthenticated){
        return (
          <div>
          <Hero/>
          <PasswordCheck showPasswordErrorMessage={this.state.showPasswordErrorMessage} performSecurityCheck={this.performSecurityCheck}> </PasswordCheck>
          </div>

        )
      }

      // When data is loaded and user is authenticated, react will render this block...
      return (
        <div className="App">
          <Hero/>
          <OurStory></OurStory>
          <PersonalisedInvite guestName={this.state.guestName} guestPartOfWedding={this.state.partOfWedding}/>
          <OurDay guestPartOfWedding={this.state.partOfWedding} ></OurDay>
          <RSVP guestName={this.state.guestName} submitRsvp={this.sendRsvpUpdate} hasRsvpd={this.state.guestHasRsvpd} ></RSVP>
          <GiftSection> </GiftSection>
          <GuestInformation></GuestInformation>
          <Footer> </Footer>
        </div>
      );
    }
  }
  
  export default Main;
  