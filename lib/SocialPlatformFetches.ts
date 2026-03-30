const url = "https://socialmedia-be-cphnbgfrftgwdgay.westus3-01.azurewebsites.net";

export const GetFacebookStats = async () => {
    const response = await fetch(url + "/Facebook/GetFacebookStats", {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
        }
    });
    
    const data = response.json();
    return data;
};

export const GetInstagramStats = async () => {
    const response = await fetch(url + "/Instagram/GetInstagramStats", {
        method: "GET", 
        headers: {
            "Content-Type":"application/json"
        },
    })

    const data = response.json();
    return data;
};

export const GetTwitterStats = async () => {
    const response = await fetch(url + "/Twitter/GetTwitterStats", {
        method: "GET", 
        headers: {
            "Content-Type":"application/json"
        }
    })

    const data = response.json();
    return data;
};

export const GetYoutubeStats = async () => {
    const response = await fetch(url + "/Youtube/GetYoutubeStats", {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    }) 

    const data = response.json();
    return data;
};