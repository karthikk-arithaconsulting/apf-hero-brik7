/* eslint-disable react/prop-types */
import {Title,Text} from "@apf/core";
import React from "react";
import "./HeroBrikSeven.css";
import "@apf/core/dist/style.css";
import { FaStar } from 'react-icons/fa';



function HeroBrikSeven(props){
    const imageOneObject = props.data.data.find(item => item.content.type === "imageOne");
    const imageTwoObject = props.data.data.find(item => item.content.type === "imageTwo");
    const imageThreeObject = props.data.data.find(item => item.content.type === "imageThree" && item.content.for === "background");
    const titleObject = props.data.data.find(item => item.content.type === "title");
    const textOneObject = props.data.data.find(item => item.content.type === "textOne");
    const textTwoObject = props.data.data.find(item => item.content.type === "textTwo");
    const textThreeObject = props.data.data.find(item => item.content.type === "textThree");
    const textFourObject = props.data.data.find(item => item.content.type === "textFour");
    const textFiveObject = props.data.data.find(item => item.content.type === "textFive");
    const imageFourObject = props.data.data.find(item => item.content.type === "imageFour" && item.content.for === "avatar");
    const imageFiveObject = props.data.data.find(item => item.content.type === "imageFive" && item.content.for === "avatar");
    const imageSixObject = props.data.data.find(item => item.content.type === "imageSix" && item.content.for === "avatar");
    const imageSevenObject = props.data.data.find(item => item.content.type === "imageSeven" && item.content.for === "avatar");
    const textSixObject = props.data.data.find(item => item.content.type === "textSix");
    return(
        <div className="Hero-container">
            <div className="Hero-image-container">
                <img src={imageOneObject.content.link} alt="image-one" className="imageOne-Tag"></img>
                <img src={imageTwoObject.content.link} alt="image-two" className="imageTwo-Tag"></img>
                <img src={imageThreeObject.content.link} alt="baground-img" className="imageThree-Tag"></img>
                <div className="imageborder"></div>
            </div>
            <div className="Hero-content-container">
                <div className="Hero-GroupOne-contentTags-container">
                    <Text c={textOneObject.style.font.color} fz={textOneObject.style.font.size} style={{ fontFamily: textOneObject.style.font.family }} fs={textOneObject.style.font.style} fw={textOneObject.style.font.weight} className="Hero-contentTag-textOne" >{textOneObject.content.value}</Text>
                    <Title c={titleObject.style.font.color} fz={titleObject.style.font.size} fw={titleObject.style.font.weight} className="Hero-contentTag-titleOne">{titleObject.content.value}</Title>
                    <Text c={textTwoObject.style.font.color} fz={textTwoObject.style.font.size} style={{ fontFamily: textTwoObject.style.font.family }} fs={textTwoObject.style.font.style} fw={textTwoObject.style.font.weight} className="Hero-contentTag-textTwo">{textTwoObject.content.value}</Text>
                </div>  
                <div className="Hero-GroupTwo-contentTags-container">
                    <div className="Hero-GroupTwo-contentOne-container">
                        <Text className="GroupTwo-contentOne-value">{textThreeObject.content.value}</Text>
                        <Text c={textThreeObject.style.font.color} fz={textThreeObject.style.font.size} style={{ fontFamily: textThreeObject.style.font.family }} fs={textThreeObject.style.font.style} fw={textThreeObject.style.font.weight} className="GroupTwo-contentOne-label">{textThreeObject.content.label}</Text>
                    </div>
                    <div className="Hero-GroupTwo-contentTwo-container">
                        <Text className="GroupTwo-contentTwo-value">{textFourObject.content.value}</Text>
                        <Text c={textFourObject.style.font.color} fz={textFourObject.style.font.size} style={{ fontFamily: textFourObject.style.font.family }} fs={textFourObject.style.font.style} fw={textFourObject.style.font.weight} className="GroupTwo-contentTwo-label">{textFourObject.content.label}</Text>
                    </div>
                    <div className="Hero-GroupTwo-contentThree-container">
                        <Text className="GroupTwo-contentThree-value">{textFiveObject.content.value}</Text>
                        <Text className="GroupTwo-contentThree-label">{textFiveObject.content.label}</Text>
                    </div>
                </div> 
                <div className="Hero-GroupThree-contentTags-container">
                    <div className="GroupThree-contentOne-container">
                        <img src={imageFourObject.content.link} className="GroupThree-imgOne"></img>
                        <img src={imageFiveObject.content.link} className="GroupThree-imgTwo"></img>
                        <img src={imageSixObject.content.link} className="GroupThree-imgThree"></img>
                        <img src={imageSevenObject.content.link} className="GroupThree-imgFour"></img>
                    </div>

                    <div className="GroupThree-contentTwo-container">
                        <div className="star-icon"> 
                            <FaStar size={20} color="orange"/>
                            <FaStar size={20} color="orange"/>
                            <FaStar size={20} color="orange"/>
                            <FaStar size={20} color="orange"/>
                            <FaStar size={20} color="orange"/>
                        </div>
                        <div className="GroupThree-rating">
                            <Text c={textSixObject.style.font.color} fz={textSixObject.style.font.size} style={{ fontFamily: textSixObject.style.font.family }} fs={textSixObject.style.font.style} fw={textSixObject.style.font.weight}>{textSixObject.content.value}</Text>
                        </div>
                            
                    </div>

                </div>
            </div>
        </div>
    );
}
export default HeroBrikSeven;