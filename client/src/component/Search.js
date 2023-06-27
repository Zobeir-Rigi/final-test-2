import "./User.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate();

    const { userName, setCodewarsData, setGitHubData } = useContext(AppContext);
    const handleSearch = () => {
        
        /////****GETTING CODEWARS DATA****///////
        fetch(`https://www.codewars.com/api/v1/users/${userName}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                return setCodewarsData(data);
                
            })
            .catch((err) => {
                console.error(err);
            });
        ///////GETING gITHUB PULL REQUEST ON CYF REPOSITORI ====> THIS DATA NEED TO BE FILLTERD WHEN WE GOT MANDATORY COURSEWORK
        ////THERE IS ANOTHER APPI AS WELL BUT NOT SURE WHICH ONE CAN GET BETTER RESULT(https://api.github.com/repos/OWNER/REPO/pulls))
        fetch(`https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                return setGitHubData(data);
            })
            .catch((err) => {
                console.error(err);
            });
             navigate("/result");
            //  window.open("/result", "_blank");
   
    };
    return (
        <button className="user-button" onClick={() => handleSearch()} >Search</button>
        // hanleSearch also works
    );

};
