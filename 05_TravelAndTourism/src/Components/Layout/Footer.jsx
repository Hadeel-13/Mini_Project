import FaceBook from "../../assets/images/icons/FaceBook.png";
import Pinterest from "../../assets/images/icons/Pinterest.png";
import Twitter from "../../assets/images/icons/Twitter.png";
import Instagram from "../../assets/images/icons/Instagram.png";
import logoGray from "../../assets/images/svg/logoGray.svg";
import { Stack, Typography } from "@mui/material";
export default function Footer() {
    const informations = [
        {
            title: "Menu",
            links: ["Home", "Explore", "Travel", "Blog", "Pricing"],
        },
        {
            title: "Information",
            links: [
                "Destinations",
                "Supports",
                "Terms & Conditions",
                "Privacy",
            ],
        },
        {
            title: "Contact Info",
            links: [
                "+963 97555668",
                "ranem.omarr@gmail.com",
                "1245,Damascus, SY",
            ],
        },
    ];
    const socialIcons = [FaceBook, Pinterest, Twitter, Instagram];
    return (
        <>
            <span id="/contact">
                <Typography
                    component={"div"}
                    sx={{
                        backgroundColor: "#343A40",
                        color: "#fff",
                        px: 5,
                        pb: 3,
                    }}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"start"}
                        flexWrap={"wrap"}
                        gap={3}
                        sx={{ py: 5 }}
                    >
                        {informations?.map((info, i) => (
                            <Typography key={i} component={"div"}>
                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: 24,
                                        mb: 2,
                                    }}
                                >
                                    {info.title}
                                </Typography>
                                {info.links?.map((link, index) => (
                                    <Typography
                                        key={index}
                                        component={"div"}
                                        sx={{ mb: 0.7 }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Typography>
                        ))}
                        <Typography component={"div"}>
                            <Typography
                                component={"div"}
                                sx={{ fontWeight: 500, fontSize: 24, mb: 2 }}
                            >
                                Follow us on
                            </Typography>
                            <Stack
                                direction={"row"}
                                flexWrap={"wrap"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={2}
                            >
                                {socialIcons?.map((icon) => (
                                    <Typography key={icon} component={"div"}>
                                        <img
                                            src={icon}
                                            width={32}
                                            height={32}
                                            alt={`${icon}icon`}
                                        />
                                    </Typography>
                                ))}
                            </Stack>
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        <Typography component={"div"}>
                            <Stack
                                alignSelf={"end"}
                                direction={"row"}
                                alignItems={"end"}
                            >
                                <Typography
                                    component={"img"}
                                    src={logoGray}
                                    alt="logo"
                                ></Typography>
                                <Typography
                                    component={"div"}
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: 50,
                                        translate: "-35px 20px",
                                    }}
                                >
                                    Travel
                                </Typography>
                            </Stack>
                        </Typography>
                        <Typography
                            component={"div"}
                            sx={{ fontWeight: 400, fontSize: 14 }}
                        >
                            Copyright © Travel 2023 All rights reserved
                        </Typography>
                        <Typography component={"div"}></Typography>
                    </Stack>
                </Typography>
            </span>
        </>
    );
}
