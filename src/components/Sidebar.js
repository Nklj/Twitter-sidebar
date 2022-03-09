import SidebarLink from "./SidebarLink";
import "./sidebar.css";

import { useState } from "react";

import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
  BookmarkBorderOutlined,
  ListAltOutlined,
  ChatOutlined,
  OfflineBoltOutlined,
  PostAddOutlined,
  CallMadeOutlined,
  BarChartOutlined,
  SettingsOutlined,
  HelpOutlineOutlined,
  BrushOutlined,
  AccessibilityNewOutlined,
} from "@mui/icons-material";

import { Button, Menu, MenuItem } from "@mui/material";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const options = [
    { link: "Bookmarks", icon: <BookmarkBorderOutlined /> },
    { link: "List", icon: <ListAltOutlined /> },
    { link: "Topic", icon: <ChatOutlined /> },
    { link: "Moments", icon: <OfflineBoltOutlined /> },
    { link: "Newsletters", icon: <PostAddOutlined /> },
    { link: "Twitter Ads", icon: <CallMadeOutlined /> },
    { link: "Analytics", icon: <BarChartOutlined /> },
    { link: "Settings", icon: <SettingsOutlined /> },
    { link: "Help Center", icon: <HelpOutlineOutlined /> },
    { link: "Display", icon: <BrushOutlined /> },
    { link: "Keyboard shortcuts", icon: <AccessibilityNewOutlined /> },
  ];

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="sidebar">
      <SidebarLink text="Home" Icon={Home} />
      <SidebarLink text="Explore" Icon={Search} />
      <SidebarLink text="Notifications" Icon={NotificationsNone} />
      <SidebarLink text="Messages" Icon={MailOutline} />
      <SidebarLink text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarLink text="List" Icon={ListAlt} />
      <SidebarLink text="Profile" Icon={PermIdentity} />
      <Button id="moreLink" onClick={handleClick}>
        <MoreHoriz /> More
      </Button>
      <Button id="tweet">Tweet</Button>
      <Menu id="long-menu" open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option.link} onClick={handleClose}>
            {option.icon} {option.link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Sidebar;
