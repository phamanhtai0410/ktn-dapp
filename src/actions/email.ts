import {toast} from "react-toastify";

export const sendSubscribe = async (data:object) => {
    try {

        const response = await fetch("https://api-stag-ktn.esollabs.com/v1/dapp/email/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if(response){
            toast.success("Subscribe successfully")
        }
      
    } catch (e: any) {
        console.error(e)
    }
    return
}