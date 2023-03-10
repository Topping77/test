import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Link} from 'react-router-dom';
import test from './ImgCard.json' //ImgCard.json <<<< 테스트용 데이터
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

   
function App() {
  const { collapseSidebar } = useProSidebar();
  
  const url = 'https://naver.com'   //이미지박스에 주소 걸기 테스트용


  return (
    <div id="app"  style={({ height: "auto" }, { display: "flex" })}>
      <Sidebar 
          style={{ height: "auto" }}
          backgroundColor="rgb(0, 0, 0, 0)" 
          breakPoint="sm" 
          transitionDuration={400}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>

      {/* 여기서부터는 메인 이미지 카드부분 */}
      <main>
      <Box sx={{ width: 'auto', height: 'auto',marginLeft:25,marginRight:25,marginTop:10}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {test.itemData.map((item) => (
          <ImageListItem key={item.img} className="bg-image hover-zoom">
            
        
            <img  
              src={item.img}
              alt={item.title}
              onClick={()=>{window.open(url)}}
              />
        
         
            
          </ImageListItem>
 
        ))}
      </ImageList>
    </Box>
      </main>
    </div>
  );
}

export default App;

