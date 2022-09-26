import styled from "styled-components";
import { Flex } from "rebass";
// import { Label, Input, Select, Textarea, Radio, Checkbox } from '@rebass/forms'

export {
  // ContenedorSeccionContacto,
  ContenedorPrincipalContacto,
  Descripción,
  ContenedorFormulario,
  ContenedorTexto,
  CampoDeTexto,
  Etiqueta,
  AreaDeTexto,
  BotonContacto
}

// const ContenedorSeccionContacto = styled(Flex)`
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     margin: auto;
//     max-width: 1200px;
//     font-size: 15px;
//     line-height: 27px;
//     `

const ContenedorPrincipalContacto = styled(Flex)`
  flex-direction: column;
  padding: 20px;
`;

const Descripción = styled.h3`
  margin: 0 0 20px 0;
  line-height: 50px;
  font-size: 24px;
  color: #333;
  font-weight: 500;
`;

const ContenedorFormulario = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

@media only screen and (min-width: 1024px) {
  div:nth-child(5) {
    flex: 1 1 100%;
}
`;

const ContenedorTexto = styled(Flex)`
  width: 100%;
  align-items: center;
  margin-bottom: 25px;

  @media only screen and (min-width: 1024px) {
    flex: 0 0 48%;
  }
  `;

  const CampoDeTexto = styled.input`
    border-radius: 10px;
    margin: 0;
    height: 51px;
    line-height: 51px;
    padding: 0 20px;
    outline: 0;
    font-size: 15px;
    color: gray;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fcfcfc;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    user-select: none;
   

      
  `;

  // .formControl: focus + .inputPlaceholder,
  // //     .formControl: not(: placeholder - shown) + .inputPlaceholder {
  // //   transform: translateY(-35px);
  // //   font - size: 90 %;
  // //   opacity: 1;


  const Etiqueta = styled.label`
    position: absolute;
    margin: 0;
    padding-left: 20px;
    transition: all 200ms;
    opacity: 0.5;
    cursor: text;
    display: block;
    font-weight: bold;
    font-size: 16px;
    font-weight: normal;
    user-select: none;
    &:focus {
    transform: translateY(-35px);
    font-size: 90%;
    opacity: 1;
    }
  `;

  const AreaDeTexto = styled.textarea`
    min-height: 130px;
    transition: none!important;
    min-width: 100%;
    margin: 0;
    height: 51px;
    line-height: 27px;
    padding: 20px;
    outline: 0;
    font-size: 15px;
    color: gray;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fcfcfc;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border-radius: 10px;
    user-select: none;
  `;

  const BotonContacto = styled.button`
      width: 100%;
      max-width: 300px;
      margin: 0;
      border-radius: 10px;
      z-index: 10;
      background-color: #e02e21;
      top: 0;
      padding: 10px 20px;
      color: #fff;
      position: relative;
      font-size: 15px;
      font-weight: 500;
      display: inline-block;
      transition: all .2s ease-in-out;
      cursor: pointer;
      margin-right: 6px;
      overflow: hidden;
      border: 0;
  `

// .contacto {
//   display: flex;
//   flex - direction: column;
//   padding: 20px;

//     h3 {
//     margin: 0 0 20px 0;
//     line - height: 50px;
//     font - size: 24px;
//     color: #333;
//     font - weight: 500;
//   }

//     .formulario {
//     display: flex;
//     flex - direction: column;
//     justify - content: center;
//     align - items: center;

//         .contactFormGroup {
//       width: 100 %;
//       display: flex;
//       align - items: center;
//       margin - bottom: 25px;

//             .formControl {
//         border - radius: 10px;
//       }
    
        
    //     .formControl: focus + .inputPlaceholder,
    //     .formControl: not(: placeholder - shown) + .inputPlaceholder {
    //   transform: translateY(-35px);
    //   font - size: 90 %;
    //   opacity: 1;
    // }

    //     .formControl: focus + .textareaPlaceholder,
    //     .formControl: not(: placeholder - shown) + .textareaPlaceholder {
    //   transform: translateY(-75px);
    //   font - size: 90 %;
    //   opacity: 1;
    // }

    // input,
    //   textarea {
    //   margin: 0;
    //   height: 51px;
    //   line - height: 51px;
    //   padding: 0 20px;
    //   outline: 0;
    //   font - size: 15px;
    //   color: gray;
    //   max - width: 100 %;
    //   width: 100 %;
    //   box - sizing: border - box;
    //   display: block;
    //   background - color: #fcfcfc;
    //   font - weight: 500;
    //   border: 1px solid #e0e0e0;
    //   opacity: 1;
    //   border - radius: 3px;
    //   user - select: none;
    // }

    //     textarea {
    //   min - height: 130px;
    //   transition: none!important;
    //   min - width: 100 %;
    // }

    //     .inputPlaceholder, .textareaPlaceholder {
    //   position: absolute;
    //   margin: 0;
    //   padding - left: 20px;
    //   transition: all 200ms;
    //   opacity: 0.5;
    //   cursor: text;
    // }

    //     label {
    //   display: block;
    //   font - weight: bold;
    //   font - size: 16px;
    //   font - weight: normal;
    //   margin - bottom: 8px;
    //   user - select: none;
    // }

//         button {
//       width: 100 %;
//       max - width: 300px;
//       margin: 0;
//       border - radius: 10px;
//       z - index: 10;
//       background - color: $rojo - 1;
//       top: 0;
//       padding: 10px 20px;
//       color: #fff;
//       position: relative;
//       font - size: 15px;
//       font - weight: 500;
//       display: inline - block;
//       transition: all .2s ease -in -out;
//       cursor: pointer;
//       margin - right: 6px;
//       overflow: hidden;
//       border: 0;

//     }
//   }
// }

// .noSelect {
//   -webkit - touch - callout: none;
//   -webkit - user - select: none;
//   -khtml - user - select: none;
//   -moz - user - select: none;
//   -ms - user - select: none;
//   user - select: none;
// }
// .contactoContainer {
//   display: flex;
//   flex - direction: row;
//   align - items: center;
//   justify - content: center;
//   margin: auto;
//   max - width: 1200px;
//   font - size: 15px; // bootstrap
//   line - height: 27px; // bootstrap
// }

// @media only screen and(min - width: 1024px) {
//     .contactoContainer >* {
//     flex: 0 0 45 %;
//   }
// }

// @media only screen and(min - width: 1024px) {
//     .contacto.formulario >* {
//     flex: 0 0 48 %;
//   }
// }

// @media only screen and(min - width: 1024px) {
//     .contacto.formulario {
//     flex - direction: row;
//     flex - wrap: wrap;
//     justify - content: space - between;
//   }
// }

// @media only screen and(min - width: 1024px) {
//     .contacto form > div: nth - child(5) {
//     flex: 1 1 100 %;
//   }
// }

// //---------------------------------------- 

// #contacto > h3 {
//   margin: 0 0 20px 0;
//   line - height: 50px;
// }

// #contacto form {
//   display: flex;
//   flex - direction: column;
//   justify - content: center;
//   align - items: center;
// }

// #contacto form.contact - form - group {
//   width: 100 %;
//   display: flex;
//   align - items: center;
//   margin - bottom: 25px;
// }

// #contacto form.contact - form - group.form - control {
//   border - radius: 10px;
// }

// #contacto form input,
//   #contacto form textarea {
//   margin: 0;
// }

// #contacto form.input - placeholder {
//   position: absolute;
//   margin: 0;
//   padding - left: 20px;
//   transition: all 200ms;
//   opacity: 0.5;
//   cursor: text;
// }

// #contacto form.form - control: focus +.input - placeholder,
//   #contacto form.form - control: not(: placeholder - shown) +.input - placeholder {
//   font - size: 90 %;
//   transform: translatey(-35px);
//   opacity: 1;
// }

// #contacto form.form - control: focus +.textarea - placeholder,
//   #contacto form.form - control: not(: placeholder - shown) +.textarea - placeholder {
//   transform: translatey(-75px);
// }

// #contacto form > contactoButton {
//   width: 100 %;
//   max - width: 300px;
//   margin: 0;
//   border - radius: 10px;
//   z - index: 10;
// }