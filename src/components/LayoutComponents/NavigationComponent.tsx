"use client";

import {
  AccountCircle,
  Diversity3,
  LocalBar,
  Warehouse,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationComponent() {
  /** 현재 경로 */
  const pathName = usePathname();

  /** 네비게이션 바 옵션 객체 */
  const NAV_OPTIONS = [
    {
      title: "홈",
      link: "/",
      icon: function () {
        return (
          <Warehouse
            sx={{
              fontSize: "28px",
              color: pathName === this.link ? "black" : "gray",
            }}
          />
        );
      },
    },
    {
      title: "모임",
      link: "/meetings",
      icon: function () {
        return (
          <Diversity3
            sx={{
              fontSize: "28px",
              color: pathName.startsWith(this.link) ? "black" : "gray",
            }}
          />
        );
      },
    },
    {
      title: "주류",
      link: "/liquors",
      icon: function () {
        return (
          <LocalBar
            sx={{
              fontSize: "28px",
              color: pathName.startsWith(this.link) ? "black" : "gray",
            }}
          />
        );
      },
    },
    {
      title: "마이페이지",
      link: "/mypage",
      icon: function () {
        return (
          <AccountCircle
            sx={{
              fontSize: "28px",
              color: pathName.startsWith(this.link) ? "black" : "gray",
            }}
          />
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTop: "solid 1px #D9D9D9",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          padding: "10px",
          width: 600,
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {NAV_OPTIONS.map((option, index) => (
          <Link
            key={index}
            href={option.link}
            style={{
              color: "inherit",
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "100%",
                height: "100%",
                borderRadius: "5px 5px",
                "&:hover": {
                  backgroundColor: "#cccccc",
                },
              }}
            >
              {option.icon()}
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                {option.title}
              </Typography>
            </Stack>
          </Link>
        ))}
      </Box>
    </Box>
  );
}