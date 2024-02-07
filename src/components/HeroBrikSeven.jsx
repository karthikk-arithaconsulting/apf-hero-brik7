/* eslint-disable react/prop-types */
import {Title,Text} from "@apf/core";
import React from "react";
import "./HeroBrikSeven.css";
import "@apf/core/dist/style.css";
import { FaStar } from "react-icons/fa";



function HeroBrikSeven(props){
    const imageOneObject = props.data.data.find(item => item?.content?.type === "img" && item?.content?.label === "image-b");
    const imageTwoObject = props.data.data.find(item => item?.content?.type === "img" && item?.content?.label === "image-a");
    const imageThreeObject = props.data.data.find(item => item?.content?.type === "img" && item?.content?.for === "image-c");
    const imageBackground = props.data.data.find(item => item?.content?.type === "img" && item?.content?.label === "background image");
    const titleObject = props.data.data.find(item => item?.content?.type === "title" && item?.content?.for === "mainTitle");
    const textOneObject = props.data.data.find(item => item?.content?.type === "subtext" && item?.content?.for === "subText");
    const textTwoObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.for === "mainText");
    const textThreeObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "text-a");
    const textAObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "sub text-a");
    const textFourObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "text-b");
    const textBObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "sub text-b");
    const textFiveObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "text-c");
    const textCObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "sub text-c");
    const imageFourObject = props.data.data.find(item => item.content.type === "img" && item.content.for === "avatar-a");
    const imageFiveObject = props.data.data.find(item => item.content.type === "img" && item.content.for === "avatar-b");
    const imageSixObject = props.data.data.find(item => item.content.type === "img" && item.content.for === "avatar-c");
    const imageSevenObject = props.data.data.find(item => item.content.type === "img" && item.content.for === "avatar-d");
    const textSixObject = props.data.data.find(item => item?.content?.type === "text" && item?.content?.label === "text-d");
    return(
        <div className="Hero-container">
            <div className="background">
                <img src={imageBackground?.content?.src} className="backgroundChild"></img>
            </div>
                <div className="Hero-image-container">
                <img src={imageOneObject?.content?.src} alt="image-one" className="imageOne-Tag"></img>
                <img src={imageTwoObject?.content?.src} alt="image-two" className="imageTwo-Tag"></img>
                <img src={imageThreeObject?.content?.src} alt="background-img" className="imageThree-Tag"></img>
                <div style={{border:`2px solid orange`}} className="imageborder"></div>
            </div>
            <div className="Hero-content-container">
                <div className="Hero-GroupOne-contentTags-container">
                    <Text c={textOneObject.style.font.color} fz={textOneObject.style.font.size} style={{ fontFamily: textOneObject.style.font.family }} fs={textOneObject.style.font.style} fw={textOneObject.style.font.weight} className="Hero-contentTag-textOne" >{textOneObject.content.value}</Text>
                    <Title c={titleObject.style.font.color} fz={titleObject.style.font.size} fw={titleObject.style.font.weight} className="Hero-contentTag-titleOne">{titleObject.content.value}</Title>
                    <Text c={textTwoObject.style.font.color} fz={textTwoObject.style.font.size} style={{ fontFamily: textTwoObject.style.font.family }} fs={textTwoObject.style.font.style} fw={textTwoObject.style.font.weight} className="Hero-contentTag-textTwo">{textTwoObject.content.value}</Text>
                </div>  
                <div className="Hero-GroupTwo-contentTags-container">
                    <div className="Hero-GroupTwo-contentOne-container">
                        <Text c={textAObject.style.font.color} fz={textAObject.style.font.size} style={{ fontFamily: textAObject.style.font.family }} fs={textAObject.style.font.style} fw={textAObject.style.font.weight} className="GroupTwo-contentOne-value">{textAObject?.content?.value}</Text>
                        <Text c={textThreeObject.style.font.color} fz={textThreeObject?.style?.font?.size} style={{ fontFamily: textThreeObject.style.font.family }} fs={textThreeObject.style.font.style} fw={textThreeObject.style.font.weight} className="GroupTwo-contentOne-label">{textThreeObject?.content?.value}</Text>
                    </div>
                    <div className="Hero-GroupTwo-contentTwo-container">
                        <Text c={textBObject.style.font.color} fz={textBObject.style.font.size} style={{ fontFamily: textBObject.style.font.family }} fs={textBObject.style.font.style} fw={textBObject.style.font.weight} className="GroupTwo-contentTwo-value">{textBObject.content.value}</Text>
                        <Text c={textFourObject.style.font.color} fz={textFourObject.style.font.size} style={{ fontFamily: textFourObject.style.font.family }} fs={textFourObject.style.font.style} fw={textFourObject.style.font.weight} className="GroupTwo-contentTwo-label">{textFourObject.content.value}</Text>
                    </div>
                    <div className="Hero-GroupTwo-contentThree-container">
                        <Text c={textCObject.style.font.color} fz={textCObject.style.font.size} style={{ fontFamily: textCObject.style.font.family }} fs={textCObject.style.font.style} fw={textCObject.style.font.weight}  className="GroupTwo-contentThree-value">{textCObject.content.value}</Text>
                        <Text c={textFiveObject.style.font.color} fz={textFiveObject.style.font.size} style={{ fontFamily: textFiveObject.style.font.family }} fs={textFiveObject.style.font.style} fw={textFiveObject.style.font.weight} className="GroupTwo-contentThree-label">{textFiveObject.content.value}</Text>
                    </div>
                </div> 
                <div className="Hero-GroupThree-contentTags-container">
                    <div className="GroupThree-contentOne-container">
                        <img src={imageFourObject.content.src} className="GroupThree-imgOne"></img>
                        <img src={imageFiveObject.content.src} className="GroupThree-imgTwo"></img>
                        <img src={imageSixObject.content.src} className="GroupThree-imgThree"></img>
                        <img src={imageSevenObject.content.src} className="GroupThree-imgFour"></img>
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