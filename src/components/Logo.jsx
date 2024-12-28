import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: { rotate: 0 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
};

const pathVariants = {
    hidden: {
        pathLength: 0
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

const Logo = (propt) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${propt.width}0.000000pt`}
            height={`${propt.height}0.000000pt`}
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            className={`${propt.className}`}
        >
            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="none" stroke="#000000" strokeWidth="5">
                <motion.path
                    variants={pathVariants}
                    stroke={`${propt.stroke}`}
                    strokeWidth={`${propt.strokeWidth}`}
                    d="M2742 2018 c-10 -18 -38 -68 -61 -110 l-42 -78 -555 -2 -556 -3 -56 -112 c-31 -61 -59 -112 -62 -112 -3 1 -66 93 -140 205 -74 112 -141 213 -149 224 -13 20 -13 20 814 20 l827 0 -20 -32z"
                />

                <motion.path
                    variants={pathVariants}
                    stroke={`${propt.stroke}`}
                    strokeWidth={`${propt.strokeWidth}`}
                    d="M945 2033 c3 -10 113 -179 243 -375 l236 -357 32 57 c17 31 63 116 103 189 l72 132 125 3 c80 2 124 -1 122 -7 -3 -9 -113 -217 -314 -595 l-72 -135 -44 -3 -44 -3 -229 340 c-126 187 -230 339 -231 338 -1 -1 -81 -154 -179 -339 l-177 -338 -130 0 -129 0 29 53 c30 53 135 248 411 770 84 158 157 287 161 287 4 0 11 -8 15 -17z"
                />
                <motion.path
                    variants={pathVariants}
                    stroke={`${propt.stroke}`}
                    strokeWidth={`${propt.strokeWidth}`}
                    d="M2282 1633 c-16 -27 -104 -193 -197 -370 l-170 -323 -128 0 -129 0 29 53 c16 28 106 195 198 370 l169 317 128 0 127 0 -27 -47z"
                />
                <motion.path
                    variants={pathVariants}
                    stroke={`${propt.stroke}`}
                    strokeWidth={`${propt.strokeWidth}`}
                    d="M1089 1138 m131 -198 -240 0 -240 0 35 63 c20 34 68 124 108 199 39 75 72 136 73 135 1 -1 60 -91 133 -199z"
                />
            </g>
        </motion.svg>
    );
};

export default Logo;
