import axios from "axios";
import React,{createContext, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { BASE_URL } from "../../environment/config.dev";

export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [userInfo,setUserInfo]=useState({});
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    
    const register =(name,email,vat,phone,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/register`,{
            name,email,vat,phone,password
        }).then(res=>{
            let userInform=res.result;
            setIsLoading(false)
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    };
    const login =(email,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/login`,{
            email,password
        }).then(res=>{
            setUserInfo(res.data.result);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
            setIsLoading(false)
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    };
    const getData=(email)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/invoices`,{
            email
        }).then(res=>{
            setData(res.data.result);
            AsyncStorage.setItem('data',JSON.stringify(data));
            setIsLoading(false)
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    }
    const logout = () =>{
        console.log('====================================');
        console.log('TESTING THE CLICK');
        console.log('====================================');
        setIsLoading(true);
     axios
        .post(
           `${API_URL}/api/logout`,{},
           {
              headers: {Authorization: `Bearer ${userInfo.access_token}`},
           },
        )
        .then(res => {
           AsyncStorage.removeItem('userInfo');
           setUserInfo({})
           setIsLoading(false)
        }).catch(e => {
           console.log(`logout error ${e}`);
           setIsLoading(false);
        })
     }
    return(
        <AuthContext.Provider value={{register,userInfo,isLoading,getData,data,login}}>
                {children}
        </AuthContext.Provider>
    );
}