import { Global } from '@mantine/core';

export const GlobalStyle = ()=>{
    return (
        <Global 
            styles={(theme)=>({
                "*, *::before, *::after":{
                    boxSizing: "border-box",
                    margin:0,
                    padding:0
                },
                body:{
                      fontSize: "16px",
                      color: theme.black      
                }
            })}
        
        
        />
    )
}