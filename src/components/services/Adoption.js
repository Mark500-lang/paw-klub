import React, { useState } from "react";
import './Adoption.css';
import CircleLoader from 'react-spinners/CircleLoader';
import { Link } from "react-router-dom";

function Adoption({data}){
    
    const [dogInfo, setDogInfo] = useState(data.length > 0 ? data[0] : {});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const [colorBtn, setColorBtn] = useState("btn1");
    const btnID = (id) => {
        setColorBtn(colorBtn === id ? "" : id);
    };
    const coloringButton = (id) => {
        return colorBtn === id ? "colored-button" : "";
    };
    

    const handleClick = async (event, name)=>{
        setIsLoading(true);
        try{
            const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`,{
            method: "GET",
            headers: {'X-Api-Key': 'txnBMmne4+CBpk7YCQcS5g==JCz1gtAHw8pVigCh'},
            contentType: 'application/json',
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
              }
        
            const result = await response.json();
            
            console.log(result);
            setDogInfo(result[0]);

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="adoption container">
            <div className="row view-breeds"> 
                <h4 className="text-center text-muted mb-2">choose your companion...</h4>
                <h1 className="text-center mb-5">Available Dog Breeds</h1>
               
                <div className='col-lg-3 select-breed-box'>
                    <button
                        className={`${coloringButton("btn1")}`}
                        id="btn1"
                        onClick={(event) => {
                            btnID("btn1");
                            handleClick(event, 'labrador retriever');
                        }}
                    >
                    Labrador Retriever
                    </button>

                    <button
                        className={`${coloringButton("btn2")}`}
                        id="btn2"
                        onClick={(event) => {
                            btnID("btn2");
                            handleClick(event, 'german shepherd');
                        }}
                    >
                    German Shepherd
                    </button>

                    <button
                        className={`${coloringButton("btn3")}`}
                        id="btn3"
                        onClick={(event) => {
                            btnID("btn3");
                            handleClick(event, 'chihuahua');
                        }}
                    >
                    Chihuahua
                    </button>
                    <button
                        className={`${coloringButton("btn4")}`}
                        id="btn4"
                        onClick={(event) => {
                            btnID("btn4");
                            handleClick(event, 'rottweiler');
                        }}
                    >
                    Rottweiler
                    </button>
                    <button
                        className={`${coloringButton("btn5")}`}
                        id="btn5"
                        onClick={(event) => {
                            btnID("btn5");
                            handleClick(event, 'samoyed');
                        }}
                    >
                    Samoyed
                    </button>
                    <button
                        className={`${coloringButton("btn6")}`}
                        id="btn6"
                        onClick={(event) => {
                            btnID("btn6");
                            handleClick(event, 'Boerboel');
                        }}
                    >
                    Boerboel
                    </button>
                    <button
                        className={`${coloringButton("btn7")}`}
                        id="btn7"
                        onClick={(event) => {
                            btnID("btn7");
                            handleClick(event, 'american bulldog');
                        }}
                    >
                    Bulldog
                    </button>
                    <button
                        className={`${coloringButton("btn8")}`}
                        id="btn8"
                        onClick={(event) => {
                            btnID("btn8");
                            handleClick(event, 'doberman');
                        }}
                    >
                    Doberman
                    </button>
                    <button
                        className={`${coloringButton("btn9")}`}
                        id="btn9"
                        onClick={(event) => {
                            btnID("btn9");
                            handleClick(event, 'japanese spitz');
                        }}
                    >
                    Japanese Spitz
                    </button>
                </div>
                <div className="col-lg-9 dog-info">
                    <div className="dog-breed-image">
                        {err && <h2>{err}</h2>}
                        {isLoading  ? <CircleLoader color="#ff4d30"/>
                        :
                        <img src={dogInfo.image_link} alt="..."></img>
                        }
                    </div>
                    
                    <div className="dog-info-table">
                        <h4>Breed Information</h4>
                        <div className="breed-info-table">
                            <div className="breed-info-box">
                                <span>
                                    Max-height
                                </span> 
                                <span>{dogInfo.max_height_male}</span>
                            </div>
                            <div className="breed-info-box">
                                <span>
                                    Max-weight
                                </span> 
                                <span>{dogInfo.max_weight_male}</span>
                            </div>
                            <div className="breed-info-box">
                                <span>
                                    Shedding
                                </span> 
                                <span>{dogInfo.shedding}</span>
                            </div>
                            <div className="breed-info-box">
                                <span>
                                    Trainability
                                </span> 
                                <span>{dogInfo.trainability}</span>
                            </div>
                            <div className="breed-info-box">
                                <span>
                                    Life Expectancy
                                </span> 
                                <span>{dogInfo.max_life_expectancy}</span>
                            </div>
                        </div>
                        <Link to='/contact' style={{textDecoration: 'none'}}>
                            <button>Contact for Enquiries</button>
                        </Link>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default Adoption;