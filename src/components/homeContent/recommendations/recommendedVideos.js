import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Web development"}
        imgSrc={
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        instructor={"Sooryakanth"}
        rating={4.6}
        noOfStudents={"(1650)"}
        price={"₹5000"}
      />
      <VideoCard
        courseTitle={" machine learning"}
        imgSrc={
          "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="
        }
        instructor={"Pritviraj"}
        rating={4.4}
        noOfStudents={"(1110)"}
        price={"₹5000"}
      />
      <VideoCard
        courseTitle={"photography"}
        imgSrc={
          "https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
        }
        instructor={"Nischit S Shetty"}
        rating={4.8}
        noOfStudents={"(499)"}
        price={"₹2000"}
      />
      <VideoCard
        courseTitle={"Placement training"}
        imgSrc={
          "https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6"
        }
        instructor={"Allen Peter"}
        rating={4.8}
        noOfStudents={"(2,548)"}
        price={"₹2000"}
      />
    </div>
  );
}

export default RecommendedVideos;
