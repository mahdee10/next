'use client'

import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

export function AccordionCustomAnimation() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='text-white'>
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors sm:text-2xl text-lg ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                >
                    Terms and Conditions
                </AccordionHeader>
                <AccordionBody>

                    Our Terms and Conditions serve as a legal agreement between [Your Company Name] and our valued users.
                    It outlines the rules and regulations governing the use of our products and services. By using our website,
                    products, or services, you agree to adhere to these terms.
                    It's important to review this document to understand your rights and responsibilities as a user.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors sm:text-2xl text-start text-lg ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                >
                    Common Issues & Troubleshoot
                </AccordionHeader>
                <AccordionBody>
                    We understand that technical hiccups can sometimes occur.
                    If you encounter any issues while using our products or services,
                    our troubleshooting guide is here to help. This section
                    addresses common problems that users might face and provides step-by-step solutions to resolve them
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-0 transition-colors sm:text-2xl text-lg ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                >
                    Privacy and Security
                </AccordionHeader>
                <AccordionBody>
                    we take your privacy and security seriously. We are committed to safeguarding your personal
                    information and ensuring that it remains confidential. Our strict privacy policy outlines
                    how we collect, store, and use your data. We employ industry-standard
                    security measures to protect your information from unauthorized access and data breaches
                </AccordionBody>
            </Accordion>
        </div>
    );
}