import styled from 'styled-components';
 
export const ContactContainer = styled.div`
    background: rgb(0,0,0);
background: linear-gradient(rgba(0,0,0,1) 0%, rgba(255,230,168,0.9671218829328606) 5%, rgba(255,192,203,1) 94%);
    text-align: center;
    padding: 2em;
    height: 549px;
    padding-top: 130px;
`;
 
export const ContactTitle = styled.h1`
    font-size: 2.5rem;
    margin: 20px;
    margin-top: -10px;
    margin-bottom: 30px;
    
`;
 
export const ContactP = styled.h3`
    font-size: 3rem;
    padding: 1em;
    color: #E10B68;
 
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;
 
export const ContactEmail = styled.p`
    font-size: 1.5rem;
    padding: 1em;
    
`;
 
export const ContactPhone = styled.p`
    font-size: 1.5rem;
    padding: 1em;
    padding-top: 0.5rem;
   
`;