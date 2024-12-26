import * as React from "react";
import { useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";

export default function Experience() {
    const isSmallScreen = useMediaQuery("(max-width:500px)"); // Detect screens smaller than 960px

    const work_experiences = [
        {
            company: "GE Healthcare",
            role: "EID Intern",
            duration: "May 2024 - July 2024",
            description:
                "Conducted experiments with medical image segmentation models (UniverSeg and Tyche) to achieve high generalization and accuracy, enabling segmentation of ultrasound images without the need for training.",
            image_src: "https://companieslogo.com/img/orig/GEHC-120f4dff.png?t=1720244492",
        },
        {
            company: "Nandi Toyota",
            role: "Data Analyst",
            duration: "May 2023 - June 2023",
            description:
                "Conducted experiments with medical image segmentation models (UniverSeg and Tyche) to achieve high generalization and accuracy, enabling segmentation of ultrasound images without the need for training.",
            image_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVP7cg1j7gBfUJ0VUZi9U69Ix5AXAgQ5q9Q&s",
        },
    ];

    return (
        <div className="bg-black">
            <div className="p-6"></div>
            <div className="flex flex-col items-center text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
                    Work Experience
                </h2>
            </div>
            <Timeline position={isSmallScreen ? "right" : "alternate"}>
                {work_experiences.map((work_exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align={isSmallScreen ? "left" : "right"}
                            variant="body2"
                            color="white"
                        >
                            {work_exp.duration}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <FastfoodIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <div className="bg-color_4 rounded-3xl w-full max-w-screen-xl p-8">
                                <div
                                    className={`flex items-center ${
                                        index % 2 === 1 && !isSmallScreen ? "justify-end" : ""
                                    } space-x-2 py-2`}
                                >
                                    <img
                                        className="object-cover w-8 h-8 bg-white rounded-full"
                                        src={work_exp.image_src}
                                        alt={`${work_exp.company} Logo`}
                                    />
                                    <Typography
                                        variant="h5"
                                        component="span"
                                        style={{ fontWeight: "bold" }}
                                        className="whitespace-nowrap text-white"
                                    >
                                        {work_exp.company}
                                    </Typography>
                                </div>
                                <Typography
                                    className={`text-orange-100 mt-4 ${
                                        index % 2 === 1 && !isSmallScreen ? "text-right" : "text-left"
                                    }`}
                                >
                                    {work_exp.role}
                                </Typography>
                                <Typography className="mt-4 text-gray-100">{work_exp.description}</Typography>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}
