import React,{Component} from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const modalRoot=document.querySelector('#modal-root');

class Modal extends Component{

  static defaultProps = {
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown=e=>{
    if(e.code==='Escape'){this.props.onClose()};
  }

  handleBackdropClick=(e)=>{
    if(e.currentTarget===e.target){this.props.onClose()};
  }






render(){
  return createPortal(
        <div className={style.Overlay} onClick={this.handleBackdropClick}>
      <div className={style.Modal}>
        {this.props.children}
      {/* <img src={this.props.largeImage} alt="" /> */}
      </div>
    </div>, modalRoot,
      )
}
}
export default Modal;










// ====================================================

// const Modal = ({ largeImage }) => {

//   return(
//     <div className={style.Overlay}>
//   <div className={style.Modal}>
    
//     <img src={largeImage} alt="" />
//   </div>
// </div>
//   )
// }
// export default Modal;

// Modal.propeTypes ={
//   largeImage: PropTypes.string.isRequired,
// }