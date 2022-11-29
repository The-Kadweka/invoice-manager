import axios from "axios";
import React,{createContext, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { BASE_URL } from "../../environment/config.dev";

export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [userInfo,setUserInfo]=useState({});
    const navigation = useNavigation();
    const [errorMessage,setErrorMessage]=useState({});
    const [successMessage,setSuccessMessage]=useState({});
    const [data,setData]=useState([]);
    const [paymentData,setPaymentData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const resetPassword =(email)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/password`,{
        email
        }).then(res=>{
            if(res.data.result.code ==200){
                navigation.navigate('NewPassword')
                setErrorMessage({})
                setIsLoading(false)
            }else{
                setErrorMessage(res.data.result)
                AsyncStorage.setItem('errorMessage',JSON.stringify(errorMessage));
                setIsLoading(false)
            }
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    };
    const setNewPassword =(code,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/set/password`,{
        code,
        password
        }).then(res=>{
            if(res.data.result.code ==400){
                navigation.navigate('Login')
                setErrorMessage({})
                setIsLoading(false)
            }else{
                setErrorMessage(res.data.result)
                AsyncStorage.setItem('errorMessage',JSON.stringify(errorMessage));
                setIsLoading(false)
            }
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    };
    const register =(name,email,vat,phone,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/register`,{
            name,email,vat,phone,password
        }).then(res=>{
            if(res.data.result.code ==200){
                navigation.navigate('Login')
                setErrorMessage({})
                setIsLoading(false)
            }else{
                setErrorMessage(res.data.result);
                AsyncStorage.setItem('errorMessage',JSON.stringify(errorMessage));
                setIsLoading(false)
            }
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
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
            if(res.data.result.code == 200){
            setUserInfo(res.data.result);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
            setIsLoading(false)
            }else{
            setErrorMessage(res.data.result);
            AsyncStorage.setItem('errorMessage',JSON.stringify(errorMessage));
            setIsLoading(false)
            }
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    };
    const getInvoiceData=(email)=>{
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
    const getPaymentsData=(email)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/payments`,{
            email
        }).then(res=>{
            setPaymentData(res.data.result);
            AsyncStorage.setItem('paymentData',JSON.stringify(paymentData));
            setIsLoading(false)
        }).catch(e=>{
            console.log(`Register error ${e}`)
            setIsLoading(false)
        });
    }
    const logout = () =>{
        setIsLoading(true);
     axios
        .post(
           `${BASE_URL}/api/logout`,{},
           {
              headers: {Authorization: `Bearer ${userInfo.access_token}`},
           },
        )
        .then(res => {
           AsyncStorage.removeItem('userInfo');
           AsyncStorage.removeItem('errorMessage');
           AsyncStorage.removeItem('successMessage');
           AsyncStorage.removeItem('data');
           AsyncStorage.removeItem('paymentData');
           setUserInfo({})
           setErrorMessage({})
           setSuccessMessage({})
           setIsLoading(false)
        }).catch(e => {
           console.log(`logout error ${e}`);
           setIsLoading(false);
        })
     }
    return(
        <AuthContext.Provider value={{
            register,
            getPaymentsData,
            paymentData,
            resetPassword,
            setNewPassword,
            logout,
            userInfo,
            isLoading,
            getInvoiceData,
            errorMessage,
            successMessage,
            data,
            login}}
            >
        {children}
        </AuthContext.Provider>
    );
}