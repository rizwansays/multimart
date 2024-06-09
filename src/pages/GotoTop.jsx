import React, { Component } from 'react'
import '../Style/gotoTop.css'
 class GotoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  coponentDidMount = () => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 150){
        this.setState({thePosition: true});
      }
      else{
        this.setState({ thePosition: false});
      }
    });
    window.scrollTo(0,0)
  }


  onScrollStep = () => {
   if(window.pageYoffset === 0){
    clearInterval(this.state.intervalId);
   }
   window.scroll(0, window.pageYoffset - this.props.scrollStepInPx)
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({intervalId: intervalId});
  }

  renderGoTopIcon = () => {
    if(this.state.thePosition){
      return (
        <>
        <div className="box-of-scroll">
        <div className='scroll-btn' onClick={this.scrollToTop}><span className='arrow'>&uarr;</span></div>
        </div>
        </>
      )
    }
  }

  render() {
    return <> {this.renderGoTopIcon()}</>;
  }
}

export default GotoTop;
  // const [isVisible, setIsVisible] = useState(false);
  // const gotoBtn = () => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // };

  // const listenToScroll = () => {
  //   let heightToHidden = 0;
  //   const winScroll = document.body.scroll || document.documentElement.scroll;

  //   if(winScroll > heightToHidden){
  //     setIsVisible(true);
  //   }else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', listenToScroll);
  //   return () => window.removeEventListener('scroll', listenToScroll);
  // }, []);
//   return (
//     <>
//     {/* {isVisible && ( */}
//       <div className='box-of-scroll'>
//       <div className='scroll-btn' onClick={gotoBtn}><span className='arrow'>&uarr;</span></div>
//     </div>
//     {/* )} */}
//     </>
//   )
// }
// const wrapper = styled.section`
//   display: flex;
//   justify-content: end;
//   align-items: center;

//   .scroll-btn{
//   font-size: 2.4rem;
//   width: 3rem;
//   height: 3rem;
//   color: #fff;
//   background-color: var(--primary-color);
//   box-shadow: 2px 2px 2px;
//   border-radius: 50%;
//   bottom: 5rem;
//   right: 5rem;
//   z-index:9999;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// }

// .arrow{
//   animation: gototop 1.2s linear infinite alternate-reverse;
// }

// @keyframes gototop {
//   0% {
//     transform: translateY(-0.4rem);
//   }
//   100% {
//     transform : translateY (1rem);
//   }
// }
// `
