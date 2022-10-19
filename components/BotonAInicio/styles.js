import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   display: block;
   position: fixed; 
   right: 0;
   bottom: 47px;
   z-index: 9999;
   cursor: pointer;
   background-color: #e02e21;
   margin: 0 36px 0 0;
   border: 0 none;
   width: 45px;
   height: 45px;
   transition: all 1s;
   border-radius: 3px;
   text-align: center;
   font-size: 26px;
   text-decoration: none;
   outline: none !important;
   color: #fff;

   svg {
   
    }
`